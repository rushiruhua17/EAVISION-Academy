import React, { useState, useMemo, useEffect, useRef } from 'react';
import { MapPin, Phone, Search, ChevronDown, Map as MapIcon, Loader2 } from 'lucide-react';
import L from 'leaflet';

// Mock Data Types
interface Branch {
  id: number;
  name: string;
  province: string;
  tags: string[];
  contact: string;
  phone: string;
  address: string;
  lat: number;
  lng: number;
}

// Real Coordinates for branches
const ALL_BRANCHES: Branch[] = [
  { 
    id: 1, 
    name: '极目学院杭州总部', 
    province: '浙江省', 
    tags: ['飞手培训', '教员认证', '维修培训'],
    contact: '李经理', 
    phone: '138-0000-1111', 
    address: '杭州市滨江区长河街道科技园路', 
    lat: 30.1873, 
    lng: 120.2114 
  },
  { 
    id: 2, 
    name: '新昌实训基地', 
    province: '浙江省', 
    tags: ['实操训练', '产品维修', '全地形模拟'],
    contact: '王教员', 
    phone: '139-2222-3333', 
    address: '绍兴市新昌县高新园区智能装备产业园', 
    lat: 29.4935, 
    lng: 120.9038 
  },
  { 
    id: 3, 
    name: '慧飞上海分校', 
    province: '上海市', 
    tags: ['UTC认证', '航拍培训'],
    contact: '杨经理', 
    phone: '021-12345678', 
    address: '上海市松江区莘砖公路518号', 
    lat: 31.0964, 
    lng: 121.3184 
  },
  { 
    id: 4, 
    name: '幻飞智控科技(上海)有限公司', 
    province: '上海市', 
    tags: ['行业应用', '电力巡检'],
    contact: '刘老师', 
    phone: '138-1111-2222', 
    address: '上海市闵行区紫竹科学园区', 
    lat: 31.0256, 
    lng: 121.4468 
  },
  { 
    id: 5, 
    name: '武汉分校', 
    province: '湖北省', 
    tags: ['植保飞防', '农机补贴'],
    contact: '刘经理', 
    phone: '139-8888-9999', 
    address: '武汉市江夏区现代农业产业园', 
    lat: 30.3621, 
    lng: 114.3079 
  },
  { 
    id: 6, 
    name: '广州飞采分校', 
    province: '广东省', 
    tags: ['果树飞防', '测绘培训'],
    contact: '吴经理', 
    phone: '130-1234-5678', 
    address: '广州市天河区智慧城核心区', 
    lat: 23.1664, 
    lng: 113.4116 
  },
  { 
    id: 7, 
    name: '石河子分校', 
    province: '新疆', 
    tags: ['大田作业', '棉花脱叶'],
    contact: '张经理', 
    phone: '136-5555-6666', 
    address: '石河子市北泉镇农业机械化学校', 
    lat: 44.3324, 
    lng: 85.9665 
  },
  { 
    id: 8, 
    name: '哈尔滨分校', 
    province: '黑龙江省', 
    tags: ['极寒测试', '抗寒作业'],
    contact: '孙经理', 
    phone: '135-9999-0000', 
    address: '哈尔滨市松北区科技创新城', 
    lat: 45.8038, 
    lng: 126.5350 
  },
  { 
    id: 9, 
    name: '成都分校', 
    province: '四川省', 
    tags: ['山地作业', '丘陵飞防'],
    contact: '郑经理', 
    phone: '131-8765-4321', 
    address: '成都市高新区天府软件园', 
    lat: 30.5447, 
    lng: 104.0626 
  },
  { 
    id: 10, 
    name: '潍坊分校', 
    province: '山东省', 
    tags: ['蔬菜大棚', '精准施药'],
    contact: '陈经理', 
    phone: '158-6666-8888', 
    address: '潍坊市寒亭区国家现代农业产业园', 
    lat: 36.7588, 
    lng: 119.1685 
  }
];

const PROVINCES = ['全部', '浙江省', '上海市', '湖北省', '广东省', '新疆', '黑龙江省', '四川省', '山东省'];

export const TrainingNetwork: React.FC = () => {
  const [selectedProvince, setSelectedProvince] = useState('全部');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeBranchId, setActiveBranchId] = useState<number | null>(null);
  
  // Map Refs
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Record<number, L.Marker>>({});

  // Filter Logic
  const filteredBranches = useMemo(() => {
    return ALL_BRANCHES.filter(branch => {
      const matchProvince = selectedProvince === '全部' || branch.province === selectedProvince;
      const matchSearch = branch.name.includes(searchQuery) || branch.address.includes(searchQuery);
      return matchProvince && matchSearch;
    });
  }, [selectedProvince, searchQuery]);

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return; // Prevent double init

    // Create Map centered roughly on China
    const map = L.map(mapContainerRef.current, {
        center: [34.3416, 108.9398],
        zoom: 5,
        zoomControl: false, // We'll add it elsewhere if needed, or keep clean
        attributionControl: false
    });

    // Add Tile Layer (CartoDB Positron for that clean, professional gray look similar to the screenshot)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
    }).addTo(map);
    
    // Add simple attribution in corner
    L.control.attribution({ position: 'bottomleft' }).addAttribution('© OpenStreetMap contributors').addTo(map);

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update Markers when filtered branches change
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Clear existing markers
    Object.values(markersRef.current).forEach((marker: L.Marker) => marker.remove());
    markersRef.current = {};

    // Bounds to fit view
    const bounds = L.latLngBounds([]);

    filteredBranches.forEach((branch, index) => {
        // Create Custom HTML Icon
        const isSelected = activeBranchId === branch.id;
        // Use updated Jimu Blue
        const colorClass = isSelected ? '#444E86' : '#ef4444'; // jimu-blue or red-500
        
        const iconHtml = `
            <div class="map-pin ${isSelected ? 'active' : ''}">
                <svg viewBox="0 0 24 24" fill="${colorClass}" style="width: 100%; height: 100%;">
                    <path d="M12 0C7.58 0 4 3.58 4 8c0 5.25 7 13 7 13s7-7.75 7-13c0-4.42-3.58-8-8-8z"/>
                </svg>
                <span>${index + 1}</span>
            </div>
        `;

        const icon = L.divIcon({
            className: 'custom-div-icon',
            html: iconHtml,
            iconSize: [30, 42],
            iconAnchor: [15, 42], // Bottom tip of the pin
        });

        const marker = L.marker([branch.lat, branch.lng], { icon })
            .addTo(map)
            .on('click', () => handleMarkerClick(branch.id));

        markersRef.current[branch.id] = marker;
        bounds.extend([branch.lat, branch.lng]);
    });

    // Fit bounds if we have branches
    if (filteredBranches.length > 0 && !activeBranchId) {
        map.fitBounds(bounds, { padding: [50, 50], maxZoom: 10 });
    }

  }, [filteredBranches, activeBranchId]);

  // Handle flying to a branch when activeBranchId changes
  useEffect(() => {
     if (!mapInstanceRef.current || !activeBranchId) return;

     const branch = ALL_BRANCHES.find(b => b.id === activeBranchId);
     if (branch) {
         mapInstanceRef.current.flyTo([branch.lat, branch.lng], 13, {
             animate: true,
             duration: 1.5
         });
     }
  }, [activeBranchId]);


  const handleMarkerClick = (id: number) => {
    setActiveBranchId(id);
    const listItem = document.getElementById(`branch-item-${id}`);
    if (listItem) {
      listItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleListItemClick = (id: number) => {
      setActiveBranchId(id);
      // Map flyTo handled by useEffect
  }

  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in font-sans flex flex-col">
      
      {/* Page Title */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
            <h1 className="text-xl font-bold text-gray-800">培训网点查询</h1>
        </div>
      </div>

      <div className="flex-grow relative h-[calc(100vh-64px)] overflow-hidden">
        
        {/* 1. Map Container */}
        <div 
            id="leaflet-map" 
            ref={mapContainerRef} 
            className="absolute inset-0 z-0 bg-gray-100"
        ></div>

        {/* 2. Floating Search Panel (Right Side) */}
        <div className="absolute top-4 right-4 bottom-4 w-[420px] bg-white shadow-2xl rounded-sm flex flex-col z-[1000] border border-gray-200 pointer-events-auto">
           
           {/* Top Filter Area */}
           <div className="p-4 border-b border-gray-100 bg-white shadow-sm z-10">
              <div className="flex gap-2 mb-3">
                 {/* Province Select */}
                 <div className="relative w-1/3">
                    <select 
                      value={selectedProvince}
                      onChange={(e) => setSelectedProvince(e.target.value)}
                      className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-2.5 pl-3 pr-8 rounded focus:outline-none focus:border-jimu-blue text-sm cursor-pointer hover:bg-gray-100 transition-colors"
                    >
                       {PROVINCES.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                    <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"/>
                 </div>
                 
                 {/* Search Input */}
                 <div className="relative flex-grow">
                    <input 
                       type="text" 
                       placeholder="搜索网点名称或地址..." 
                       value={searchQuery}
                       onChange={(e) => setSearchQuery(e.target.value)}
                       className="w-full bg-gray-50 border border-gray-200 text-gray-700 py-2.5 pl-3 pr-8 rounded focus:outline-none focus:border-jimu-blue text-sm hover:bg-gray-100 transition-colors"
                    />
                    <Search size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"/>
                 </div>
              </div>
              <div className="text-xs text-gray-400 flex justify-between items-center">
                 <span>共找到 <span className="text-jimu-blue font-bold text-sm">{filteredBranches.length}</span> 个培训网点</span>
                 <span className="text-gray-300">点击列表定位地图</span>
              </div>
           </div>

           {/* Branch List */}
           <div className="flex-grow overflow-y-auto custom-scrollbar bg-gray-50">
              {filteredBranches.length > 0 ? (
                filteredBranches.map((branch, index) => (
                  <div 
                    key={branch.id} 
                    id={`branch-item-${branch.id}`}
                    onClick={() => handleListItemClick(branch.id)}
                    className={`p-5 border-b border-gray-100 cursor-pointer transition-all duration-200 group ${activeBranchId === branch.id ? 'bg-white border-l-4 border-l-jimu-blue shadow-md z-10 relative' : 'hover:bg-white hover:shadow-sm border-l-4 border-l-transparent'}`}
                  >
                     <div className="flex items-start gap-3">
                        {/* Number Badge */}
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5 transition-colors ${activeBranchId === branch.id ? 'bg-jimu-blue' : 'bg-red-500 group-hover:bg-red-600'}`}>
                           {index + 1}
                        </div>
                        
                        <div className="flex-grow">
                           <h3 className={`font-bold text-base mb-2 transition-colors ${activeBranchId === branch.id ? 'text-jimu-blue' : 'text-gray-800'}`}>
                              {branch.name}
                           </h3>
                           
                           {/* Tags */}
                           <div className="flex flex-wrap gap-2 mb-3">
                              {branch.tags.map((tag, i) => (
                                 <span key={i} className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded border border-gray-200 group-hover:border-gray-300">
                                    {tag}
                                 </span>
                              ))}
                           </div>

                           {/* Info Rows */}
                           <div className="space-y-2 text-sm text-gray-600">
                              <div className="flex items-start gap-2">
                                 <MapPin size={16} className="text-gray-400 mt-0.5 flex-shrink-0"/>
                                 <span className="leading-tight">{branch.address}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                 <Phone size={16} className="text-gray-400 flex-shrink-0"/>
                                 <span className="font-mono">{branch.phone} ({branch.contact})</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center h-64 text-gray-400 text-sm">
                   <div className="bg-gray-100 p-4 rounded-full mb-3">
                      <MapIcon size={32} className="opacity-50"/>
                   </div>
                   <p>未找到相关网点</p>
                   <button 
                     onClick={() => {setSelectedProvince('全部'); setSearchQuery('');}}
                     className="mt-2 text-jimu-blue hover:underline"
                   >
                     清除筛选条件
                   </button>
                </div>
              )}
           </div>
        </div>

      </div>
    </div>
  );
};