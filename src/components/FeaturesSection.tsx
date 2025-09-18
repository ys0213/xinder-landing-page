import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const FeaturesSection: React.FC = () => {
  const categories = [
    {
      category: 'Pottery',
      title: 'Vases Family',
      image: process.env.PUBLIC_URL + '/images/FeaturesSection1.png'
    },
    {
      category: 'Oil Painting',
      title: 'Camel Portrait',
      image: process.env.PUBLIC_URL + '/images/FeaturesSection2.png'
    },
    {
      category: 'Abstract Painting',
      title: 'Euforia',
      image: process.env.PUBLIC_URL + '/images/FeaturesSection3.png'
    },
    {
      category: 'Object Design',
      title: 'Classic Watch',
      image: process.env.PUBLIC_URL + '/images/FeaturesSection4.png'
    },
    {
      category: 'Sculpture',
      title: 'White Angel',
      image: process.env.PUBLIC_URL + '/images/FeaturesSection5.png'
    }
  ];

  return (
    <section className="py-20 bg-white features-section">
      <div className="max-w-7xl mx-auto px-20">
        {/* Header */}
        <div className="flex justify-between items-center mb-12 features-section-header">
          <h2 className="text-4xl font-bold text-gray-900">
            Featured art categories
          </h2>
          <a 
            href="#categories" 
            className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-2 font-medium"
            style={{ textDecoration: 'none' }}
          >
            View All Categories
            <span style={{ marginLeft: '8px' }}>
              {FaArrowRight({ size: 12 })}
            </span>
          </a>
        </div>

        {/* Category Cards */}
        <div className="flex gap-4 overflow-x-auto features-section-cards">
          {categories.map((item, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer rounded-lg overflow-hidden flex-shrink-0"
              style={{ width: '280px', aspectRatio: '4/5' }}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 text-white">
                <p className="text-sm opacity-90 mb-1">{item.category}</p>
                <h3 className="text-lg font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
