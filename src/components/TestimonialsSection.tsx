import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io';

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const interviews = [
    {
      image: process.env.PUBLIC_URL + '/images/Interview.png',
      video: process.env.PUBLIC_URL + '/images/Interview.mp4',
      name: 'Marie Poirot',
      title: 'Co-Founder',
      company: 'Art-Gal',
      quote: '"Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. Neque suspendisse a habitasse commodo."'
    },
    {
      image: process.env.PUBLIC_URL + '/images/Interview2.png',
      video: process.env.PUBLIC_URL + '/images/Interview2.mp4',
      name: 'John Smith',
      title: 'Creative Director',
      company: 'Design Studio',
      quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."'
    },
    {
      image: process.env.PUBLIC_URL + '/images/Interview3.png',
      video: process.env.PUBLIC_URL + '/images/Interview3.mp4',
      name: 'Sarah Johnson',
      title: 'Art Curator',
      company: 'Modern Gallery',
      quote: '"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."'
    }
  ];

  const currentInterview = interviews[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? interviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === interviews.length - 1 ? 0 : prev + 1));
  };

  const handleImageClick = () => {
    setIsVideoModalOpen(true);
  };
  return (
    <section className="py-20 testimonials-section" style={{ backgroundColor: '#F1F5F9' }}>
      <div className="max-w-7xl mx-auto px-20">
        <div className="relative">
          {/* Content */}
          <div className="flex gap-8 items-center relative">
            {/* Left Arrow - Overlapping with left edge of image */}
            <button 
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow" 
              style={{ backgroundColor: 'white', border: 'none', outline: 'none', width: '48px', height: '48px', zIndex: 20 }}
            >
              {IoIosArrowBack({ size: 20, color: "#475569" })}
            </button>

            {/* Left - Image (50%) */}
            <div className="w-1/2">
              <div className="relative cursor-pointer" onClick={handleImageClick}>
                <img 
                  src={currentInterview.image} 
                  alt={`${currentInterview.name} Interview`}
                  className="w-full h-64 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-black/70 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right - Text (50%) */}
            <div className="w-1/2">
              <div className="space-y-1">
                <div>
                  <h3 className="text-lg font-semibold" style={{ color: '#6B7280' }}>
                    {currentInterview.name}, {currentInterview.title} <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">{currentInterview.company}</a>
                  </h3>
                </div>
                
                <blockquote className="text-gray-700 text-lg leading-relaxed" style={{ margin: 0, padding: 0 }}>
                  {currentInterview.quote}
                </blockquote>
              </div>
            </div>

            {/* Right Arrow - Overlapping with right edge of text */}
            <button 
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow" 
              style={{ backgroundColor: 'white', border: 'none', outline: 'none', width: '48px', height: '48px', zIndex: 20 }}
            >
              {IoIosArrowForward({ size: 20, color: "#475569" })}
            </button>
          </div>
        </div>
      </div>
      
      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)}
        videoSrc={currentInterview.video}
      />
    </section>
  );
};

// Video Modal Component
const VideoModal: React.FC<{ isOpen: boolean; onClose: () => void; videoSrc: string }> = ({ isOpen, onClose, videoSrc }) => {
  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999
      }}
      onClick={onClose}
    >
      <div 
        style={{
          position: 'relative',
          maxWidth: '800px',
          maxHeight: '90vh',
          width: '100%',
          margin: '0 16px'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '-48px',
            right: '0',
            color: 'white',
            background: 'none',
            border: 'none',
            fontSize: '32px',
            cursor: 'pointer'
          }}
        >
          {IoMdClose({ size: 32 })}
        </button>
        
        {/* Video */}
        <video
          src={videoSrc}
          controls
          autoPlay
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
            maxHeight: '80vh'
          }}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default TestimonialsSection;
