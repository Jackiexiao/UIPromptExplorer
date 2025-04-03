
import React from 'react';
import { Pencil } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeHero: React.FC = () => {
  return (
    <div className="py-12 md:py-20 text-center relative">
      {/* Floating pencil illustrations */}
      <motion.div 
        className="absolute top-1/4 left-[10%] text-doodle-blue rotate-45"
        animate={{ y: [0, -15, 0], rotate: 55 }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      >
        <Pencil className="h-12 w-12" strokeWidth={1.5} />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-1/4 right-[15%] text-doodle-accent -rotate-12"
        animate={{ y: [0, 20, 0], rotate: -20 }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
      >
        <Pencil className="h-10 w-10" strokeWidth={1.5} />
      </motion.div>
      
      <motion.div 
        className="absolute top-1/3 right-[25%] text-doodle-green rotate-[145deg]"
        animate={{ y: [0, -10, 0], rotate: 155 }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
      >
        <Pencil className="h-8 w-8" strokeWidth={1.5} />
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-handwritten text-doodle-pencil mb-4">
          UI Theme Explorer
        </h1>
        
        <p className="text-xl md:text-2xl font-sketch text-muted-foreground max-w-2xl mx-auto">
          A playful collection of hand-drawn UI themes for your next creative project
        </p>
      </motion.div>
    </div>
  );
};

export default ThemeHero;
