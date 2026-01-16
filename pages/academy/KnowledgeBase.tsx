import React, { useState } from 'react';
import { Search, ChevronRight, ChevronDown, FileText, FolderOpen } from 'lucide-react';

// Mock Data for Tree Menu
const MENU_STRUCTURE = [
  {
    id: 'fault-diagnosis',
    label: '故障案例及排查',
    isOpen: true,
    children: [
      {
        id: 'hardware',
        label: '硬件',
        isOpen: true,
        children: [
          { id: 'main-ctrl', label: '主控' },
          { id: 'radar', label: '雷达' },
          { id: 'sensor', label: '称重传感器' },
          { id: 'antenna', label: '主副天线', isActive: true },
          { id: 'fpv', label: 'FPV' },
          { id: 'power', label: '动力系统' },
          { id: 'frame', label: '机架、机臂' },
          { id: 'spray', label: '喷洒系统' },
          { id: 'spread', label: '播撒系统' },
          { id: 'battery', label: '电池' },
        ]
      },
      {
        id: 'accessories',
        label: '附属设备',
        children: [
            { id: 'rtk', label: 'RTK基站' },
            { id: 'charger', label: '充电器' },
        ]
      },
      {
        id: 'software',
        label: '软件',
        children: []
      },
      {
        id: 'flight-issues',
        label: '飞行问题',
        children: []
      }
    ]
  }
];

export const KnowledgeBase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'J160' | 'J150'>('J160');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans animate-fade-in">
      
      {/* Search Header - Updated Background */}
      <div className="bg-jimu-blue py-12 text-center">
        <h2 className="text-white text-2xl mb-6 font-medium">在下面搜索您的问题!</h2>
        <div className="max-w-2xl mx-auto relative px-4">
          <input 
            type="text" 
            placeholder="搜索" 
            className="w-full h-12 pl-4 pr-12 rounded-sm outline-none text-gray-700 focus:ring-2 focus:ring-jimu-light/50 transition-shadow"
          />
          <button className="absolute right-4 top-0 h-12 w-12 bg-jimu-blue hover:opacity-90 flex items-center justify-center rounded-r-sm transition-opacity border-l border-white/10">
            <Search className="text-white" size={20} />
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex gap-6">
        
        {/* Sidebar */}
        <div className="w-80 flex-shrink-0 hidden md:block">
           <div className="text-sm text-jimu-grey mb-2">极目无人机知识库 / 主副天线</div>
           
           <div className="bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden">
             {/* Model Tabs */}
             <div className="flex bg-gray-100 border-b border-gray-200">
                <button 
                  onClick={() => setActiveTab('J160')}
                  className={`flex-1 py-3 text-sm font-medium text-center transition-colors ${activeTab === 'J160' ? 'bg-jimu-blue text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                >
                  J160/J110
                </button>
                <button 
                   onClick={() => setActiveTab('J150')}
                   className={`flex-1 py-3 text-sm font-medium text-center transition-colors ${activeTab === 'J150' ? 'bg-jimu-blue text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                >
                  J150/J70
                </button>
             </div>

             {/* Tree Menu */}
             <div className="p-2 h-[600px] overflow-y-auto custom-scrollbar bg-[#f5f5f5]">
               {MENU_STRUCTURE.map((item) => (
                 <MenuItem key={item.id} item={item} level={0} />
               ))}
             </div>
           </div>
        </div>

        {/* Content Area */}
        <div className="flex-grow bg-white border border-gray-200 shadow-sm rounded-sm min-h-[600px] p-8">
           <div className="border-b border-gray-100 pb-4 mb-8">
             <h1 className="text-2xl font-bold text-gray-800">主副天线</h1>
           </div>
           
           <div className="flex flex-col items-center justify-center h-96 text-jimu-grey">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                 <FileText size={40} className="text-gray-300" />
              </div>
              <p>暂无文章内容</p>
              <p className="text-sm mt-2">Content coming soon...</p>
           </div>
        </div>

      </div>
    </div>
  );
};

// Recursive Menu Item Component
const MenuItem: React.FC<{ item: any, level: number }> = ({ item, level }) => {
  // Simple layout logic for the tree
  const paddingLeft = level * 16 + 12;
  const isSelected = item.isActive;
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div>
      <div 
        className={`flex items-center py-2 pr-2 cursor-pointer text-sm hover:bg-gray-200 transition-colors rounded-sm mb-1 ${isSelected ? 'text-jimu-blue font-bold bg-white shadow-sm' : 'text-gray-600'}`}
        style={{ paddingLeft }}
      >
        <div className="mr-2 text-gray-400">
           {hasChildren ? (item.isOpen ? <ChevronDown size={14}/> : <ChevronRight size={14}/>) : <span className="w-3.5 h-3.5 inline-block rounded-full bg-gray-300/50"></span>}
        </div>
        <span>{item.label}</span>
      </div>
      
      {hasChildren && item.isOpen && (
        <div>
          {item.children.map((child: any) => (
            <MenuItem key={child.id} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};