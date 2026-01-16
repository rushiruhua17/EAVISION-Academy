import React, { useState, useEffect } from 'react';
import { ChevronLeft, PlayCircle, Clock, AlertCircle, Wrench, Play, FileText, CheckCircle } from 'lucide-react';
import { DRONE_MODELS, COURSE_DATA } from '../../constants';
import { DroneModel, TrainingVideo } from '../../types';

export const TrainingCourses: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<DroneModel | null>(null);
  const [currentLesson, setCurrentLesson] = useState<TrainingVideo | null>(null);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedModel, currentLesson]);

  // View 1: Product Selector
  if (!selectedModel) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">选择您的机型</h2>
            <p className="text-jimu-grey max-w-2xl mx-auto">
              极目学院提供全系产品的专业培训课程。请选择您正在使用的设备，开始您的学习之旅。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {DRONE_MODELS.map((model) => (
              <div 
                key={model.id}
                onClick={() => setSelectedModel(model)}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100"
              >
                <div className="aspect-[4/3] bg-gray-200 overflow-hidden relative">
                  <img 
                    src={model.image} 
                    alt={model.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/90 p-2 rounded-full shadow-lg">
                      <PlayCircle className="text-jimu-blue" size={24} />
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <span className={`inline-block px-2 py-1 text-xs rounded mb-2 ${model.type === 'agriculture' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                    {model.type === 'agriculture' ? '农业应用' : '行业巡检'}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-jimu-blue transition-colors">
                    {model.name}
                  </h3>
                  <p className="text-sm text-jimu-grey">点击进入课程 >></p>
                </div>
              </div>
            ))}

            <div className="group bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-8 hover:border-jimu-blue hover:bg-blue-50 transition-all cursor-default min-h-[300px]">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4 group-hover:bg-white transition-colors">
                <Wrench className="text-jimu-grey group-hover:text-jimu-blue" size={32} />
              </div>
              <h3 className="text-xl font-bold text-jimu-grey group-hover:text-jimu-blue mb-2 transition-colors">
                更多机型
              </h3>
              <p className="text-sm text-jimu-grey">
                教程录制中...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Combine beginner and functional for the "All Lessons" view for simplicity in this new design
  const courseData = COURSE_DATA[selectedModel.id];
  const allLessons = [...(courseData?.beginnerSeries || []), ...(courseData?.functionalSeries || [])];

  // View 2: Course Overview (Grid of Lessons)
  if (!currentLesson) {
    return (
      <div className="min-h-screen bg-white animate-fade-in font-sans">
        {/* Top Blue Banner - Updated to Jimu Blue */}
        <div className="bg-jimu-blue text-center py-10">
           <h1 className="text-3xl md:text-4xl text-white font-medium">{selectedModel.name} eLearning Course</h1>
           <p className="text-blue-100 mt-2">Everything you need to know to get up and running with your {selectedModel.name} this season.</p>
           <button 
             onClick={() => setSelectedModel(null)}
             className="mt-6 text-sm text-white/80 hover:text-white flex items-center justify-center gap-1 mx-auto"
           >
             <ChevronLeft size={16}/> Back to Model Selection
           </button>
        </div>

        {/* Welcome Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-normal text-gray-900 mb-6">Welcome to the {selectedModel.name} eLearning Course</h2>
              <h3 className="text-lg font-medium text-gray-700 mb-3">What to Expect</h3>
              <p className="text-jimu-grey leading-relaxed mb-4">
                This comprehensive eLearning experience equips users with the knowledge and skills needed to operate the {selectedModel.name} safely, efficiently, and in compliance with regulations.
              </p>
              <p className="text-jimu-grey leading-relaxed">
                The course features short, focused video modules, and is designed to get operators in the air, and setup for a successful season with their new {selectedModel.name}.
              </p>
            </div>
            <div className="md:w-1/2">
               <img src={selectedModel.image} alt="Course Intro" className="w-full rounded-lg shadow-lg"/>
            </div>
          </div>
        </div>

        {/* Lessons Grid Header */}
        <div className="text-center py-10 bg-gray-50/50">
           <h2 className="text-3xl font-normal text-gray-900">{selectedModel.name} eLearning Course Lessons</h2>
        </div>

        {/* Lessons Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {allLessons.map((lesson, idx) => (
               <div 
                 key={lesson.id} 
                 onClick={() => setCurrentLesson(lesson)}
                 className="bg-white border border-gray-200 rounded hover:shadow-lg transition-shadow cursor-pointer flex flex-col group"
               >
                 <div className="aspect-video bg-gray-100 relative overflow-hidden">
                    <img src={lesson.thumbnail} alt={lesson.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                       <PlayCircle className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={40}/>
                    </div>
                 </div>
                 <div className="p-4 flex-grow flex flex-col justify-center text-center bg-gray-50 group-hover:bg-white transition-colors">
                    <p className="text-sm text-gray-900 font-medium group-hover:text-jimu-blue transition-colors">{lesson.title}</p>
                 </div>
               </div>
             ))}
             
             {allLessons.length === 0 && (
                <div className="col-span-full text-center py-12 text-jimu-grey">
                  <AlertCircle className="mx-auto mb-2" size={32}/>
                  <p>Course content is being updated.</p>
                </div>
             )}
          </div>
        </div>
      </div>
    );
  }

  // View 3: Lesson Player
  return (
    <div className="min-h-screen bg-white animate-fade-in font-sans">
       {/* Top Blue Banner (Consistent) */}
       <div className="bg-jimu-blue text-center py-8">
           <h1 className="text-2xl text-white font-medium">{selectedModel.name} eLearning Course</h1>
           <p className="text-blue-100 mt-1 text-sm">Everything you need to know to get up and running with your {selectedModel.name} this season.</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar: Course Outline */}
            <div className="lg:w-1/4">
               <h3 className="text-lg font-medium text-gray-800 mb-6 pb-2 border-b border-gray-200">Course Outline</h3>
               <div className="flex flex-col space-y-1 text-sm">
                 <button 
                    onClick={() => setCurrentLesson(null)}
                    className="text-left px-3 py-2 text-jimu-grey hover:bg-gray-50 rounded mb-2 flex items-center gap-2"
                 >
                   <ChevronLeft size={14}/> Back to Overview
                 </button>

                 <div className="space-y-1">
                   {allLessons.map((lesson) => (
                     <button
                       key={lesson.id}
                       onClick={() => setCurrentLesson(lesson)}
                       className={`w-full text-left px-3 py-3 rounded transition-colors flex items-start gap-3 ${
                         currentLesson.id === lesson.id 
                           ? 'bg-blue-50 text-jimu-blue font-medium' 
                           : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                       }`}
                     >
                       <div className={`mt-0.5 ${currentLesson.id === lesson.id ? 'text-jimu-blue' : 'text-gray-300'}`}>
                         {currentLesson.id === lesson.id ? <PlayCircle size={16}/> : <CheckCircle size={16}/>}
                       </div>
                       <span className="line-clamp-2">{lesson.title}</span>
                     </button>
                   ))}
                 </div>
               </div>
            </div>

            {/* Main Content: Player */}
            <div className="lg:w-3/4">
               <h2 className="text-3xl font-normal text-gray-900 mb-6">{currentLesson.title}</h2>
               
               {/* Video Player Placeholder */}
               <div className="aspect-video bg-black rounded-lg shadow-lg overflow-hidden relative group mb-8">
                 <img src={currentLesson.thumbnail} alt="Video Cover" className="w-full h-full object-cover opacity-60"/>
                 <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-20 h-20 bg-jimu-blue rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-xl">
                       <Play className="text-white fill-white ml-1" size={32}/>
                    </div>
                    <div className="mt-4 flex gap-4 text-white text-sm font-medium">
                       <span className="flex items-center gap-1 cursor-pointer hover:text-gray-200"><Clock size={16}/> 稍后观看</span>
                       <span className="flex items-center gap-1 cursor-pointer hover:text-gray-200"><PlayCircle size={16}/> 分享</span>
                    </div>
                 </div>
                 <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                       <img src="https://picsum.photos/50/50?random=logo" alt="Logo" className="w-8 h-8 rounded-full"/>
                    </div>
                    <span className="text-white font-medium text-lg drop-shadow-md">{currentLesson.title}</span>
                 </div>
               </div>

               {/* Description */}
               <div className="prose max-w-none text-jimu-grey">
                  <p className="leading-relaxed mb-6">
                    Welcome to this lesson on <strong className="text-gray-800">{currentLesson.title}</strong>. 
                  </p>
                  <p className="mb-4">
                    {currentLesson.description}
                  </p>
                  <p className="mb-4">
                    In this video, we will cover key aspects required for safe and effective operation. Please watch the entire video before proceeding to the next lesson.
                  </p>
               </div>
            </div>

          </div>
        </div>
    </div>
  );
};