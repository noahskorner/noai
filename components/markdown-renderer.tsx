import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

export interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  return (
    <div className="prose dark:prose-invert">
      <ReactMarkdown rehypePlugins={[rehypeHighlight, remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
};
