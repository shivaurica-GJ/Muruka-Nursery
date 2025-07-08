import { Trees, Apple, Mountain, Leaf, Flower } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  className?: string;
  isMobile?: boolean;
}

const Navigation = ({ activeSection, onNavigate, className = '', isMobile = false }: NavigationProps) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: <Trees className="w-4 h-4" /> },
    { id: 'fruit-trees', label: 'Fruit Trees', icon: <Apple className="w-4 h-4" /> },
    { id: 'evergreen', label: 'Evergreen', icon: <Mountain className="w-4 h-4" /> },
    { id: 'shrubs', label: 'Shrubs', icon: <Leaf className="w-4 h-4" /> },
    { id: 'flowering-trees', label: 'Flowering Trees', icon: <Flower className="w-4 h-4" /> },
  ];

  const baseClasses = isMobile 
    ? "w-full flex items-center space-x-3 px-3 py-3 rounded-lg transition-all"
    : "flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200";

  const containerClasses = isMobile 
    ? className 
    : `${className} items-center space-x-8`;

  return (
    <nav className={containerClasses}>
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className={`${baseClasses} ${
            activeSection === item.id 
              ? 'bg-green-100 text-green-700 shadow-sm' 
              : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
          }`}
        >
          {item.icon}
          <span className="font-medium">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default Navigation;