import React, { useState } from 'react';
import { CourseInfo } from '../../types';
import { ArrowLeft, Check, Clock, CircleDollarSign, X, Phone, User } from 'lucide-react';

interface CourseDetailProps {
  course: CourseInfo | null;
  onBack: () => void;
}

export const CourseDetail: React.FC<CourseDetailProps> = ({ course, onBack }) => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">未找到课程信息</h2>
          <button onClick={onBack} className="text-jimu-blue hover:underline">返回首页</button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen animate-fade-in pb-20 relative">
      
      {/* 1. White Card Header (Floating style based on screenshot) */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <button 
            onClick={onBack}
            className="flex items-center text-jimu-grey hover:text-jimu-blue mb-6 transition-colors"
          >
            <ArrowLeft size={18} className="mr-1"/> 返回课程列表
          </button>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
             <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
                <div className="flex items-center gap-6 text-gray-600">
                   <div className="flex items-center gap-2">
                      <CircleDollarSign size={18} className="text-jimu-blue"/>
                      <span className="font-bold text-lg text-jimu-blue">费用: {course.price}</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <Clock size={18} className="text-jimu-blue"/>
                      <span className="font-bold text-lg text-jimu-blue">课时: {course.duration}</span>
                   </div>
                </div>
             </div>
             
             <button 
               onClick={() => setShowRegisterModal(true)}
               className="px-10 py-3 bg-jimu-blue hover:opacity-90 text-white font-medium rounded-sm shadow-md transition-all w-full md:w-auto text-center"
             >
                立即报名
             </button>
          </div>
        </div>
      </div>

      {/* 2. Blue Bar Title - Updated to Jimu Blue */}
      <div className="bg-jimu-blue text-white py-4 mt-8">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="h-6 w-1 bg-white mr-3"></div>
            <h2 className="text-lg font-medium">课程介绍</h2>
            <span className="mx-2 opacity-50">|</span>
            <span className="opacity-80 text-sm">Course Introduction</span>
         </div>
      </div>

      {/* 3. Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
         
         {/* Course Highlights / Description */}
         <div className="bg-white p-8 rounded-sm shadow-sm mb-12">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
               <span className="w-0 h-0 border-l-[6px] border-l-jimu-blue border-y-[6px] border-y-transparent"></span>
               课程特色
            </h3>
            <p className="text-jimu-grey leading-relaxed mb-6 text-lg">
               {course.desc}
            </p>
            {course.features && (
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {course.features.map((feature, idx) => (
                     <div key={idx} className="flex items-center gap-3 bg-blue-50 p-4 rounded border border-blue-100">
                        <div className="w-6 h-6 bg-jimu-blue rounded-full flex items-center justify-center flex-shrink-0">
                           <Check size={14} className="text-white"/>
                        </div>
                        <span className="font-medium text-gray-700">{feature}</span>
                     </div>
                  ))}
               </div>
            )}
         </div>

         {/* Course Content Details (Image + Text layout) */}
         <div className="space-y-16">
            <div className="bg-white p-8 rounded-sm shadow-sm">
               <h3 className="text-xl font-bold text-gray-800 mb-8 flex items-center gap-2">
                  <span className="w-0 h-0 border-l-[6px] border-l-jimu-blue border-y-[6px] border-y-transparent"></span>
                  课程内容
               </h3>
               
               <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="md:w-1/2">
                     <img 
                        src={course.contentImages?.[0] || course.image} 
                        alt="Course Content" 
                        className="w-full rounded shadow-md"
                     />
                  </div>
                  <div className="md:w-1/2 space-y-6">
                     <div>
                        <h4 className="text-lg font-bold text-gray-800 mb-2">基础应用实操</h4>
                        <p className="text-jimu-grey leading-relaxed">
                           快速入门，熟练掌握大疆行业机型重要功能，完成精准降落、超视距侦查、夜间飞行等科目训练。
                           (示例文字：根据课程不同，内容会相应调整)
                        </p>
                     </div>
                     <div>
                        <h4 className="text-lg font-bold text-gray-800 mb-2">理论与法规</h4>
                        <p className="text-jimu-grey leading-relaxed">
                           深入浅出传授飞行原理、气象知识以及相关法律法规，确保飞行作业合法合规，安全高效。
                        </p>
                     </div>
                  </div>
               </div>
            </div>

            {course.contentImages && course.contentImages.length > 1 && (
               <div className="bg-white p-8 rounded-sm shadow-sm flex flex-col md:flex-row-reverse gap-12 items-center">
                  <div className="md:w-1/2">
                     <img 
                        src={course.contentImages[1]} 
                        alt="Advanced Content" 
                        className="w-full rounded shadow-md"
                     />
                  </div>
                  <div className="md:w-1/2">
                     <h4 className="text-lg font-bold text-gray-800 mb-4">进阶场景应用</h4>
                     <p className="text-jimu-grey leading-relaxed mb-4">
                        结合实战案例，学习复杂环境下的作业技巧。包括但不限于山地果园、高压线巡检等高难度场景的应对策略。
                     </p>
                     <p className="text-jimu-grey leading-relaxed">
                        通过模拟真实作业环境，提升学员的应急处理能力和心理素质，打造真正的行业精英。
                     </p>
                  </div>
               </div>
            )}
         </div>

         {/* Enrollment Conditions (Static Mock) */}
         <div className="mt-12 bg-white p-8 rounded-sm shadow-sm">
             <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
               <span className="w-0 h-0 border-l-[6px] border-l-jimu-blue border-y-[6px] border-y-transparent"></span>
               报名条件
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-jimu-grey">
               <li>年龄必须是16周岁以上，70周岁以下；</li>
               <li>无红绿色盲等妨碍安全驾驶的疾病及生理缺陷；</li>
               <li>具有初中及以上文化程度。</li>
            </ul>
         </div>

      </div>

      {/* Registration Modal */}
      {showRegisterModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in">
           <div className="bg-white rounded-lg shadow-2xl w-full max-w-md overflow-hidden relative transform transition-all scale-100">
              {/* Modal Header */}
              <div className="bg-jimu-blue text-white p-6 relative">
                 <h3 className="text-xl font-bold">课程报名咨询</h3>
                 <p className="text-blue-100 text-sm mt-1">请联系负责老师进行线下报名确认</p>
                 <button 
                   onClick={() => setShowRegisterModal(false)}
                   className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-1"
                 >
                   <X size={20} />
                 </button>
              </div>
              
              {/* Modal Content */}
              <div className="p-8 text-center bg-white">
                 <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                    <Phone size={32} className="text-jimu-blue" />
                 </div>
                 
                 <div className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                       <p className="text-jimu-grey text-xs uppercase tracking-wider mb-1">报名咨询热线</p>
                       <a href="tel:13800000000" className="text-2xl font-bold text-jimu-blue hover:text-blue-700 transition-colors">
                         138-0000-0000
                       </a>
                    </div>
                    
                    <div className="flex items-center justify-center gap-3">
                       <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                          <User size={20} className="text-gray-600"/>
                       </div>
                       <div className="text-left">
                          <p className="text-gray-400 text-xs">课程负责人</p>
                          <p className="text-lg font-medium text-gray-800">周老师</p>
                       </div>
                    </div>
                 </div>

                 <div className="mt-8 pt-6 border-t border-gray-100 text-xs text-jimu-grey">
                    <p>温馨提示：工作时间为周一至周五 9:00 - 18:00</p>
                    <p className="mt-1">非工作时间请留言或发送短信</p>
                 </div>
              </div>
              
              <div className="bg-gray-50 p-4 flex justify-center">
                  <button 
                    onClick={() => setShowRegisterModal(false)}
                    className="text-jimu-grey hover:text-gray-800 text-sm font-medium"
                  >
                    关闭窗口
                  </button>
              </div>
           </div>
        </div>
      )}

    </div>
  );
};