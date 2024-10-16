"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MODELS } from "./models";
import ollama, { PullRequest } from "ollama/browser";
import { useEffect, useState } from "react";

export interface ModelSelectProps {
  setModel: (model: string) => void;
  setModelLoading: (loading: boolean) => void;
}

export const ModelSelect = ({
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
  }, []);

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
                {downloaded.includes(`${model}:latest`) && "✅"}
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
