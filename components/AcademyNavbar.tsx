import React, { useState } from 'react';
import { AcademyPage } from '../types';
import { GraduationCap } from 'lucide-react';

interface AcademyNavbarProps {
  currentPage: AcademyPage;
  onNavigate: (page: AcademyPage) => void;
  onBackToMain: () => void;
}

export const AcademyNavbar: React.FC<AcademyNavbarProps> = ({ currentPage, onNavigate, onBackToMain }) => {
  const [courseDropdownOpen, setCourseDropdownOpen] = useState(false);

  const isKnowledgeActive = currentPage === 'knowledge';
  const isCourseActive = currentPage === 'training' || currentPage === 'advanced-training';

  return (
    <div className="bg-white sticky top-0 z-40 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Area */}
          <div className="flex items-center cursor-pointer" onClick={onBackToMain}>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-jimu-blue italic">EAVISION</span>
              <div className="h-6 w-px bg-gray-300 mx-2"></div>
              <div className="flex items-center gap-2 text-gray-800">
                <GraduationCap className="text-jimu-light" size={24} />
                <span className="text-xl font-bold tracking-wide">极目学院</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-1 items-center">
            <button
              onClick={() => onNavigate('home')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                currentPage === 'home' ? 'text-jimu-blue bg-blue-50 font-bold' : 'text-gray-600 hover:text-jimu-blue hover:bg-gray-50'
              }`}
            >
              首页
            </button>
            
            <button
              onClick={() => onNavigate('intro')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                currentPage === 'intro' ? 'text-jimu-blue bg-blue-50 font-bold' : 'text-gray-600 hover:text-jimu-blue hover:bg-gray-50'
              }`}
            >
              学院简介
            </button>

            {/* Online Courses Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setCourseDropdownOpen(true)}
              onMouseLeave={() => setCourseDropdownOpen(false)}
            >
               <button
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isCourseActive ? 'text-jimu-blue bg-blue-50 font-bold' : 'text-gray-600 hover:text-jimu-blue hover:bg-gray-50'
                }`}
              >
                在线课程
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 w-32 pt-2 transition-all duration-200 ${courseDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <div className="bg-white border border-gray-100 shadow-xl rounded-lg overflow-hidden flex flex-col">
                   <button 
                     onClick={() => { onNavigate('training'); setCourseDropdownOpen(false); }}
                     className="px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 hover:text-jimu-blue transition-colors"
                   >
                     新手教学
                   </button>
                   <button 
                     onClick={() => { onNavigate('advanced-training'); setCourseDropdownOpen(false); }}
                     className="px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 hover:text-jimu-blue transition-colors border-t border-gray-100"
                   >
                     进阶教学
                   </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('cooperation')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                currentPage === 'cooperation' ? 'text-jimu-blue bg-blue-50 font-bold' : 'text-gray-600 hover:text-jimu-blue hover:bg-gray-50'
              }`}
            >
              产教融合
            </button>

            {/* News - Swapped Position */}
            <button
              onClick={() => onNavigate('news')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                currentPage === 'news' ? 'text-jimu-blue bg-blue-50 font-bold' : 'text-gray-600 hover:text-jimu-blue hover:bg-gray-50'
              }`}
            >
              学院资讯
            </button>

            {/* Knowledge Base - Swapped Position */}
            <button
              onClick={() => onNavigate('knowledge')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isKnowledgeActive ? 'text-jimu-blue bg-blue-50 font-bold' : 'text-gray-600 hover:text-jimu-blue hover:bg-gray-50'
              }`}
            >
              知识库
            </button>
          </div>

           {/* Mobile Menu Button */}
           <div className="md:hidden">
            <button className="text-gray-600 p-2">
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};