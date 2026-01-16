import React, { useRef } from 'react';
import { MapPin, Phone, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { SideNavigation } from '../../components/SideNavigation';

export const AcademyIntro: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { id: 'intro-overview', label: '学院概况' },
    { id: 'intro-stats', label: '数据一览' },
    { id: 'intro-resources', label: '教材体系' },
    { id: 'intro-base', label: '培训基地' },
    { id: 'intro-org', label: '组织架构' },
    { id: 'intro-contact', label: '联系我们' },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-white animate-fade-in relative">
      <SideNavigation items={navItems} />

      {/* Corporate Style Hero */}
      <div id="intro-hero" className="relative h-[400px] w-full bg-gray-900 scroll-mt-20">
        <img 
          src="https://picsum.photos/1920/600?random=about_hero" 
          alt="About Academy" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">极目学院</h1>
          <p className="text-xl text-gray-200 border-l-4 border-jimu-light pl-4">
            致力成为全球领先的农业机器人教育培训平台
          </p>
        </div>
      </div>

      {/* Main Content - Minimalist & Clean */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Intro Block */}
        <div id="intro-overview" className="flex flex-col md:flex-row gap-16 items-center mb-24 scroll-mt-20">
          <div className="md:w-1/2">
             <h2 className="text-3xl font-bold text-gray-900 mb-6">学院概况</h2>
             <div className="w-16 h-1 bg-gray-200 mb-8"></div>
             <p className="text-gray-600 leading-relaxed mb-6 text-lg">
               极目学院作为极目机器人的教育培训核心部门，肩负着为行业输送高素质专业人才的使命。我们依托极目先进的双目视觉感知技术与自主飞行控制技术，构建了从理论基础到实操应用的全方位培训体系。
             </p>
             <p className="text-gray-600 leading-relaxed text-lg">
               无论是初学者还是资深飞手，都能在这里找到适合自己的进阶之路。
             </p>
          </div>
          <div className="md:w-1/2 relative">
             <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-50 z-0"></div>
             <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-100 z-0"></div>
             <img src="https://picsum.photos/800/600?random=intro_img" alt="Academy Class" className="relative z-10 rounded-lg shadow-xl w-full"/>
          </div>
        </div>

        {/* Industry Standard Stats */}
        <div id="intro-stats" className="scroll-mt-20 mb-24">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-10">行业标准 定向培训</h2>
                <div className="bg-gray-50 rounded-3xl p-12 shadow-inner">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8">
                        {/* Row 1 */}
                        <div className="flex flex-col items-center">
                            <div className="text-4xl md:text-5xl font-bold text-jimu-blue mb-3">2,960,000h</div>
                            <div className="text-gray-600 font-medium">培训小时</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-4xl md:text-5xl font-bold text-jimu-blue mb-3">1,500<span className="text-3xl">+</span></div>
                            <div className="text-gray-600 font-medium">全球分校</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-4xl md:text-5xl font-bold text-jimu-blue mb-3">93<span className="text-3xl">%</span></div>
                            <div className="text-gray-600 font-medium">一次性通过率</div>
                        </div>
                        
                        {/* Row 2 */}
                        <div className="flex flex-col items-center">
                            <div className="text-4xl md:text-5xl font-bold text-jimu-blue mb-3">6,000,000m²</div>
                            <div className="text-gray-600 font-medium">全国飞场面积</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-4xl md:text-5xl font-bold text-jimu-blue mb-3">8,000<span className="text-3xl">+</span></div>
                            <div className="text-gray-600 font-medium">专业教员</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-4xl md:text-5xl font-bold text-jimu-blue mb-3">600,000<span className="text-3xl">+</span></div>
                            <div className="text-gray-600 font-medium">培训学员</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Teaching Resources Section (Carousel Style) */}
        <div id="intro-resources" className="scroll-mt-20 mb-24 relative">
             <div className="flex justify-between items-end mb-10 px-2">
                <div className="text-left">
                   <h2 className="text-3xl font-bold text-gray-900 mb-4">标准化教材体系</h2>
                   <div className="w-16 h-1 bg-jimu-blue mb-4"></div>
                   <p className="text-gray-500 max-w-2xl">
                     极目学院联合行业专家与高校教授，共同打造农业无人机领域权威教材体系与标准化实训资料。
                   </p>
                </div>
                
                {/* Navigation Buttons */}
                <div className="hidden md:flex gap-2">
                  <button onClick={() => scroll('left')} className="p-2 rounded-full border border-gray-300 hover:bg-white hover:shadow-md transition-all text-gray-600">
                    <ChevronLeft size={24} />
                  </button>
                  <button onClick={() => scroll('right')} className="p-2 rounded-full border border-gray-300 hover:bg-white hover:shadow-md transition-all text-gray-600">
                    <ChevronRight size={24} />
                  </button>
                </div>
             </div>

             {/* Carousel Container */}
             <div 
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
             >
                {RESOURCES.map((res, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 w-[300px] md:w-[340px] snap-center group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
                  >
                     {/* Image Section */}
                     <div className="h-[220px] overflow-hidden relative bg-gray-100">
                        <img 
                          src={res.image} 
                          alt={res.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold text-jimu-blue rounded-full shadow-sm">
                           {res.tag}
                        </div>
                     </div>
                     
                     {/* Content Section */}
                     <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-jimu-blue transition-colors">
                           {res.title}
                        </h3>
                        <p className="text-xs font-medium text-orange-600 mb-4 bg-orange-50 inline-block px-2 py-1 rounded w-fit">
                           {res.subtitle}
                        </p>
                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">
                           {res.desc}
                        </p>
                        <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between text-xs text-gray-400">
                           <span>极目学院 编著</span>
                           <span className="flex items-center gap-1"><Star size={12} fill="currentColor" className="text-yellow-400"/> 推荐</span>
                        </div>
                     </div>
                  </div>
                ))}
                {/* Spacing for end of scroll */}
                <div className="w-4 flex-shrink-0"></div>
             </div>
        </div>

        {/* Training Base */}
        <div id="intro-base" className="flex flex-col md:flex-row-reverse gap-16 items-center mb-24 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-20 scroll-mt-20">
          <div className="md:w-1/2">
             <h2 className="text-3xl font-bold text-gray-900 mb-6">新昌培训基地</h2>
             <div className="w-16 h-1 bg-gray-300 mb-8"></div>
             <p className="text-gray-600 leading-relaxed mb-4">
               极目学院总部基地坐落于风景秀丽的浙江新昌，拥有占地数百亩的专业飞行实训场地。
             </p>
             <ul className="space-y-4 mt-6">
                <li className="flex items-start">
                  <span className="text-jimu-blue font-bold mr-4">01.</span>
                  <span className="text-gray-700">全场景模拟：涵盖平原、梯田、果园等多种作业环境。</span>
                </li>
                <li className="flex items-start">
                  <span className="text-jimu-blue font-bold mr-4">02.</span>
                  <span className="text-gray-700">现代化设施：配备多媒体教室、维修实验室及模拟飞行室。</span>
                </li>
                <li className="flex items-start">
                  <span className="text-jimu-blue font-bold mr-4">03.</span>
                  <span className="text-gray-700">食宿无忧：提供高标准的学员宿舍与餐厅服务。</span>
                </li>
             </ul>
          </div>
          <div className="md:w-1/2">
             <img src="https://picsum.photos/800/600?random=base_img" alt="Training Base" className="rounded-lg shadow-lg w-full"/>
          </div>
        </div>

        {/* Org Structure */}
        <div id="intro-org" className="scroll-mt-20">
            <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">组织架构</h2>
            <p className="text-gray-500 mt-4">专业的团队保障教学质量</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
                { title: '教学教研组', desc: '课程研发 / 教材编写 / 标准制定' },
                { title: '教务组', desc: '考务管理 / 学员服务 / 档案管理' },
                { title: '产教融合组', desc: '高校对接 / 人才培养 / 实验室共建' }
            ].map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow text-center group">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-jimu-blue transition-colors">
                    <span className="text-xl font-bold text-jimu-blue group-hover:text-white transition-colors">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
                </div>
            ))}
            </div>
        </div>

      </div>

      {/* Contact Section */}
      <div id="intro-contact" className="bg-gray-50 py-20 border-t border-gray-100 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">联系我们</h2>
          <p className="text-gray-500 mb-12">如有合作意向或培训咨询，欢迎随时联系我们</p>
          
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg w-full max-w-6xl mx-auto border border-gray-100">
            
            {/* 3-Column Grid */}
            <div className="grid md:grid-cols-3 gap-8 items-center mb-10">
              
              {/* Left: Hangzhou */}
              <div className="text-left flex flex-col items-center md:items-start h-full justify-center">
                <h3 className="font-bold text-xl mb-4 text-jimu-blue flex items-center gap-2">
                  <MapPin size={24}/> 杭州总部
                </h3>
                <div className="space-y-2 text-gray-600 pl-2">
                  <p className="font-medium text-sm">地址：杭州总部三楼极目学院</p>
                  <p className="text-sm">联系人：X老师</p>
                </div>
              </div>

              {/* Center: QR Code */}
              <div className="flex flex-col items-center justify-center h-full border-l border-r border-gray-100 px-4">
                 <h3 className="font-bold text-lg mb-3 text-jimu-blue">官方微信</h3>
                 <div className="p-2 bg-white border-2 border-red-500/0 rounded-lg shadow-sm">
                    <img 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=JimuAcademyOfficial" 
                      alt="Official WeChat QR" 
                      className="w-32 h-32"
                    />
                 </div>
                 <p className="text-xs text-gray-400 mt-2">扫码关注极目学院公众号</p>
              </div>

              {/* Right: Xinchang */}
              <div className="text-left flex flex-col items-center md:items-start h-full justify-center">
                <h3 className="font-bold text-xl mb-4 text-jimu-blue flex items-center gap-2">
                  <MapPin size={24}/> 新昌基地
                </h3>
                <div className="space-y-2 text-gray-600 pl-2">
                  <p className="font-medium text-sm">地址：新昌基地综合楼一楼极目学院</p>
                  <p className="text-sm">联系人：X老师</p>
                </div>
              </div>

            </div>
            
            {/* Bottom Row: Phone Only */}
            <div className="pt-8 border-t border-gray-100 flex justify-center">
              <span className="flex items-center justify-center gap-3 text-gray-700 text-xl font-medium group cursor-pointer hover:text-jimu-blue transition-colors px-8 py-3 rounded-full border border-gray-200 hover:border-jimu-blue">
                <div className="bg-blue-50 p-2 rounded-full group-hover:bg-jimu-blue transition-colors"><Phone size={20} className="text-jimu-blue group-hover:text-white"/></div>
                 400-888-9999
              </span>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

// Resource Data for Carousel
const RESOURCES = [
  {
    title: '《农业无人机植保作业规范》',
    subtitle: '十三五规划教材',
    image: 'https://picsum.photos/400/600?random=book1',
    desc: '系统讲解了农业无人机在不同作物上的作业标准流程、药剂配比原则及安全规范。是职业飞手入门的必读宝典。',
    tag: '行业标准'
  },
  {
    title: '《EA系列无人机维修技术手册》',
    subtitle: '维修工程师认证',
    image: 'https://picsum.photos/400/600?random=book2',
    desc: '深度解析EA-J100/J150内部结构原理，包含详细电路图、拆装步骤及故障排查逻辑。',
    tag: '内部资料'
  },
  {
    title: '《学员飞行实训记录册》',
    subtitle: '飞行档案',
    image: 'https://picsum.photos/400/600?random=book3',
    desc: '用于记录学员每日飞行训练科目、时长及考核成绩，标准化学员成长路径。',
    tag: '基础通用'
  },
  {
    title: '《EA-J100 拆装实训指导书》',
    subtitle: '实操指南',
    image: 'https://picsum.photos/400/600?random=book4',
    desc: '配合线下拆装课程使用，包含20个标准拆装实验项目，图文并茂，清晰易懂。',
    tag: '进阶维修'
  },
  {
    title: '《植保作业药剂配比手册》',
    subtitle: '农业应用',
    image: 'https://picsum.photos/400/600?random=book5',
    desc: '汇集常见作物病虫害防治药剂推荐方案，以及针对无人机低容量喷洒的浓度换算表。',
    tag: '工具书'
  },
  {
    title: '《无人机航空气象基础》',
    subtitle: '飞行安全',
    image: 'https://picsum.photos/400/600?random=book6',
    desc: '讲解风、雨、雷、电等气象要素对飞行安全的影响，培养飞手对作业环境的判断能力。',
    tag: '理论基础'
  }
];