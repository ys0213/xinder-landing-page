import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const ExploreSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with Explore2 in center

  const images = [
    { src: process.env.PUBLIC_URL + '/images/Explore1.png', alt: 'Splash' },
    { src: process.env.PUBLIC_URL + '/images/Explore2.png', alt: 'Colorful Face' },
    { src: process.env.PUBLIC_URL + '/images/Explore3.png', alt: 'Fence Spying' }
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const getImageStyle = (position: 'left' | 'center' | 'right') => {
    const isCenter = position === 'center';
    return {
      filter: isCenter ? 'none' : 'brightness(0.6)', // Side images are darker
      overflow: 'hidden', // Hide overflow for all images
      transition: 'all 0.3s ease-in-out',
      borderRadius: '10px',
      width: isCenter ? '350px' : '200px',
      minHeight: isCenter ? '260px' : '250px',
      maxHeight: isCenter ? '260px' : '250px',
    };
  };

  const getImageStyleWithBorderRadius = (position: 'left' | 'center' | 'right') => {
    const isCenter = position === 'center';
    return {
      width: '350px',
      minHeight: isCenter ? '260px' : '250px',
      maxHeight: isCenter ? '260px' : '250px',
    };
  };

  const getImageClasses = (position: 'left' | 'center' | 'right') => {
    const isCenter = position === 'center';
    return `relative group cursor-pointer flex-shrink-0 ${
      isCenter ? '' : 'sm:hidden'
    }`;
  };
  return (
    <section className="py-20 explore-section" style={{ backgroundColor: '#475569', paddingTop: '0rem', paddingBottom: '3rem' }}>
      <div className="max-w-7xl mx-auto px-20">
        <div className="flex gap-8 items-start relative">
          {/* Left - Text (28%) */}
            <div className="w-7/25" style={{ width: '28%' }}>
              <div className="space-y-6">
                <h2 className="text-5xl font-bold text-white leading-tight sm:text-3xl sm:text-left">
                  Be incredible
                </h2>
              <p className="text-lg text-white leading-relaxed sm:text-left">
                Nec ultricies eget placerat ultricies eleifend dignissim aliquet sapien. Senectus vestibulum, eget erat at et congue cursus pretium.
              </p>
              <button className="px-8 py-4 border-2 border-white text-white rounded-md hover:bg-white hover:text-gray-900 transition-colors font-medium sm:block" style={{ backgroundColor: 'transparent' }}>
                Explore Xinder
              </button>
            </div>
          </div>

          {/* Right - Images (72%) */}
          <div className="flex-1 flex gap-4 items-center relative" style={{ width: '72%', paddingTop: '3rem' }}>
            {/* Left Image */}
            <div className={getImageClasses('left')} style={getImageStyle('left')}>
              <img
                src={images[(currentIndex - 1 + images.length) % images.length].src}
                alt={images[(currentIndex - 1 + images.length) % images.length].alt}
                className="w-full h-full object-fill group-hover:scale-105 transition-transform duration-300"
                style={getImageStyleWithBorderRadius('left')}
              />
              {/* Left Arrow in right middle of left image */}
              <button 
                onClick={handlePrevious}
                className="absolute rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow" 
                style={{ backgroundColor: 'white', border: 'none', outline: 'none', width: '48px', height: '48px', zIndex: 20, left: '55%', top: '35%', transform: 'translate(-50%, -50%)' }}
              >
                {IoIosArrowBack({ size: 20, color: "#475569" })}
              </button>
            </div>

            {/* Center Image */}
            <div className={getImageClasses('center')} style={getImageStyle('center')}>
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                style={getImageStyleWithBorderRadius('center')}
              />
            </div>

            {/* Right Image */}
            <div className={getImageClasses('right')} style={getImageStyle('right')}>
              <img
                src={images[(currentIndex + 1) % images.length].src}
                alt={images[(currentIndex + 1) % images.length].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                style={{
                  ...getImageStyleWithBorderRadius('right'),
                  objectPosition: 'left' // Show only the left 200px of the image
                }}
              />
              {/* Right Arrow in left middle of right image */}
              <button 
                onClick={handleNext}
                className="absolute rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow sm:hidden" 
                style={{ backgroundColor: 'white', border: 'none', outline: 'none', width: '48px', height: '48px', zIndex: 20, left: '45%', top: '35%', transform: 'translate(-50%, -50%)' }}
              >
                {IoIosArrowForward({ size: 20, color: "#475569" })}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
