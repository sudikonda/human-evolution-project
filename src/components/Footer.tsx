import React from 'react';
import { Clock, Github, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-800 text-white py-16" id="about">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <Clock className="w-6 h-6 mr-2 text-amber-400" />
              <h3 className="text-xl font-medium">Human Evolution</h3>
            </div>
            <p className="text-stone-300 mb-6">
              Exploring the fascinating journey of human evolution through an interactive and educational experience.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-stone-400 hover:text-white transition-colors"
                aria-label="Github"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-stone-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-stone-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4 border-b border-stone-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Timeline', 'Species', 'Visuals', 'About'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-stone-300 hover:text-amber-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-medium mb-4 border-b border-stone-700 pb-2">
              Learn More
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://humanorigins.si.edu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-stone-300 hover:text-amber-400 transition-colors"
                >
                  Smithsonian Human Origins
                </a>
              </li>
              <li>
                <a 
                  href="https://www.amnh.org/exhibitions/permanent/human-origins" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-stone-300 hover:text-amber-400 transition-colors"
                >
                  American Museum of Natural History
                </a>
              </li>
              <li>
                <a 
                  href="https://www.nhm.ac.uk/discover/human-evolution.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-stone-300 hover:text-amber-400 transition-colors"
                >
                  Natural History Museum
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-stone-700 text-stone-400 text-center text-sm">
          <p>© 2025 Human Evolution Project. All images from Pexels. This is an educational website.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;