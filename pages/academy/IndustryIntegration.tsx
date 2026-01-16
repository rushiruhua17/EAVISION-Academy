import React from 'react';
import { 
  Beaker, BookOpen, Monitor, Users, Award, Briefcase, 
  Globe, ArrowRight, Phone, MessageSquare, GraduationCap, MapPin 
} from 'lucide-react';
import { SideNavigation } from '../../components/SideNavigation';

export const IndustryIntegration: React.FC = () => {
  const navItems = [
    { id: 'section-service', label: '专业建设服务' },
    { id: 'section-talent', label: '人才定向培养' },
    { id: 'section-research', label: '科研联合申报' },
    { id: 'section-training', label: '项目制培训' },
    { id: 'section-global', label: '职教出海' },
  ];

  return (
    <div className="bg-white animate-fade-in relative font-sans">
      <SideNavigation items={navItems} />

      {/* Hero Section */}
      <div className="relative h-[450px] w-full bg-gray-900 overflow-hidden">
        <img 
          src="https://picsum.photos/1920/600?random=edu_hero_new" 
          alt="Industry Integration" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-jimu-blue/80 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-blue-300 font-bold tracking-widest uppercase mb-4">Cooperation</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">产教融合 协同育人</h1>
          <p className="text-xl text-gray-100 max-w-2xl border-l-4 border-white pl-6 leading-relaxed">
            极目学院致力于连接教育与产业，通过五大核心模块，构建现代农业装备人才培养新生态。
          </p>
        </div>
      </div>

      {/* 1. 无人机专业建设服务 (Feature Grid Layout) */}
      <section id="section-service" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16">
            
            {/* Left: Introduction & Contact */}
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">无人机专业建设服务</h2>
              <div className="w-20 h-1.5 bg-jimu-blue mb-8"></div>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                我们为院校提供从顶层设计到落地实施的一站式解决方案，包括实训室规划、课程体系植入及师资队伍建设，助力院校打造高水平无人机专业。
              </p>
              
              {/* Contact Box */}
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 shadow-sm">
                <h4 className="font-bold text-jimu-blue mb-2 flex items-center gap-2">
                  <MessageSquare size={18}/> 合作咨询
                </h4>
                <p className="text-sm text-gray-600 mb-4">有意向建设相关专业的院校，欢迎联系建设顾问。</p>
                <div className="flex items-center gap-2 text-gray-800 font-bold text-lg">
                   <Phone size={20} className="text-jimu-light"/> 400-888-9999
                </div>
              </div>
            </div>

            {/* Right: Feature Grid */}
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
               {[
                 { icon: <Briefcase className="w-8 h-8 text-blue-500"/>, title: '实训室建设', desc: '标准化无人机拆装、维修、飞行模拟实训室解决方案。' },
                 { icon: <BookOpen className="w-8 h-8 text-green-500"/>, title: '课程资源', desc: '配套教材、PPT课件、视频教程及题库资源。' },
                 { icon: <Monitor className="w-8 h-8 text-purple-500"/>, title: '仿真系统', desc: '高保真飞行仿真软件，还原真实作业场景。' },
                 { icon: <GraduationCap className="w-8 h-8 text-orange-500"/>, title: '师资培训', desc: '寒暑期专业教师技能提升与认证培训。' },
                 { icon: <Users className="w-8 h-8 text-red-500"/>, title: '智慧教学', desc: '数字化教学管理平台，实时掌握学生实训数据。' },
                 { icon: <Award className="w-8 h-8 text-cyan-500"/>, title: '技能大赛', desc: '提供大赛设备支持、技术指导及赛前集训。' },
               ].map((item, idx) => (
                 <div key={idx} className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-lg hover:border-blue-100 transition-all group bg-white">
                    <div className="mb-4 bg-gray-50 w-14 h-14 rounded-full flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. 人才定向培养 (Split Layout with Visual Overlap) */}
      <section id="section-talent" className="py-24 bg-gray-50 scroll-mt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row items-center relative">
              
              {/* Image Area */}
              <div className="lg:w-3/5 w-full relative z-10">
                 <img 
                   src="https://picsum.photos/800/600?random=class_photo" 
                   alt="Talent Class" 
                   className="rounded-lg shadow-2xl w-full object-cover h-[500px]"
                 />
                 <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded shadow-lg hidden md:block border-l-4 border-jimu-blue">
                    <p className="text-sm text-gray-500">累计输送人才</p>
                    <p className="text-3xl font-bold text-gray-900">5,000+</p>
                 </div>
              </div>

              {/* Text Area (Overlapping) */}
              <div className="lg:w-1/2 w-full lg:-ml-20 mt-10 lg:mt-0 relative z-20">
                 <div className="bg-white p-10 md:p-12 rounded-lg shadow-xl border border-gray-100">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">人才定向培养</h2>
                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                       通过“极目订单班”、“现代学徒制”等模式，实现入学即就业。我们与全国300+农业服务组织建立人才输送通道，确保学生学以致用，高薪就业。
                    </p>
                    
                    <div className="bg-gray-50 p-4 rounded mb-8 border-l-4 border-green-500">
                       <h4 className="font-bold text-gray-800 mb-2">案例：江西某职业学院订单班</h4>
                       <p className="text-sm text-gray-500">
                          2024届订单班30名学员，在实习期间全部被当地植保飞防大队录用，平均月薪达8000元以上，实现100%专业对口就业。
                       </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                        <div>
                           <span className="block text-xs text-gray-400 mb-1">人才合作热线</span>
                           <span className="font-bold text-jimu-blue text-lg">0512-12345678</span>
                        </div>
                        <button className="px-6 py-2 bg-jimu-blue text-white rounded hover:bg-blue-700 transition-colors">
                           申请开设订单班
                        </button>
                    </div>
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* 3. 校企科研联合申报 (Dark Tech Theme) */}
      <section id="section-research" className="py-24 bg-[#1e293b] text-white scroll-mt-20 relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row gap-16 items-center">
               <div className="md:w-1/2">
                  <span className="text-blue-400 font-bold tracking-wider text-sm mb-2 block">RESEARCH & DEVELOPMENT</span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">校企科研联合申报</h2>
                  <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                     结合高校的科研力量与极目的产业数据，共同申报国家级、省级重点研发计划。聚焦智慧农业、视觉导航、精准施药等前沿课题，共享科研成果。
                  </p>

                  <div className="space-y-6">
                     <div className="flex gap-4 group">
                        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 text-blue-400 font-bold text-xl group-hover:bg-blue-500 group-hover:text-white transition-colors">01</div>
                        <div>
                           <h4 className="font-bold text-xl mb-1">课题共研</h4>
                           <p className="text-gray-400 text-sm">针对丘陵山地作业难题，联合开展技术攻关。</p>
                        </div>
                     </div>
                     <div className="flex gap-4 group">
                        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 text-blue-400 font-bold text-xl group-hover:bg-blue-500 group-hover:text-white transition-colors">02</div>
                        <div>
                           <h4 className="font-bold text-xl mb-1">成果转化</h4>
                           <p className="text-gray-400 text-sm">推动实验室成果走向田间地头，实现商业价值。</p>
                        </div>
                     </div>
                  </div>
                  
                  <div className="mt-10">
                     <button className="flex items-center gap-2 border border-blue-400 text-blue-400 px-8 py-3 rounded hover:bg-blue-500 hover:text-white hover:border-transparent transition-all">
                        <Beaker size={18}/> 联系科研合作部
                     </button>
                  </div>
               </div>
               
               <div className="md:w-1/2">
                  <div className="relative">
                     <img src="https://picsum.photos/600/400?random=lab" alt="Lab Research" className="rounded-lg shadow-2xl border-4 border-white/10"/>
                     <div className="absolute -bottom-6 -right-6 bg-blue-600 p-6 rounded-lg shadow-xl max-w-xs">
                        <p className="font-bold text-sm mb-2">最新成果</p>
                        <p className="text-xs opacity-90">极目与某农业大学联合研发的“果树变量喷洒控制算法”荣获省科技进步二等奖。</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 4. 项目制培训 (Floating Cards Layout) */}
      <section id="section-training" className="py-24 bg-white scroll-mt-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">项目制培训</h2>
               <p className="text-gray-500 max-w-2xl mx-auto">
                  承接各地政府高素质农民培训、退役军人技能培训等项目，定制化输出培训服务。
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                  { title: '江苏高素质农民培训项目', loc: '江苏 · 南京', img: 'https://picsum.photos/400/250?random=tr1', desc: '为期7天的封闭式集训，培养了200名具备植保无人机操作能力的“新农人”。' },
                  { title: '退役军人就业创业技能班', loc: '浙江 · 杭州', img: 'https://picsum.photos/400/250?random=tr2', desc: '协助退役军人掌握新技能，顺利转型成为无人机行业技术骨干。' },
                  { title: '林业系统专项技能提升', loc: '云南 · 昆明', img: 'https://picsum.photos/400/250?random=tr3', desc: '针对林业病虫害防治需求，开展山地无人机飞防专项技术培训。' }
               ].map((item, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-gray-100">
                     <div className="h-48 overflow-hidden relative">
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-gray-800 text-xs px-3 py-1 rounded-full font-bold flex items-center gap-1">
                           <MapPin size={10}/> {item.loc}
                        </div>
                     </div>
                     <div className="p-6 flex-grow">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-jimu-blue transition-colors">{item.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.desc}</p>
                     </div>
                     <div className="p-6 pt-0 mt-auto">
                        <button className="text-jimu-blue text-sm font-medium flex items-center gap-1 hover:underline">
                           查看项目详情 <ArrowRight size={14}/>
                        </button>
                     </div>
                  </div>
               ))}
            </div>

            <div className="mt-12 text-center">
               <span className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full shadow-lg border border-gray-100 text-gray-700 hover:scale-105 transition-transform cursor-pointer">
                  <Phone size={20} className="text-jimu-blue"/>
                  <span className="font-bold">培训项目承接热线：</span> 
                  <span>李经理 138-0000-0000</span>
               </span>
            </div>
         </div>
      </section>

      {/* 5. 职教出海 (Full Width with Map) */}
      <section id="section-global" className="py-24 bg-blue-50 scroll-mt-20 relative overflow-hidden">
         {/* Map Background */}
         <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply">
             <img src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" className="w-full h-full object-cover grayscale" alt="World Map"/>
         </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row gap-16">
               <div className="md:w-1/2">
                  <span className="inline-block py-1 px-3 bg-white text-blue-700 rounded-full text-xs font-bold mb-4 shadow-sm">
                     Global Strategy
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">职教出海</h2>
                  <div className="w-20 h-1.5 bg-jimu-blue mb-8"></div>
                  
                  <div className="space-y-8 bg-white/60 p-6 rounded-lg backdrop-blur-sm border border-white">
                     <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                           <Globe size={20} className="text-jimu-light"/> 政策背景
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-sm">
                           响应“一带一路”倡议，随中国农机企业共同出海，输出中国标准与中国方案。
                        </p>
                     </div>
                     <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                           <Briefcase size={20} className="text-jimu-light"/> 出海模式
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-sm">
                           “中文+职业技能”培训模式。在海外设立“鲁班工坊”式培训中心，为当地培养本土化飞手与维修工程师。
                        </p>
                     </div>
                     <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                           <Award size={20} className="text-jimu-light"/> 典型案例
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-sm">
                           泰国、日本培训中心已累计培训超1000名外籍学员，助力极目无人机在东南亚市场的本地化服务落地。
                        </p>
                     </div>
                  </div>

                  <div className="mt-8 flex gap-4">
                     <button className="flex-1 bg-jimu-blue text-white py-3 rounded hover:bg-blue-700 transition-colors shadow-md">
                        联系海外事业部
                     </button>
                  </div>
               </div>

               <div className="md:w-1/2 relative min-h-[400px]">
                  {/* Collage of International Photos */}
                  <img 
                    src="https://picsum.photos/400/300?random=global1" 
                    alt="Thai Training" 
                    className="absolute top-0 right-0 w-2/3 rounded-lg shadow-xl border-4 border-white z-20 transform rotate-2 hover:rotate-0 transition-transform duration-500"
                  />
                  <img 
                    src="https://picsum.photos/400/300?random=global2" 
                    alt="Japan Training" 
                    className="absolute bottom-10 left-0 w-2/3 rounded-lg shadow-xl border-4 border-white z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-500"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur p-5 rounded-full shadow-2xl z-30 animate-pulse">
                     <Globe size={48} className="text-jimu-blue"/>
                  </div>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};