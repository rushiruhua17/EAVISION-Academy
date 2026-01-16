import React, { useState } from 'react';
import { ChevronDown, Globe, Search, User } from 'lucide-react';

interface MainNavbarProps {
  onNavigateToAcademy: () => void;
}

export const MainNavbar: React.FC<MainNavbarProps> = ({ onNavigateToAcademy }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => setActiveDropdown(menu);
  const handleMouseLeave = () => setActiveDropdown(null);

  return (
    <nav className="relative bg-white shadow-md z-50 font-sans text-sm">
      {/* Top Utility Bar */}
      <div className="bg-[#f5f5f5] text-xs text-gray-500 py-1 px-4 hidden md:flex justify-end space-x-4">
        <span className="cursor-pointer hover:text-jimu-blue flex items-center gap-1"><Globe size={12}/> 简体中文</span>
        <span className="cursor-pointer hover:text-jimu-blue">极目商城</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <div className="text-3xl font-bold text-jimu-blue italic tracking-tighter">EAVISION</div>
            <div className="ml-2 text-xs text-gray-400 hidden lg:block tracking-widest uppercase mt-2">To see and to move</div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 h-full items-center">
            {['产品', '行业应用', '飞防案例'].map((item) => (
              <div 
                key={item}
                className="relative h-full flex items-center border-b-2 border-transparent hover:border-jimu-blue cursor-pointer group"
              >
                <span className="text-gray-700 font-medium group-hover:text-jimu-blue transition-colors px-2">{item}</span>
              </div>
            ))}

            {/* Service & Support Dropdown - THE KEY INTERACTION */}
            <div 
              className="relative h-full flex items-center cursor-pointer group"
              onMouseEnter={() => handleMouseEnter('service')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center gap-1 border-b-2 border-transparent group-hover:border-jimu-blue h-full px-2">
                <span className="text-gray-700 font-medium group-hover:text-jimu-blue transition-colors">服务与支持</span>
              </div>

              {/* Mega Menu Dropdown */}
              {activeDropdown === 'service' && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-64 bg-white shadow-xl border-t-2 border-jimu-blue py-2 rounded-b-lg animate-fade-in-down">
                  <ul className="flex flex-col text-gray-600">
                    <li className="px-6 py-3 hover:bg-gray-50 hover:text-jimu-blue cursor-pointer">售后服务</li>
                    <li className="px-6 py-3 hover:bg-gray-50 hover:text-jimu-blue cursor-pointer">经销商查询</li>
                    <li 
                      onClick={() => {
                        setActiveDropdown(null);
                        onNavigateToAcademy();
                      }}
                      className="px-6 py-3 hover:bg-gray-50 hover:text-jimu-blue cursor-pointer font-bold bg-blue-50/30 text-jimu-blue border-l-4 border-jimu-blue"
                    >
                      极目学院
                    </li>
                    <li className="px-6 py-3 hover:bg-gray-50 hover:text-jimu-blue cursor-pointer">下载中心</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="relative h-full flex items-center border-b-2 border-transparent hover:border-jimu-blue cursor-pointer group">
              <span className="text-gray-700 font-medium group-hover:text-jimu-blue px-2">关于极目</span>
            </div>
          </div>

          {/* Right Utilities */}
          <div className="flex items-center space-x-4 text-gray-600">
            <Search size={20} className="cursor-pointer hover:text-jimu-blue" />
            <User size={20} className="cursor-pointer hover:text-jimu-blue" />
          </div>
        </div>
      </div>
    </nav>
  );
};