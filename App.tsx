import React, { useState } from 'react';
import { MainNavbar } from './components/MainNavbar';
import { MainSite } from './pages/MainSite';
import { AcademyNavbar } from './components/AcademyNavbar';
import { AcademyHome } from './pages/academy/AcademyHome';
import { TrainingCourses } from './pages/academy/TrainingCourses';
import { AdvancedTraining } from './pages/academy/AdvancedTraining';
import { AcademyIntro } from './pages/academy/AcademyIntro';
import { IndustryIntegration } from './pages/academy/IndustryIntegration';
import { AcademyNews } from './pages/academy/AcademyNews';
import { KnowledgeBase } from './pages/academy/KnowledgeBase';
import { FAQ } from './pages/academy/FAQ';
import { CourseDetail } from './pages/academy/CourseDetail';
import { TrainingNetwork } from './pages/academy/TrainingNetwork';
import { PageView, AcademyPage, CourseInfo } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<PageView>('main-site');
  const [academyPage, setAcademyPage] = useState<AcademyPage>('home');
  const [selectedCourse, setSelectedCourse] = useState<CourseInfo | null>(null);

  // Navigation Handlers
  const navigateToAcademy = () => {
    setCurrentView('academy');
    setAcademyPage('home');
    window.scrollTo(0, 0);
  };

  const navigateAcademySubPage = (page: AcademyPage) => {
    setAcademyPage(page);
    window.scrollTo(0, 0);
  };

  const handleCourseSelect = (course: CourseInfo) => {
    setSelectedCourse(course);
    setAcademyPage('course-detail');
    window.scrollTo(0, 0);
  };

  const backToMainSite = () => {
    setCurrentView('main-site');
    window.scrollTo(0, 0);
  };

  // Render Logic
  const renderAcademyContent = () => {
    switch (academyPage) {
      case 'home':
        return <AcademyHome onNavigate={navigateAcademySubPage} onCourseSelect={handleCourseSelect} />;
      case 'training':
        return <TrainingCourses />;
      case 'advanced-training':
        return <AdvancedTraining />;
      case 'course-detail':
        return <CourseDetail course={selectedCourse} onBack={() => navigateAcademySubPage('home')} />;
      case 'intro':
        return <AcademyIntro />;
      case 'cooperation':
        return <IndustryIntegration />;
      case 'news':
        return <AcademyNews />;
      case 'knowledge':
        return <KnowledgeBase />;
      case 'faq':
        return <FAQ />;
      case 'network':
        return <TrainingNetwork />;
      default:
        return <AcademyHome onNavigate={navigateAcademySubPage} onCourseSelect={handleCourseSelect} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {currentView === 'main-site' ? (
        <>
          <MainNavbar onNavigateToAcademy={navigateToAcademy} />
          <main className="flex-grow">
            <MainSite />
          </main>
        </>
      ) : (
        <>
          <AcademyNavbar 
            currentPage={academyPage} 
            onNavigate={navigateAcademySubPage} 
            onBackToMain={backToMainSite}
          />
          <main className="flex-grow">
            {renderAcademyContent()}
          </main>
        </>
      )}

      {/* Footer (Shared) */}
      <footer className="bg-[#1a1a1a] text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">EAVISION</h4>
              <p className="text-gray-400 text-sm">引领农业智能化的未来。</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">产品</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>EA-J100 2026款</li>
                <li>EA-30X</li>
                <li>极目周边</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">支持</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>售后服务</li>
                <li>极目学院</li>
                <li>下载中心</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">关注我们</h4>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © 2024 Suzhou EAVision Robotic Technologies Co., Ltd. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;