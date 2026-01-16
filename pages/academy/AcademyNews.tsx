import React from 'react';

// Mock data based on the user screenshot description
const NEWS_ITEMS = [
  {
    id: 1,
    title: '央广网直播点赞极目无人机，智慧农业助力平和蜜柚丰产增收',
    date: '2025年10月28日',
    image: null, // White card style (text only)
    summary: '近日，央广网直播团队深入平和蜜柚产区，实地探访极目无人机在山地果园作业中的卓越表现...'
  },
  {
    id: 2,
    title: '双双登上央视！极目无人机点亮安岳智慧果园',
    date: '2025年11月05日',
    image: 'https://picsum.photos/600/400?random=news2',
    summary: ''
  },
  {
    id: 3,
    title: '告别保养焦虑！J160动力系统如何为用户打造“持续可靠”的作业体验？',
    date: '2025年11月05日',
    image: null, // White card style
    summary: '针对农业无人机高强度作业下的维护痛点，极目J160动力系统通过创新设计...'
  },
  {
    id: 4,
    title: '极目学院第五期“金牌飞手”特训营圆满结业',
    date: '2025年09月15日',
    image: 'https://picsum.photos/600/400?random=news4',
    summary: ''
  },
  {
    id: 5,
    title: '校企合作新篇章：极目机器人与南京农业大学共建实训基地',
    date: '2025年08月20日',
    image: 'https://picsum.photos/600/400?random=news5',
    summary: ''
  },
  {
    id: 6,
    title: '极目发布2026款农业无人机全系培训教程',
    date: '2025年08月01日',
    image: 'https://picsum.photos/600/400?random=news6',
    summary: ''
  }
];

export const AcademyNews: React.FC = () => {
  return (
    <div className="min-h-screen bg-white animate-fade-in py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">新闻动态</h1>
          <p className="text-gray-500 text-lg mb-8">
            官方发布的最新动态或消息，为您提供关于极目机器人公司的第一手资讯
          </p>
          {/* Dashed Separator */}
          <div className="border-b border-dashed border-gray-300 w-full"></div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_ITEMS.map((item) => (
            <div key={item.id} className="group cursor-pointer flex flex-col h-full bg-white hover:shadow-lg transition-shadow duration-300 border border-gray-100 rounded-sm">
              {item.image ? (
                // Image Card Style
                <>
                  <div className="h-48 overflow-hidden bg-gray-200">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow justify-between bg-gray-50">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 line-clamp-2 hover:text-jimu-blue transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-gray-400 text-sm block mt-auto">{item.date}</span>
                  </div>
                </>
              ) : (
                // Text Only Card Style (White background in screenshot)
                <div className="p-8 flex flex-col h-full bg-gray-50 group-hover:bg-white transition-colors">
                  <div className="flex-grow">
                     <h3 className="text-lg font-bold text-gray-800 mb-4 hover:text-jimu-blue transition-colors leading-relaxed">
                      {item.title}
                    </h3>
                    {item.summary && (
                      <p className="text-gray-500 text-sm line-clamp-3 mb-4 leading-relaxed">
                        {item.summary}
                      </p>
                    )}
                  </div>
                  <span className="text-gray-400 text-sm mt-auto pt-4 border-t border-gray-200">{item.date}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pagination Mock */}
        <div className="mt-16 flex justify-center space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded hover:border-jimu-blue hover:text-jimu-blue">1</button>
            <button className="px-4 py-2 border border-transparent text-gray-500 hover:text-jimu-blue">2</button>
            <button className="px-4 py-2 border border-transparent text-gray-500 hover:text-jimu-blue">3</button>
            <span className="px-4 py-2 text-gray-400">...</span>
            <button className="px-4 py-2 border border-transparent text-gray-500 hover:text-jimu-blue">></button>
        </div>

      </div>
    </div>
  );
};