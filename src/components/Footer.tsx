import React from 'react';

import { SlGlobe } from "react-icons/sl";
import { CgCloud } from "react-icons/cg";
import { PiGearBold } from "react-icons/pi";
import { FaCodeBranch } from "react-icons/fa6";
import { LuHeadphones } from "react-icons/lu";
import { SiEbox } from "react-icons/si";

import { 
  FaYoutube, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin 
} from 'react-icons/fa';

const categoryIcons = {
  'Categories': SlGlobe,
  'Product': CgCloud,
  'Solutions': PiGearBold,
  'Resources': FaCodeBranch,
  'Support': LuHeadphones,
  'Company': SiEbox
};

const Footer: React.FC = () => {
  const footerLinks = {
    'Categories': ['User Interface', 'User Experience', 'Digital Media', 'Lifestyle', 'Programming', 'Animation'],
    'Product': ['Pricing', 'Overview', 'Browse', 'Accessibility', 'Five', 'Changelog'],
    'Solutions': ['Brainstorming', 'Ideation', 'Wireframing', 'Research', 'Design', 'Concept'],
    'Resources': ['Help Center', 'Blog', 'Tutorials', 'FAQs', 'Community', 'Events'],
    'Support': ['Contact Us', 'Developers', 'Documentation', 'Integrations', 'Reports', 'Webinar'],
    'Company': ['About', 'Press', 'Events', 'Careers', 'Customers', 'Partners'],
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-20">
        {/* Main Footer Content */}
        <div className="py-12 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 footer-links-grid">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="footer-links-grid-item">
                <h3 className="mb-4" style={{ fontSize: '18px', fontWeight: '500', color: '#475569' }}>
                {categoryIcons[category as keyof typeof categoryIcons]({ size: 16, color: '#475569' })}
                {category}
                  </h3>
                <ul className="space-y-2" style={{ listStyle: 'none', paddingInlineStart: '0px' }}>
                  {links.map((link) => (
                    <li style={{ marginBottom: '10px' }} key={link}>
                      <a 
                        href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        style={{ textDecoration: 'none' }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr/>
        
        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4 footer-bottom-container">
          <div className="text-gray-600 footer-bottom-text">
            @ 2023 Xinder, Inc. All rights reserved.
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              {FaYoutube({ size: 20, color: "#9CA3AF" })}
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              {FaFacebook({ size: 20, color: "#9CA3AF" })}
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              {FaTwitter({ size: 20, color: "#9CA3AF" })}
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              {FaInstagram({ size: 20, color: "#9CA3AF" })}
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              {FaLinkedin({ size: 20, color: "#9CA3AF" })}
            </a>
          </div>
        </div>
        <div className="text-gray-600 pb-6 footer-bottom-info" style={{ fontSize: '14px' }}>
          <text>In sed posuere sed ullamcorper feugiat. Lacinia elit neque, ipsum, non. Tellus mattis enim volutpat habitasse. Semper posuere lectus consectetur aliquam et ullamcorper. Dictumst aenean justo fames diam eget volutpat vestibulum elit. Blandit aliquet bibendum pellentesque turpis id penatibus faucibus id nunc. Aenean rhoncus, erat pellentesque eu. Quis morbi condimentum phasellus in ultricies eu amet.</text>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
