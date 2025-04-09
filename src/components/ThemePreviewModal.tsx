import React from 'react';
import { X, Sparkles, Boxes } from 'lucide-react';
import { UiTheme } from '../data/themes';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ThemePreviewModalProps {
  theme: UiTheme | null;
  isOpen: boolean;
  onClose: () => void;
}

const ThemePreviewModal: React.FC<ThemePreviewModalProps> = ({ 
  theme, 
  isOpen, 
  onClose 
}) => {
  if (!theme) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogOverlay className="bg-foreground/30 backdrop-blur-sm" />
      <DialogContent className="p-0 border-none bg-transparent shadow-none max-w-4xl">
        <motion.div 
          className="doodle-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="doodle-frame bg-white p-6">
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-doodle-pencil bg-opacity-10 hover:bg-opacity-20"
            >
              <X className="h-5 w-5" />
            </button>
            
            <h2 className="font-sketch text-2xl mb-4">{theme.title}</h2>
            
            <div className="relative rounded-md overflow-hidden mb-6">
              <div className="absolute top-3 left-3 flex gap-2">
                <div className={cn(
                  "px-3 py-1 rounded-full",
                  "bg-doodle-highlight font-handwritten text-sm"
                )}>
                  {theme.category}
                </div>
                <div className={cn(
                  "px-3 py-1 rounded-full",
                  "bg-doodle-paper font-handwritten text-sm border border-doodle-pencil border-opacity-30"
                )}>
                  {theme.uiStyle}
                </div>
              </div>
              <img 
                src={theme.imageUrl} 
                alt={theme.title} 
                className="w-full aspect-video object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.svg';
                }}
              />
            </div>
            
            <p className="mb-4">{theme.description}</p>
            
            <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <Sparkles className="h-4 w-4 mr-2 text-doodle-accent" />
                <span className="font-sketch text-sm mr-2">Model:</span>
                <span className="text-sm font-handwritten">{theme.model}</span>
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <Boxes className="h-4 w-4 mr-2 text-doodle-accent" />
                  <span className="font-sketch text-sm">Tech:</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {theme.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-0.5 bg-doodle-paper border border-doodle-pencil/30 rounded text-xs font-handwritten"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <Link 
              to={`/theme/${theme.id}`}
              className="inline-flex items-center px-6 py-3 bg-doodle-accent text-white rounded-lg font-handwritten text-lg hover:bg-doodle-accent/90 transition-all hover:scale-105 shadow-md hover:shadow-lg"
            >
              View Details
            </Link>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default ThemePreviewModal;
