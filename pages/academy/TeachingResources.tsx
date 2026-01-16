import React from 'react';
import { Book, FileText, MonitorPlay, Award, Lock, Download, Star } from 'lucide-react';

export const TeachingResources: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in font-sans">
      
      {/* Hero Header */}
      <div className="bg-white border-b border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">标准化教学资源</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            极目学院联合行业专家与高校教授，共同打造农业无人机领域权威教材体系与标准化实训资料。
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">

        {/* Section 1: Published Textbooks (Showcase Style) */}
        <section>
          <div className="flex items-center gap-3 mb-8">
             <div className="p-2 bg-blue-100 rounded-lg text-jimu-blue">
                <Book size={24} />
             </div>
             <h2 className="text-2xl font-bold text-gray-900">出版教材</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             {/* Book 1 */}
             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 hover:shadow-lg transition-shadow">
                {/* Book Cover Simulation */}
                <div className="w-40 h-56 flex-shrink-0 relative mx-auto md:mx-0 shadow-[10px_10px_20px_rgba(0,0,0,0.2)] transform hover:-translate-y-2 transition-transform duration-300">
                   <div className="absolute inset-0 bg-[#1e3a8a] rounded-r-md flex flex-col items-center justify-center p-4 text-center">
                      <div className="text-white font-bold text-lg leading-tight border-b border-white/30 pb-2 mb-2">农业无人机<br/>作业规范</div>
                      <div className="text-blue-200 text-xs">Standard Operation Procedure</div>
                      <div className="mt-auto text-white text-[10px]">极目学院 编著</div>
                   </div>
                   {/* Spine effect */}
                   <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-white/20 to-transparent"></div>
                </div>

                <div className="flex-grow flex flex-col justify-center text-center md:text-left">
                   <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                      <span className="bg-orange-100 text-orange-700 text-xs px-2 py-0.5 rounded font-bold">行业首发</span>
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded">十三五规划教材</span>
                   </div>
                   <h3 className="text-xl font-bold text-gray-900 mb-2">《农业无人机植保作业规范》</h3>
                   <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                     系统讲解了农业无人机在不同作物（果树、大田）上的作业标准流程、药剂配比原则及安全规范，是每一位职业飞手的案头必备书。
                   </p>
                   <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                      <span className="text-sm font-bold text-jimu-blue">ISBN 978-7-1234-5678-9</span>
                      <button className="text-sm text-gray-400 hover:text-jimu-blue cursor-not-allowed flex items-center gap-1">
                        <Lock size={14} /> 仅限内部申领
                      </button>
                   </div>
                </div>
             </div>

             {/* Book 2 */}
             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 hover:shadow-lg transition-shadow">
                {/* Book Cover Simulation */}
                <div className="w-40 h-56 flex-shrink-0 relative mx-auto md:mx-0 shadow-[10px_10px_20px_rgba(0,0,0,0.2)] transform hover:-translate-y-2 transition-transform duration-300">
                   <div className="absolute inset-0 bg-white border-2 border-gray-200 rounded-r-md flex flex-col items-center justify-between p-4 text-center">
                      <div className="w-full h-2 bg-jimu-blue mb-4"></div>
                      <div className="text-gray-900 font-black text-lg leading-tight">极目机器人<br/>维修技术手册</div>
                      <div className="text-gray-400 text-xs">Maintenance Manual</div>
                      <div className="w-8 h-8 bg-jimu-blue rounded-full text-white flex items-center justify-center text-xs font-bold">EA</div>
                   </div>
                    {/* Spine effect */}
                   <div className="absolute left-0 top-0 bottom-0 w-2 bg-gray-300"></div>
                </div>

                <div className="flex-grow flex flex-col justify-center text-center md:text-left">
                   <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                      <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded font-bold">维修认证</span>
                   </div>
                   <h3 className="text-xl font-bold text-gray-900 mb-2">《EA系列无人机维修技术手册》</h3>
                   <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                     深度解析 EA-J100/J150 内部结构原理，包含详细的电路图、拆装步骤及常见故障排查逻辑，专为维修工程师打造。
                   </p>
                   <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                      <span className="text-sm font-bold text-jimu-blue">内部技术资料</span>
                      <button className="text-sm text-gray-400 hover:text-jimu-blue cursor-not-allowed flex items-center gap-1">
                        <Lock size={14} /> 认证网点可见
                      </button>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Section 2: Training Manuals (List/Card) */}
        <section>
          <div className="flex items-center gap-3 mb-8">
             <div className="p-2 bg-green-100 rounded-lg text-green-700">
                <FileText size={24} />
             </div>
             <h2 className="text-2xl font-bold text-gray-900">实训指导书</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MANUALS.map((manual, idx) => (
              <div key={idx} className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-jimu-blue transition-colors cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                   <Award size={60} className="text-jimu-blue" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-jimu-blue">{manual.title}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">{manual.code}</span>
                  <span className="text-xs text-gray-400">{manual.pages} 页</span>
                </div>
                <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                  {manual.desc}
                </p>
                <div className="flex items-center text-sm font-medium text-jimu-blue">
                   <Star size={14} className="mr-1 fill-current" /> 
                   {manual.level}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Digital Courseware (Media Grid) */}
        <section>
          <div className="flex items-center gap-3 mb-8">
             <div className="p-2 bg-purple-100 rounded-lg text-purple-700">
                <MonitorPlay size={24} />
             </div>
             <h2 className="text-2xl font-bold text-gray-900">多媒体课件</h2>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {DIGITAL_RESOURCES.map((res, idx) => (
                  <div key={idx} className="group cursor-pointer">
                     <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative mb-3">
                        <img src={res.image} alt={res.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"/>
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                           <div className="bg-white/90 p-2 rounded-full">
                             {res.type === 'ppt' ? <FileText size={20} className="text-orange-500"/> : <MonitorPlay size={20} className="text-blue-500"/>}
                           </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-1.5 rounded">
                           {res.format}
                        </div>
                     </div>
                     <h4 className="text-sm font-bold text-gray-800 group-hover:text-jimu-blue line-clamp-1">{res.title}</h4>
                     <p className="text-xs text-gray-400 mt-1">{res.size}</p>
                  </div>
                ))}
             </div>
             <div className="mt-8 text-center">
                <p className="text-sm text-gray-400 mb-4">更多教学课件请登录【极目学院教员系统】获取</p>
                <button className="px-6 py-2 border border-gray-300 rounded text-gray-600 hover:border-jimu-blue hover:text-jimu-blue transition-colors text-sm">
                   前往教员系统
                </button>
             </div>
          </div>
        </section>

      </div>
    </div>
  );
};

// Data
const MANUALS = [
  { title: '学员飞行实训记录册', code: 'TR-FLT-001', pages: 45, desc: '用于记录学员每日飞行训练科目、时长及考核成绩，标准化学员档案管理。', level: '基础通用' },
  { title: 'EA-J100 拆装实训指导书', code: 'TR-MNT-102', pages: 88, desc: '配合线下拆装课程使用，包含20个标准拆装实验项目。', level: '进阶维修' },
  { title: '植保作业药剂配比手册', code: 'TR-AGR-201', pages: 32, desc: '常见作物病虫害防治药剂推荐及无人机作业浓度换算表。', level: '农业应用' },
];

const DIGITAL_RESOURCES = [
  { title: '第一章：无人机概述.pptx', type: 'ppt', format: 'PPT', size: '24.5 MB', image: 'https://picsum.photos/300/200?random=ppt1' },
  { title: '第三章：飞行原理详解.pptx', type: 'ppt', format: 'PPT', size: '48.2 MB', image: 'https://picsum.photos/300/200?random=ppt2' },
  { title: 'J100 喷洒系统清洗演示.mp4', type: 'video', format: 'VIDEO', size: '120 MB', image: 'https://picsum.photos/300/200?random=vid1' },
  { title: 'RTK 基站架设全流程.mp4', type: 'video', format: 'VIDEO', size: '85 MB', image: 'https://picsum.photos/300/200?random=vid2' },
];