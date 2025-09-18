import React from 'react';

const JoinNowSection: React.FC = () => {
  return (
    <section className="py-20 join-now-section" style={{ backgroundColor: '#0F172A', minHeight: '391px', maxHeight: '391px' }}>
      <div className="max-w-7xl mx-auto px-20">
        <div className="flex gap-8 items-start">
          {/* Left Side - 60% */}
          <div className="flex items-center" style={{ width: "60%", height: "391px" }}>
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-white leading-tight">
                Add more masterpieces to your growing collection
              </h2>
              <button 
                className="px-8 py-4 border-2 border-white text-white rounded-md hover:bg-white hover:text-gray-900 transition-colors font-medium"
                style={{ backgroundColor: 'transparent' }}
              >
                Join Now
              </button>
            </div>
          </div>
          
          {/* Right Side - 40% */}
          <div style={{ width: "40%", height: "428px" }} className="flex items-end">
            <div className="flex justify-end">
              <img 
                src={process.env.PUBLIC_URL + "/images/JoinNow.png"} 
                alt="Join Now Visual"
                className="w-full h-auto"
                style={{ objectFit: 'contain', transform: 'scale(1.25)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinNowSection;



