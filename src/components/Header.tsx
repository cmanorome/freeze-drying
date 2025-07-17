import React from 'react';
import { Snowflake, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Snowflake className="h-8 w-8 text-primary-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">
              CryoTech Solutions
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#process" className="text-gray-700 hover:text-primary-600 font-medium">
              Process
            </a>
            <a href="#benefits" className="text-gray-700 hover:text-primary-600 font-medium">
              Benefits
            </a>
            <a href="#industries" className="text-gray-700 hover:text-primary-600 font-medium">
              Industries
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 font-medium">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button className="btn-primary">
              Get Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#process" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                Process
              </a>
              <a href="#benefits" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                Benefits
              </a>
              <a href="#industries" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                Industries
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                Contact
              </a>
              <div className="px-3 py-2">
                <button className="btn-primary w-full">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 