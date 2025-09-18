import React from 'react';

const LogosSection: React.FC = () => {
  const logos = [
    { name: 'SmartFinder', src: process.env.PUBLIC_URL + '/images/smartfinder-logo.svg' },
    { name: 'Zoomerr', src: process.env.PUBLIC_URL + '/images/zoomerr-logo.svg' },
    { name: 'Shell', src: process.env.PUBLIC_URL + '/images/shell-logo.svg' },
    { name: 'Waves', src: process.env.PUBLIC_URL + '/images/waves-logo.svg' },
    { name: 'ArtVenue', src: process.env.PUBLIC_URL + '/images/artvenue-logo.svg' },
  ];

  return (
    <section className="py-12 bg-gray-100 logos-section">
      <div className="max-w-7xl mx-auto px-20">
        <div className="logo-grid">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-colors"
              style={{ 
                filter: 'grayscale(100%)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
              onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}
            >
              <img 
                src={logo.src} 
                alt={logo.name}
                className="h-8 w-auto"
                style={{ height: '2rem', width: 'auto' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
