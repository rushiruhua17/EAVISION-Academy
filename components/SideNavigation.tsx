import React, { useEffect, useState } from 'react';

interface SideNavigationProps {
  items: { id: string; label: string }[];
}

export const SideNavigation: React.FC<SideNavigationProps> = ({ items }) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Set up intersection observer to detect active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { 
        rootMargin: '-20% 0px -60% 0px', // Trigger when element is near the top-middle
        threshold: 0
      } 
    );

    items.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (items.length === 0) return null;

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
      <div className="bg-white/90 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-lg p-6 border border-gray-100 w-40 animate-fade-in">
         <ul className="space-y-5">
           {items.map((item) => (
             <li 
               key={item.id} 
               onClick={() => scrollTo(item.id)}
               className={`cursor-pointer text-sm transition-all duration-300 flex items-center gap-3 group relative ${
                 activeId === item.id ? 'text-jimu-blue font-bold' : 'text-gray-500 hover:text-gray-800'
               }`}
             >
               {/* Dot Indicator */}
               <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                 activeId === item.id ? 'bg-jimu-blue scale-125' : 'bg-gray-300 group-hover:bg-gray-400'
               }`}></span>
               
               {/* Label */}
               <span>{item.label}</span>

               {/* Active line indicator (optional stylistic choice) */}
               {activeId === item.id && (
                  <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-4 bg-jimu-blue rounded-r"></div>
               )}
             </li>
           ))}
         </ul>
      </div>
    </div>
  );
};