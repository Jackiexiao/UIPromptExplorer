
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface NotebookPromptProps {
  prompt: string;
  className?: string;
}

const NotebookPrompt: React.FC<NotebookPromptProps> = ({ prompt, className }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("notebook-paper relative", className)}>
      <div className="absolute top-0 left-0 h-6 w-full bg-doodle-blue bg-opacity-20">
        <div className="flex">
          <div className="h-6 w-6 rounded-full bg-doodle-accent m-[3px]"></div>
          <div className="h-6 w-6 rounded-full bg-doodle-green m-[3px]"></div>
          <div className="h-6 w-6 rounded-full bg-doodle-highlight m-[3px]"></div>
        </div>
      </div>
      
      <motion.div
        className="mt-6 pl-6 font-sketch"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-lg font-handwritten mb-4">Theme Prompt:</h3>
        <p>{prompt}</p>
      </motion.div>
      
      <button
        onClick={copyToClipboard}
        className="absolute top-16 right-3 p-2 text-doodle-pencil hover:text-doodle-accent transition-colors"
        title="Copy prompt"
      >
        {copied ? (
          <Check className="h-5 w-5 text-doodle-green" />
        ) : (
          <Copy className="h-5 w-5" />
        )}
      </button>
    </div>
  );
};

export default NotebookPrompt;
