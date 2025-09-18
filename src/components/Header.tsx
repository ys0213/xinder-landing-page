import React from 'react';
import { BiMenuAltRight } from 'react-icons/bi';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 left-0 right-0 z-50">
      <div className="w-full max-w-7xl mx-auto px-4 py-6 flex justify-between items-center" style={{ maxWidth: '90%', position: 'relative' }}>
        <div className="text-4xl text-white">
          xinder
        </div>
        
        {/* Desktop Navigation */}
        <div className="desktop-nav">
          <nav className="flex items-center gap-4">
            <a href="#explore" className="text-white hover:text-gray-200 transition-colors font-medium" style={{ textDecoration: 'none' }}>Explore</a>
            <a href="#solutions" className="text-white hover:text-gray-200 transition-colors font-medium" style={{ textDecoration: 'none' }}>Solutions</a>
            <a href="#articles" className="text-white hover:text-gray-200 transition-colors font-medium" style={{ textDecoration: 'none' }}>Articles</a>
            <a href="#signin" className="text-white hover:text-gray-200 transition-colors font-medium" style={{ textDecoration: 'none' }}>Sign In</a>
          </nav>
          <button
            className="join-now-button"
            style={{
              padding: '8px 16px',
              border: '2px solid white',
              backgroundColor: 'transparent',
              color: 'white',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              outline: 'none'
            }}
          >
            Join Now
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="mobile-menu-icon" style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)' }}>
          <div 
            style={{ 
              transform: 'rotate(180deg)',
              cursor: 'pointer',
              color: '#FFFFFF'
            }}
            className="hover:text-gray-200 transition-colors"
          >
            {BiMenuAltRight({ size: 20, color: "#FFFFFF" })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
