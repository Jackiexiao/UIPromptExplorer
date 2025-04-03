
import React from 'react';
import { Link } from 'react-router-dom';
import { Pencil } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="border-b border-doodle-pencil border-opacity-30 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative">
            <Pencil className="h-8 w-8 text-doodle-blue rotate-45" strokeWidth={2.5} />
            <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-doodle-highlight" />
          </div>
          <h1 className="text-2xl font-handwritten text-doodle-pencil">UI Theme Explorer</h1>
        </Link>
        <nav>
          <ul className="flex gap-8 font-sketch">
            <li><Link to="/" className="hover:text-doodle-accent transition-colors">Home</Link></li>
            <li><Link to="/" className="hover:text-doodle-accent transition-colors">Themes</Link></li>
            <li><Link to="/" className="hover:text-doodle-accent transition-colors">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
