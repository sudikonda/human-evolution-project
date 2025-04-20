import React, { useState, useEffect } from 'react';
import { Clock, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="flex items-center">
          <Clock className={`w-7 h-7 mr-2 ${isScrolled ? 'text-amber-600' : 'text-white'}`} />
          <span className={`text-xl font-semibold ${isScrolled ? 'text-stone-800' : 'text-white'}`}>
            Human Evolution
          </span>
        </a>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['Timeline', 'Species', 'Visuals', 'About'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className={`font-medium hover:text-amber-500 transition-colors ${
                    isScrolled ? 'text-stone-800' : 'text-white'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <button 
          className={`md:hidden ${isScrolled ? 'text-stone-800' : 'text-white'}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`
        fixed inset-0 bg-stone-900 bg-opacity-95 flex flex-col justify-center items-center transition-all duration-300 z-50
        ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
      `}>
        <button 
          className="absolute top-5 right-5 text-white"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
        
        <nav>
          <ul className="flex flex-col space-y-6 text-center">
            {['Timeline', 'Species', 'Visuals', 'About'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-white text-2xl font-medium hover:text-amber-500 transition-colors"
                  onClick={toggleMenu}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;