
import React from 'react';
import { cn } from '@/lib/utils';

interface WavyDividerProps {
  className?: string;
}

const WavyDivider: React.FC<WavyDividerProps> = ({ className }) => {
  return <div className={cn("wavy-divider", className)} />;
};

export default WavyDivider;
