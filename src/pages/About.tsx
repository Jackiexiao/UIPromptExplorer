
import React from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import WavyDivider from '../components/WavyDivider';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-handwritten mb-6">About UI Prompt Explorer</h1>
          
          <div className="doodle-frame bg-white p-6 mb-8">
            <p className="mb-4">
              Welcome to the UI Prompt Explorer, a playful collection of hand-drawn user interface themes designed to inspire your next creative project.
            </p>
            <p className="mb-4">
              Each theme in our gallery represents a unique visual style that can be adapted for websites, mobile apps, or digital products. 
              Browse through our collection to find inspiration or use the provided prompts to generate similar designs.
            </p>
            <p>
              This project was created as an exploration of creative design possibilities, showcasing how hand-drawn aesthetics can bring warmth and personality to digital interfaces.
            </p>
          </div>
          
          <WavyDivider className="my-8" />
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="doodle-container">
              <div className="doodle-frame bg-white p-6">
                <h2 className="text-2xl font-sketch mb-4">How to Use</h2>
                <ul className="space-y-2">
                  <li>• Browse themes in our gallery</li>
                  <li>• Click on any theme for a preview</li>
                  <li>• View detailed information and prompts</li>
                  <li>• Use the prompts as inspiration for your designs</li>
                </ul>
              </div>
            </div>
            
            <div className="doodle-container">
              <div className="doodle-frame bg-white p-6">
                <h2 className="text-2xl font-sketch mb-4">Contact</h2>
                <p className="mb-2">Have questions or suggestions?</p>
                <p className="font-handwritten text-doodle-blue">
                  hello@uithemeexplorer.com
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      
      <footer className="border-t border-doodle-pencil border-opacity-30 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="font-sketch text-muted-foreground">
            UI Prompt Explorer - A playful collection of UI themes prompts
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
