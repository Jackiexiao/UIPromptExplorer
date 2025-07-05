import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useI18n } from '../hooks/useI18n';

interface NotebookPromptProps {
  prompt: string;
  className?: string;
}

const NotebookPrompt: React.FC<NotebookPromptProps> = ({ prompt, className }) => {
  const [copied, setCopied] = useState(false);
  const { t } = useI18n();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("bg-white border border-gray-200 rounded-lg p-6 shadow-sm relative", className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{t('themeDetail.themePrompt')}</h3>
        <button
          onClick={copyToClipboard}
          className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
          title={t('themeDetail.copyPrompt')}
        >
          {copied ? (
            <Check className="h-5 w-5 text-green-600" />
          ) : (
            <Copy className="h-5 w-5" />
          )}
        </button>
      </div>
      
      <motion.div
        className="text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p>{prompt}</p>
      </motion.div>
    </div>
  );
};

export default NotebookPrompt;
