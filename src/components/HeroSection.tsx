import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const HeroSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleTagClick = (category: string) => {
    setSearchQuery(category);
  };

  const handleSearch = () => {
    // Here you would typically perform the search
    //console.log('Searching for:', searchQuery);
    // Clear the search bar after searching
    setSearchQuery('');
  };
  return (
    <section className="hero-section">
      {/* Background */}
      <div className="absolute inset-0" />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8" style={{ height: '100%' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center" style={{ height: '100%' }}>
          {/* Left Column - Main Content with Search */}
          <div className="flex flex-col gap-8 justify-center" style={{ height: '100%' }}>
            <h1 
              className="text-5xl lg:text-6xl font-bold text-white"
              style={{ 
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}
            >
              Search the work of the best artists
            </h1>
            
            {/* Search Interface - On the Left Side Below Headline */}
            <div>
              {/* Search Bar */}
              <div className="flex gap-6 search-interface">
                <div className="flex items-center bg-white rounded-md search-bar-container" style={{ width: '80%' }}>
                  <div className="flex items-center" style={{ marginLeft: '16px', marginRight: '8px' }}>
                    {FiSearch({ size: 18, color: "#6B7280" })}
                  </div>
                  <input
                    type="text"
                    placeholder="search for artists, work name, or category"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 py-4 pr-4 bg-transparent text-gray-900 placeholder-gray-500 text-lg rounded-md"
                    style={{
                      border: 'none',
                      outline: 'none',
                      boxShadow: 'none',
                      width: '100%'
                    }}
                  />
                </div>
                <button 
                  onClick={handleSearch}
                  className="px-8 py-4 bg-rose-700 text-white font-medium text-lg rounded-md search-button"
                  style={{
                    border: 'none',
                    outline: 'none',
                    boxShadow: 'none'
                  }}
                >
                  Search
                </button>
              </div>
              
              {/* Category Tags */}
              <div className="flex flex-wrap gap-4" style={{ marginTop: '4px' }}>
              {['Oil Painting', 'Abstract Art', 'Sculpture', 'Art Deco', 'Pop Art'].map((category) => (
                <span
                  key={category}
                  onClick={() => handleTagClick(category)}
                  className="px-2 py-1 text-white rounded-md font-medium hover:bg-white hover:text-gray-700 transition-colors cursor-pointer"
                  style={{
                    border: '2px solid #FFFFFF',
                    fontSize: '12px'
                  }}
                >
                  {category}
                </span>
              ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Person Image Only */}
          <div className="flex justify-center lg:justify-end items-end" style={{ height: '100%' }}>
            <div className="relative w-full max-w-lg">
              <img
                src={process.env.PUBLIC_URL + "/images/hero-section-bg.png"}
                alt="Artist"
                className="w-full h-auto"
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  verticalAlign: 'top'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
