import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const ArtEventsSection: React.FC = () => {
  return (
    <section className="py-20 art-events-section" style={{ backgroundColor: 'white' }}>
      <div className="max-w-7xl mx-auto px-20">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-black">
            Art events
          </h2>
          <a 
            href="#events" 
            className="hover:text-blue-800 transition-colors flex items-center gap-2 font-medium"
            style={{ textDecoration: 'none', color: '#2563EB' }}
          >
            Explore All Events
            <span style={{ marginLeft: '8px' }}>
              {FaArrowRight({ size: 12 })}
            </span>
          </a>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-3 gap-8">
          {/* Event 1 */}
          <div className="group cursor-pointer">
            <div className="relative mb-4">
              <div className="absolute rounded-md font-medium" style={{ backgroundColor: '#F3E8FF', color: '#8D52BE', textAlign: 'center', top: '12px', left: '12px', fontSize: '12px', width: '60px' }}>
                Featured
              </div>
              <img
                src={process.env.PUBLIC_URL + "/images/Event1.png"}
                alt="Wild Horse Event"
                className="w-full h-64 object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">
              Wild Horse Event
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
            </p>
          </div>

          {/* Event 2 */}
          <div className="group cursor-pointer">
            <div className="relative mb-4">
              <div className="absolute rounded-md font-medium" style={{ backgroundColor: '#DCFCE7', color: '#609D77', textAlign: 'center', top: '12px', left: '12px', fontSize: '12px', width: '40px' }}>
                New
              </div>
              <img
                src={process.env.PUBLIC_URL + "/images/Event2.png"}
                alt="Great Colors"
                className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">
              Great Colors
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
            </p>
          </div>

          {/* Event 3 */}
          <div className="group cursor-pointer">
            <div className="relative mb-4">
              <div className="absolute rounded-md font-medium" style={{ backgroundColor: '#FEF9C3', color: '#946325', textAlign: 'center', top: '12px', left: '12px', fontSize: '12px', width: '90px' }}>
                Coming Soon
              </div>
              <img
                src={process.env.PUBLIC_URL + "/images/Event3.png"}
                alt="Happy Father's Day"
                className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">
              Happy Father's Day
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtEventsSection;
