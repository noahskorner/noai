'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MODELS } from './models';
import { Ollama, PullRequest } from 'ollama/browser';
import { useEffect, useState } from 'react';

export interface ModelSelectProps {
  ollama: Ollama;
  model: string | null;
  setModel: (model: string) => void;
  setModelLoading: (loading: boolean) => void;
}

export const ModelSelect = ({
  ollama,
  model: currentModel,
  setModel,
  setModelLoading,
}: ModelSelectProps) => {
  const [downloaded, setDownloaded] = useState<Array<string>>([]);
  const [progress, setProgress] = useState<{
    model: string;
    completed: number;
  } | null>(null);

  const onModelSelect = async (model: string) => {
    setModelLoading(true);

    try {
      // Unload the current model
      if (currentModel != null) {
        await ollama.generate({
          model: currentModel,
          keep_alive: 0,
          prompt: '',
          stream: false,
        });
      }

      const responses = await ollama.pull({
        model: model,
        stream: true,
      } satisfies PullRequest & { stream: true });

      for await (const response of responses) {
        if (response.completed && response.total && response.total > 0) {
          setProgress({
            model: model,
            completed: (response.completed / response.total) * 100,
          });
        }
      }

      setModel(model);
      setProgress(null);
      setDownloaded((prev) => [...prev, model]);
    } finally {
      setModelLoading(false);
    }
  };

  useEffect(() => {
    const loadModels = async () => {
      const response = await ollama.list();
      setDownloaded(response.models.map((model) => model.name));
    };

    loadModels();
  }, [ollama]);

  return (
    <>
      <Select onValueChange={onModelSelect}>
        <SelectTrigger className="w-[20rem]">
          <SelectValue placeholder="Select model" />
        </SelectTrigger>
        <SelectContent>
          {MODELS.map((model) => {
            return (
              <SelectItem key={model} value={model}>
                {model}&nbsp;
                {downloaded.includes(`${model}:latest`) && '✅'}
                {progress && progress.model === model && (
                  <>({progress.completed.toFixed(2)}%)</>
                )}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </>
  );
};
