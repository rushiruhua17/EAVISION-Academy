import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const MAIN_HERO_SLIDES = [
  {
    id: 1,
    image: 'https://picsum.photos/1920/1080?random=drone1',
    title: '全时全域 安全守护',
    subtitle: <>极目 <span className="font-bold italic text-jimu-light">EA-J100</span> 2026款 农业无人机</>,
    desc: '全球领先的双目视觉感知技术，重新定义农业植保标准',
    buttonText: '了解更多'
  },
  {
    id: 2,
    image: 'https://picsum.photos/1920/1080?random=tech_vision', 
    title: '双目视觉 自主避障',
    subtitle: <>复杂环境下的 <span className="font-bold text-jimu-light">智能飞行</span> 解决方案</>,
    desc: '不惧黑夜，无视地形，为每一次作业保驾护航',
    buttonText: '探索技术'
  }
];

export const MainSite: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % MAIN_HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      {/* Hero Carousel */}
      <div className="relative h-[80vh] w-full overflow-hidden bg-gray-900 group">
        {MAIN_HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-4xl md:text-6xl text-white font-bold mb-6 tracking-wide animate-fade-in-up drop-shadow-lg">
                {slide.title}
              </h1>
              <h2 className="text-2xl md:text-4xl text-white font-light mb-6 drop-shadow-md">
                {slide.subtitle}
              </h2>
              <p className="text-gray-200 text-lg mb-10 max-w-2xl mx-auto drop-shadow-md hidden md:block">
                  {slide.desc}
              </p>
              <button className="flex items-center gap-2 px-10 py-3 bg-jimu-blue hover:opacity-90 text-white rounded-full transition-all transform hover:scale-105 shadow-lg border border-white/20 backdrop-blur-sm">
                {slide.buttonText} <ArrowRight size={18} />
              </button>
            </div>
          </div>
        ))}

        {/* Carousel Indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {MAIN_HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-jimu-light w-10' : 'bg-white/50 w-2 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Decorative content to make page scrollable */}
      <div className="py-20 bg-white text-center">
        <h3 className="text-3xl text-gray-800 font-bold mb-4">主要产品系列</h3>
        <p className="text-jimu-grey">全球领先的双目视觉感知技术</p>
        <div className="flex justify-center gap-8 mt-12 flex-wrap px-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-80 h-64 bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow group cursor-pointer overflow-hidden relative">
               <img src={`https://picsum.photos/400/300?random=prod${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Product"/>
               <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white text-left">
                  <h4 className="font-bold text-lg">产品系列 {i}</h4>
                  <p className="text-xs opacity-80">点击查看详情</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};