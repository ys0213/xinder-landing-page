import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { IoIosArrowForward } from 'react-icons/io';

const LatestSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 5; // Number of items to show at once
  const masterpieces = [
    {
      title: 'Flower Decorations',
      author: 'Melvina Spring',
      image: process.env.PUBLIC_URL + '/images/LatestSection1.png',
      badge: 'Promoted'
    },
    {
      title: 'Flower Decorations',
      author: 'Melvina Spring',
      image: process.env.PUBLIC_URL + '/images/LatestSection2.png',
      badge: 'Featured'
    },
    {
      title: 'Splash',
      author: 'Rwanda Melflor',
      image: process.env.PUBLIC_URL + '/images/LatestSection3.png'
    },
    {
      title: 'Colorful Face',
      author: 'Melvina Spring',
      image: process.env.PUBLIC_URL + '/images/LatestSection4.png'
    },
    {
      title: 'Wooden Texture',
      author: 'Artist Name',
      image: process.env.PUBLIC_URL + '/images/LatestSection5.png'
    },
    {
      title: 'Flower Decorations_2',
      author: 'Melvina Spring',
      image: process.env.PUBLIC_URL + '/images/LatestSection1.png',
      badge: 'Promoted'
    },
    {
      title: 'Flower Decorations_2',
      author: 'Melvina Spring',
      image: process.env.PUBLIC_URL + '/images/LatestSection2.png',
      badge: 'Featured'
    },
    {
      title: 'Splash_2',
      author: 'Rwanda Melflor',
      image: process.env.PUBLIC_URL + '/images/LatestSection3.png'
    },
    {
      title: 'Colorful Face_2',
      author: 'Melvina Spring',
      image: process.env.PUBLIC_URL + '/images/LatestSection4.png'
    },
    {
      title: 'Wooden Texture_2',
      author: 'Artist Name',
      image: process.env.PUBLIC_URL + '/images/LatestSection5.png'
    }
  ];

  // Calculate which items to show based on current index
  const visibleItems = masterpieces.slice(currentIndex, currentIndex + itemsPerView);
  const maxIndex = masterpieces.length - itemsPerView;

  // Handle arrow click
  const handleNext = () => {
    //console.log('Arrow clicked! Current index:', currentIndex);
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to beginning
    }
  };

  return (
    <section className="py-20 latest-section" style={{ backgroundColor: '#F1F5F9' }}>
      <div className="max-w-7xl mx-auto px-20">
        {/* Header */}
        <div className="flex justify-between items-center mb-12 latest-section-header">
          <h2 className="text-4xl font-bold text-gray-900">
            Latest masterpieces
          </h2>
          <a 
            href="#masterpieces" 
            className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-2 font-medium"
            style={{ textDecoration: 'none' }}
          >
            Discover More Masterpieces
            <span style={{ marginLeft: '8px' }}>
              {FaArrowRight({ size: 12 })}
            </span>
          </a>
        </div>

        {/* Masterpiece Cards */}
        <div className="relative">
          <div className="flex gap-6 latest-section-cards">
            {visibleItems.map((item, index) => (
              <div 
                key={`${currentIndex}-${index}`}
                className="relative group cursor-pointer rounded-lg overflow-hidden flex-shrink-0"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          
          {/* Desktop scroll indicator arrow */}
          <div className="desktop-scroll-arrow">
            <div className="scroll-arrow-circle" onClick={handleNext} style={{ cursor: 'pointer' }}>
              {IoIosArrowForward({ size: 20, color: "#000000" })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestSection;
