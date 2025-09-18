import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const CTA: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsVideoModalOpen(true);
  };
  return (
    <section className="cta-section py-20" style={{ backgroundColor: '#475569' }}>
      <div className="max-w-7xl mx-auto px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-white leading-tight">
              Best solutions for your demanding collection
            </h2>
            <p className="text-lg text-white leading-relaxed">
              Odio vulputate cras vel lacinia turpis volutpat adipiscing. Sollicitudin at velit, blandit tempus nunc in.
            </p>
            
            {/* Checkmark List */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-5 h-5 flex items-center justify-center">
                  {FaCheck({ size: 12, color: "#FFFFFF" })}
                </div>
                <span className="text-white">Interdum volutpat turpis malesuada ac turpis.</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-5 h-5 flex items-center justify-center">
                  {FaCheck({ size: 12, color: "#FFFFFF" })}
                </div>
                <span className="text-white">Tortor ipsum pretium quis nunc.</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-5 h-5 flex items-center justify-center">
                  {FaCheck({ size: 12, color: "#FFFFFF" })}
                </div>
                <span className="text-white">Vitae odio a id purus in.</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="pt-6">
              <button className="px-8 py-4 border-2 border-white text-white rounded-md hover:bg-white hover:text-gray-900 transition-colors font-medium" style={{ backgroundColor: 'transparent' }}>
                Explore Xinder
              </button>
            </div>
          </div>
          
          {/* Right Column - CTA Image */}
          <div className="flex justify-center lg:justify-end" style={{ paddingTop: '4rem' }}>
            <div className="w-full max-w-xl lg:max-w-4xl">
              <img 
                src={process.env.PUBLIC_URL + "/images/CTA.png"} 
                alt="CTA Visual"
                className="w-full h-auto rounded-2xl shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={handleImageClick}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />
    </section>
  );
};

// Video Modal Component - Outside of main component
const VideoModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
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
          src={process.env.PUBLIC_URL + "/images/Explore1.mp4"}
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

export default CTA;

