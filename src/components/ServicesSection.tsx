import React from 'react';
import { GoTrophy } from "react-icons/go";
import { MdMultilineChart } from "react-icons/md";
import { BiTv } from "react-icons/bi";
import { FiLoader } from "react-icons/fi";
import { RiMegaphoneLine } from "react-icons/ri";
import { CiBookmark } from "react-icons/ci";
import { BsBookmark } from "react-icons/bs";

const ServicesSection: React.FC = () => {
  const services = [
    { name: 'Nibh viverra', icon: GoTrophy },
    { name: 'Cursus amet', icon: MdMultilineChart },
    { name: 'Ipsum fermentum', icon: BiTv },
    { name: 'Quisque euismod', icon: FiLoader },
    { name: 'Arcu vulputate', icon: RiMegaphoneLine },
    { name: 'Cras auctor', icon: BsBookmark }
  ];

  return (
    <section className="py-20 bg-white services-section">
      <div className="max-w-7xl mx-auto px-20">
        {/* Title */}
        <div className="text-center mb-16 services-section-header">
          <h2 className="text-4xl font-bold text-gray-900">
            Expanding services
          </h2>
        </div>
        
        {/* Services Row */}
        <div className="flex justify-center items-center gap-8 mb-12 services-row">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 flex items-center justify-center border-2 border-red-600 rounded-lg">
                {service.icon({ size: 48, color: "#DC2626" })}
              </div>
              <span className="text-sm font-medium text-gray-900 text-center">
                {service.name}
              </span>
            </div>
          ))}
        </div>
        
        {/* Button */}
        <div className="text-center">
          <button 
            className="px-8 py-4 text-white rounded-md transition-colors font-medium"
            style={{ 
              backgroundColor: '#BE123C',
              border: 'none'
            }}
          >
            Find Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
