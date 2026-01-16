import React, { useRef, useState, useEffect } from 'react';
import { AcademyPage, CourseInfo } from '../../types';
import { Play, ArrowRight, LayoutGrid, CircleDollarSign, ChevronLeft, ChevronRight, MoveRight, Plus, Minus, TrendingUp, Briefcase, Zap, Map, ShieldAlert, Trees, X } from 'lucide-react';
import { SideNavigation } from '../../components/SideNavigation';

interface AcademyHomeProps {
  onNavigate: (page: AcademyPage) => void;
  onCourseSelect: (course: CourseInfo) => void;
}

// Hero Slides Data - Updated to 3 slides with the new "Academy" theme as #1
const HERO_SLIDES = [
  {
    id: 1,
    image: 'https://picsum.photos/1920/1080?random=academy_hero_main',
    tag: 'Empowering Future',
    title: <>极目学院 <span className="text-jimu-light">赋能未来</span></>,
    desc: '全方位的专业培训与服务体系。从入门到精通，我们致力于培养高素质农业无人机应用人才，为行业发展注入核心动力。'
  },
  {
    id: 2,
    image: 'https://picsum.photos/1920/1080?random=hero1',
    tag: 'National Strategy',
    title: <>拥抱低空经济<br/><span className="text-jimu-light">开启职业新赛道</span></>,
    desc: '随着国家低空经济战略的深入实施，农业无人机与工业级无人机应用迎来爆发式增长。掌握核心飞控技术，成为紧缺的复合型人才。'
  },
  {
    id: 3,
    image: 'https://picsum.photos/1920/1080?random=hero2',
    tag: 'Industry Overview',
    title: <>农业无人机<br/><span className="text-jimu-light">行业概况与发展</span></>,
    desc: '智慧农业是未来发展的必然趋势。了解农业无人机在精准施药、播撒、测绘等领域的广泛应用，把握行业脉搏，共创绿色农业新未来。'
  }
];

export const AcademyHome: React.FC<AcademyHomeProps> = ({ onNavigate, onCourseSelect }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  
  // Hero Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);

  // Video Modal State
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Auto-rotate Hero Carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Update Navigation Items
  const navItems = [
    { id: 'section-career', label: '职业机遇' },
    { id: 'section-courses', label: '课程体系' },
    { id: 'section-highlights', label: '培训风采' },
    { id: 'section-network', label: '培训网点' },
    { id: 'section-faq', label: '常见问题' },
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
    <div className="flex flex-col bg-white font-sans relative">
      
      <SideNavigation items={navItems} />

      {/* 1. Hero Section (Carousel) */}
      <section id="section-hero" className="relative h-[650px] w-full bg-gray-900 overflow-hidden group scroll-mt-20">
        
        {HERO_SLIDES.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <img 
              src={slide.image} 
              alt="Hero Background" 
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            
            <div className="absolute inset-0 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl animate-fade-in-up">
                <span className="inline-block py-1 px-3 border border-jimu-light text-jimu-light rounded-full text-sm mb-6 tracking-wider uppercase bg-black/20 backdrop-blur-sm">
                  {slide.tag}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed font-light drop-shadow-md">
                  {slide.desc}
                </p>
                {/* Optional CTA Button specifically for the first slide if needed */}
                {index === 0 && (
                   <button 
                     onClick={() => scroll('left')} // Just scrolling down to courses as action
                     className="px-8 py-3 bg-jimu-blue hover:opacity-90 text-white rounded-full transition-all flex items-center gap-2 w-fit shadow-lg border border-white/10"
                   >
                     开启学习之旅 <ArrowRight size={18}/>
                   </button>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Indicators (Dots) */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${
                index === currentSlide ? 'bg-jimu-light w-10' : 'bg-white/50 w-2 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. Industrial Drone Career Prospects */}
      <section id="section-career" className="py-24 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">工业级无人机职业前景</h2>
               <div className="w-20 h-1 bg-jimu-blue mx-auto"></div>
               <p className="mt-4 text-jimu-grey">万亿级蓝海市场，高端技术人才供不应求</p>
            </div>

            {/* Key Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {[
                    { icon: <TrendingUp size={32}/>, title: '人才缺口大', value: '100万+', sub: '未来5年行业人才需求缺口', color: 'text-red-500', bg: 'bg-red-50' },
                    { icon: <CircleDollarSign size={32}/>, title: '薪资待遇高', value: '15k-30k', sub: '资深飞手/工程师平均月薪', color: 'text-green-500', bg: 'bg-green-50' },
                    { icon: <Briefcase size={32}/>, title: '就业领域广', value: '10+', sub: '涵盖电力、测绘、安防等行业', color: 'text-blue-500', bg: 'bg-blue-50' },
                ].map((stat, idx) => (
                    <div key={idx} className="p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white flex flex-col items-center text-center group">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                            {stat.icon}
                        </div>
                        <h3 className="text-gray-600 font-medium mb-2">{stat.title}</h3>
                        <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                        <p className="text-sm text-jimu-grey">{stat.sub}</p>
                    </div>
                ))}
            </div>

            {/* Application Scenarios Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {[
                     { title: '电力巡检', desc: '电网精细化巡检与故障排查', icon: <Zap/>, img: 'https://picsum.photos/400/500?random=career1' },
                     { title: '航空测绘', desc: '高精度地形地貌测绘建模', icon: <Map/>, img: 'https://picsum.photos/400/500?random=career2' },
                     { title: '安防救援', desc: '警用侦查与应急搜救', icon: <ShieldAlert/>, img: 'https://picsum.photos/400/500?random=career3' },
                     { title: '农林植保', desc: '规模化农田果园飞防作业', icon: <Trees/>, img: 'https://picsum.photos/400/500?random=career4' },
                 ].map((item, idx) => (
                     <div key={idx} className="group relative h-80 rounded-xl overflow-hidden cursor-default">
                         <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                         
                         <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                             <div className="flex items-center gap-2 text-jimu-light mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                 {item.icon}
                                 <span className="text-xs font-bold uppercase tracking-wider">CAREER PATH</span>
                             </div>
                             <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                             <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 h-0 group-hover:h-auto overflow-hidden">
                                 {item.desc}
                             </p>
                             <div className="mt-4 w-8 h-1 bg-jimu-blue rounded transition-all duration-300 group-hover:w-16"></div>
                         </div>
                     </div>
                 ))}
            </div>
            
            {/* Removed "View Matching Courses" button as requested */}
        </div>
      </section>

      {/* 3. Course System (Carousel) */}
      <section id="section-courses" className="py-20 bg-gray-50 scroll-mt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">课程体系</h2>
              <p className="mt-2 text-jimu-grey text-lg">全方位、多层次的无人机专业课程</p>
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

          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {COURSES.map((course, index) => {
              const isFeatured = index === 0;
              return (
                <div 
                  key={course.id} 
                  className={`
                    flex-shrink-0 w-[320px] md:w-[360px] snap-center
                    group relative rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col
                    ${isFeatured ? 'bg-jimu-blue text-white' : 'bg-white text-gray-900'}
                  `}
                  onClick={() => onCourseSelect(course)}
                >
                  <div className="p-8 pb-6 flex flex-col h-[180px] justify-between relative z-10">
                     <div>
                       <h3 className={`text-2xl font-bold mb-4 ${isFeatured ? 'text-white' : 'text-gray-900 group-hover:text-jimu-blue transition-colors'}`}>
                         {course.title}
                       </h3>
                       <div className={`flex items-center gap-3 text-sm font-medium ${isFeatured ? 'text-blue-200' : 'text-jimu-grey'}`}>
                          <span>{course.price}</span>
                          <span className="w-px h-3 bg-current opacity-50"></span>
                          <span>{course.duration}</span>
                       </div>
                     </div>
                     {isFeatured && <div className="w-12 h-1 bg-white/30 rounded"></div>}
                  </div>

                  <div className="relative h-[280px] w-full overflow-hidden">
                     <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                     />
                     <div className={`absolute inset-0 bg-gradient-to-t ${isFeatured ? 'from-jimu-blue/80 to-transparent' : 'from-black/10 to-transparent'}`}></div>
                     <div className="absolute inset-0 bg-jimu-blue/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm z-20">
                        <button className="px-8 py-3 bg-white text-jimu-blue font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg hover:bg-gray-50 flex items-center gap-2">
                           立即报名 <ArrowRight size={16}/>
                        </button>
                     </div>
                  </div>
                </div>
              );
            })}
             <div className="w-4 flex-shrink-0"></div>
          </div>

          <div className="flex md:hidden justify-center items-center text-gray-400 text-sm gap-2 mt-[-20px]">
             <MoveRight size={16} className="animate-pulse"/> 滑动查看更多
          </div>
        </div>
      </section>

      {/* 4. Training Video Highlights (Video Modal Interaction) */}
      <section id="section-highlights" className="py-20 bg-white scroll-mt-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">学院培训风采</h2>
            <div className="w-20 h-1 bg-jimu-blue mx-auto"></div>
            <p className="mt-4 text-jimu-grey">直击实训现场，感受专业教学氛围</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[500px]">
            {/* Main Featured Video */}
            <div 
              onClick={() => setIsVideoOpen(true)}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer h-full"
            >
              <img src="https://picsum.photos/800/600?random=training_main" alt="Main Training" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play fill="white" className="text-white ml-2" size={40}/>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/80 to-transparent w-full">
                <h3 className="text-2xl font-bold text-white">极目学院“金牌飞手”特训营纪录片</h3>
              </div>
            </div>

            {/* Side Grid */}
            <div className="grid grid-cols-2 gap-4 h-full">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  onClick={() => setIsVideoOpen(true)}
                  className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer"
                >
                  <img src={`https://picsum.photos/400/300?random=training_${i}`} alt="Training Clip" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play fill="white" className="text-white" size={24}/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. National Training Points Distribution */}
      <section id="section-network" className="py-24 bg-gray-50 relative overflow-hidden scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-20 flex items-center gap-6">
                 <div className="h-px w-12 bg-jimu-blue hidden md:block"></div>
                 <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight uppercase">
                    培训网点
                 </h2>
                 <span className="hidden md:block h-px flex-grow bg-gray-200"></span>
            </div>
            <div className="flex flex-col md:flex-row gap-16">
                <div className="md:w-1/3 flex flex-col justify-center">
                    <p className="text-lg text-jimu-grey mb-12 leading-relaxed">
                        极目学院在全国主要农业产区均设有授权培训中心。您可以选择就近入学，享受统一标准的高质量教学服务。
                    </p>
                    <div className="space-y-10">
                        <div className="flex items-baseline gap-4 border-b border-gray-200 pb-4">
                             <span className="text-5xl font-bold text-jimu-blue">50<span className="text-2xl text-jimu-light">+</span></span>
                             <span className="text-gray-600 font-medium">授权培训中心</span>
                        </div>
                        <div className="flex items-baseline gap-4 border-b border-gray-200 pb-4">
                             <span className="text-5xl font-bold text-jimu-blue">200<span className="text-2xl text-jimu-light">+</span></span>
                             <span className="text-gray-600 font-medium">认证教员</span>
                        </div>
                        <div className="flex items-baseline gap-4 border-b border-gray-200 pb-4">
                             <span className="text-5xl font-bold text-jimu-blue">30<span className="text-2xl text-jimu-light">+</span></span>
                             <span className="text-gray-600 font-medium">覆盖省份</span>
                        </div>
                    </div>
                    <div className="mt-12">
                         <button 
                           onClick={() => onNavigate('network')}
                           className="flex items-center gap-2 px-6 py-3 border border-jimu-grey text-jimu-grey hover:bg-jimu-grey hover:text-white transition-all duration-300 rounded-sm"
                         >
                            <LayoutGrid size={18} />
                            更多培训网点
                         </button>
                    </div>
                </div>
                <div className="md:w-2/3 relative h-[600px] w-full bg-white rounded-lg overflow-hidden flex items-center justify-center shadow-sm">
                     <div className="absolute inset-0 opacity-20" 
                          style={{
                              backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
                              backgroundSize: '20px 20px'
                          }}>
                     </div>
                     <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/9/9c/China_blank_province_map.svg" 
                        alt="China Map" 
                        className="w-[90%] h-[90%] object-contain opacity-10 absolute mix-blend-multiply"
                     />
                     <div className="absolute top-[40%] right-[25%] w-3 h-3 bg-jimu-blue rounded-full animate-ping"></div>
                     <div className="absolute top-[40%] right-[25%] w-3 h-3 bg-jimu-blue rounded-full"></div>
                     <div className="absolute bottom-[30%] right-[30%] w-3 h-3 bg-jimu-blue rounded-full animate-ping delay-700"></div>
                     <div className="absolute bottom-[30%] right-[30%] w-3 h-3 bg-jimu-blue rounded-full"></div>
                     <div className="absolute top-[50%] right-[40%] w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                     <div className="absolute top-[25%] right-[30%] w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-500"></div>
                     <div className="absolute top-[45%] right-[28%] w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
                     <div className="absolute top-[48%] right-[22%] w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
                     <div className="absolute top-[55%] right-[35%] w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
                </div>
            </div>
        </div>
      </section>

      {/* 6. FAQ Section (Merged from FAQ page) */}
      <section id="section-faq" className="py-24 bg-white scroll-mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">常见问题</h2>
               <div className="w-20 h-1 bg-jimu-blue mx-auto"></div>
               <p className="mt-4 text-jimu-grey">这里汇集了学员们最关心的问题</p>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
                >
                  <button 
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className={`text-lg font-medium ${openFaqIndex === idx ? 'text-jimu-blue' : 'text-gray-800'}`}>
                      {faq.q}
                    </span>
                    {openFaqIndex === idx ? <Minus size={20} className="text-jimu-blue flex-shrink-0" /> : <Plus size={20} className="text-gray-400 flex-shrink-0" />}
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out ${openFaqIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 mt-2">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Removed "View More Questions" button as requested */}
        </div>
      </section>

      {/* Video Lightbox Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fade-in">
           <div className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors"
              >
                 <X size={24}/>
              </button>
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="Training Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
           </div>
        </div>
      )}

    </div>
  );
};

// Updated Course Data
const COURSES: CourseInfo[] = [
  {
    id: 'caac',
    title: 'CAAC无人机执照',
    price: '定制',
    duration: '定制',
    image: 'https://picsum.photos/400/600?random=course_caac',
    desc: '中国民航局官方认证，合法飞行必备证书，涵盖法规、气象、飞行原理与实操训练。',
    features: ['民航局官方认证', '合法合规飞行', '职业飞手必备'],
    contentImages: ['https://picsum.photos/800/400?random=c1', 'https://picsum.photos/800/400?random=c2']
  },
  {
    id: 'ag-pilot',
    title: '农业无人机飞手',
    price: '定制',
    duration: '定制',
    image: 'https://picsum.photos/400/600?random=course1',
    desc: '系统掌握农业无人机飞行操控、药剂配比与作业规范，成为专业的植保作业飞手。',
    features: ['实战作业导向', '药剂配比科学', '作业规范标准'],
    contentImages: ['https://picsum.photos/800/400?random=c3']
  },
  {
    id: 'tech-eng',
    title: '技术工程师',
    price: '定制',
    duration: '定制',
    image: 'https://picsum.photos/400/600?random=course2',
    desc: '深入学习无人机结构原理、电子电路与飞控逻辑，具备复杂故障诊断与深度维修能力。',
    features: ['深度维修技能', '电路原理剖析', '故障诊断逻辑'],
    contentImages: ['https://picsum.photos/800/400?random=c4']
  },
  {
    id: 'service-analyst',
    title: '售后分析师',
    price: '定制',
    duration: '定制',
    image: 'https://picsum.photos/400/600?random=course3',
    desc: '专精于飞行日志数据分析、远程故障判定与技术支持，为用户提供精准的售后解决方案。',
    features: ['数据分析能力', '远程诊断技术', '客户服务技巧'],
    contentImages: ['https://picsum.photos/800/400?random=c5']
  },
  {
    id: 'field-eng',
    title: '现场应用工程师',
    price: '定制',
    duration: '定制',
    image: 'https://picsum.photos/400/600?random=course4',
    desc: '针对复杂地形与特殊作物，提供定制化作业方案与参数调优，保障设备在多场景下的高效运行。',
    features: ['复杂场景应对', '作业方案定制', '参数调优专家'],
    contentImages: ['https://picsum.photos/800/400?random=c6']
  }
];

const FAQS = [
  {
    q: '极目学院的课程是否收费？',
    a: '极目学院的基础线上课程（如入门飞行、APP操作等）完全免费。针对高级维修、教员认证等线下实操课程，会收取一定的培训费用，具体请咨询当地授权培训中心。'
  },
  {
    q: '如何获得UTC无人机操作手合格证？',
    a: '您需要报名参加极目学院授权的UTC培训课程（通常为期4-7天），完成理论学习与实操训练，并通过慧飞（UTC）组织的统一考试，即可获得由中国航空运输协会（CATA）和中国成人教育协会（CAEA）联合颁发的合格证书。'
  },
  {
    q: '线上课程学习完成后有证书吗？',
    a: '完成线上课程学习并通过在线测试后，您可以在个人中心下载电子版结业证书。该证书可作为您参与线下高阶培训的前置资格证明。'
  },
  {
    q: '找不到附近的培训中心怎么办？',
    a: '请在“培训网点”页面查看全国分校地图。如果您所在的区域暂无网点，可以拨打400服务热线，我们将为您推荐最近的培训点或安排送教上门服务。'
  },
  {
    q: '我是老用户，是否需要重新参加培训？',
    a: '针对极目新发布的机型（如2026款EA-J100），由于功能与操作逻辑有较大升级，我们强烈建议老用户参加转机型培训课程，以便快速掌握新设备特性。'
  }
];