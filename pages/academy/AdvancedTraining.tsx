import React, { useState } from 'react';
import { PlayCircle, ListVideo, ArrowLeft, ExternalLink, Youtube } from 'lucide-react';

// Types for YouTube data
interface YTVideo {
  id: string; // YouTube Video ID
  title: string;
  duration: string;
}

interface Playlist {
  id: string;
  title: string;
  subtitle: string;
  thumbnail: string; // Cover image
  count: number;
  videos: YTVideo[];
}

// Mock Data representing YouTube Playlists
const PLAYLISTS: Playlist[] = [
  {
    id: 'j150-maintenance',
    title: 'EA-J150',
    subtitle: 'Storage Battery Care & Maintenance',
    thumbnail: 'https://picsum.photos/600/400?random=yt1',
    count: 21,
    videos: [
      { id: 'dQw4w9WgXcQ', title: 'Battery Storage Safety Guidelines', duration: '05:20' }, // Example ID
      { id: 'M7lc1UVf-VE', title: 'Cleaning the Contacts', duration: '03:15' },
      { id: 'ScMzIvxBSi4', title: 'Long-term Storage Procedures', duration: '08:45' },
    ]
  },
  {
    id: 'j150-tutorial',
    title: 'EA-J150',
    subtitle: 'Tutorial Video HD Map Upload & Usage',
    thumbnail: 'https://picsum.photos/600/400?random=yt2',
    count: 33,
    videos: [
      { id: 'tgbNymZ7vqY', title: 'Uploading HD Maps to Remote', duration: '04:30' },
      { id: '9bZkp7q19f0', title: 'Editing Boundaries on HD Maps', duration: '06:10' },
    ]
  },
  {
    id: 'j100-advanced',
    title: 'EA-J100',
    subtitle: 'Advanced Flight Maneuvers',
    thumbnail: 'https://picsum.photos/600/400?random=yt3',
    count: 12,
    videos: [
      { id: 'jNQXAC9IVRw', title: 'Obstacle Avoidance Calibration', duration: '07:20' },
      { id: 'L_jWHffIx5E', title: 'Terrain Follow Mode Deep Dive', duration: '09:15' },
    ]
  },
  {
    id: 'global-cases',
    title: 'Global Cases',
    subtitle: 'Success Stories & Field Applications',
    thumbnail: 'https://picsum.photos/600/400?random=yt4',
    count: 56,
    videos: [
      { id: 'fJ9rUzIMcZQ', title: 'Tea Plantation Spraying in Hills', duration: '03:45' },
      { id: 'kJQP7kiw5Fk', title: 'Orchard Management in California', duration: '04:50' },
    ]
  }
];

export const AdvancedTraining: React.FC = () => {
  const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | null>(null);
  const [currentVideo, setCurrentVideo] = useState<YTVideo | null>(null);

  const handlePlaylistClick = (playlist: Playlist) => {
    setSelectedPlaylist(playlist);
    setCurrentVideo(playlist.videos[0]); // Auto-select first video
    window.scrollTo(0, 0);
  };

  const handleBackToGrid = () => {
    setSelectedPlaylist(null);
    setCurrentVideo(null);
  };

  // View 1: Playlist Grid
  if (!selectedPlaylist) {
    return (
      <div className="min-h-screen bg-white animate-fade-in py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">进阶教学</h1>
            <p className="text-jimu-grey text-lg flex items-center gap-2">
              <Youtube className="text-red-600" size={24}/>
              精选 YouTube 官方频道高阶教程，涵盖维护保养、复杂场景作业及全球案例分享。
            </p>
            <div className="border-b border-gray-200 mt-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {PLAYLISTS.map((playlist) => (
              <div 
                key={playlist.id}
                onClick={() => handlePlaylistClick(playlist)}
                className="group cursor-pointer"
              >
                {/* Card Container mimicking the screenshot style */}
                <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
                  {/* Background Image */}
                  <img 
                    src={playlist.thumbnail} 
                    alt={playlist.title} 
                    className="w-full h-full object-cover filter brightness-[0.8] group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                  {/* Text Content Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center">
                    <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider drop-shadow-lg mb-2">
                      {playlist.title}
                    </h3>
                    <p className="text-xl md:text-2xl font-bold text-white/90 leading-tight max-w-md drop-shadow-md">
                      {playlist.subtitle}
                    </p>
                  </div>

                  {/* Video Count Badge */}
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded flex items-center gap-2 text-sm font-medium">
                    <ListVideo size={16} />
                    {playlist.count} 个视频
                  </div>

                  {/* Hover Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-jimu-blue rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                       <PlayCircle className="text-white fill-white" size={32} />
                    </div>
                  </div>
                </div>

                {/* Footer Text */}
                <div className="mt-4 px-1">
                   <h4 className="text-lg font-bold text-gray-800 group-hover:text-jimu-blue transition-colors">
                     {playlist.subtitle}
                   </h4>
                   <div className="flex items-center gap-1 text-jimu-grey text-sm mt-1 font-medium group-hover:text-gray-700">
                      查看完整播放列表 <ArrowLeft size={14} className="rotate-180" />
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // View 2: Playlist Detail & Player
  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
       {/* Breadcrumb / Back Navigation */}
       <div className="bg-white border-b border-gray-200 sticky top-[64px] z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
             <button 
               onClick={handleBackToGrid}
               className="flex items-center gap-2 text-gray-600 hover:text-jimu-blue transition-colors font-medium"
             >
                <ArrowLeft size={20} />
                返回播放列表
             </button>
             <span className="text-gray-400 text-sm hidden md:block">{selectedPlaylist.title} / {currentVideo?.title}</span>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
         <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Main Player Area */}
            <div className="lg:w-2/3 flex flex-col">
               <div className="aspect-video bg-black rounded-lg shadow-lg overflow-hidden relative">
                 {currentVideo ? (
                   <iframe 
                     width="100%" 
                     height="100%" 
                     src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=1`}
                     title={currentVideo.title}
                     frameBorder="0" 
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                     allowFullScreen
                   ></iframe>
                 ) : (
                   <div className="w-full h-full flex items-center justify-center text-white">Loading...</div>
                 )}
               </div>
               
               <div className="mt-6 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">{currentVideo?.title}</h1>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded font-medium">YouTube</span>
                    <span>Duration: {currentVideo?.duration}</span>
                  </div>
               </div>
            </div>

            {/* Side Playlist */}
            <div className="lg:w-1/3">
               <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col h-[600px]">
                  <div className="p-4 bg-gray-100 border-b border-gray-200 flex justify-between items-center">
                     <h3 className="font-bold text-gray-800">播放列表</h3>
                     <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded border border-gray-200">
                       {selectedPlaylist.count} 视频
                     </span>
                  </div>
                  
                  <div className="flex-grow overflow-y-auto custom-scrollbar p-2 space-y-2">
                     {selectedPlaylist.videos.map((video, idx) => (
                       <div 
                         key={video.id}
                         onClick={() => setCurrentVideo(video)}
                         className={`p-3 rounded cursor-pointer flex gap-3 transition-colors ${
                           currentVideo?.id === video.id 
                             ? 'bg-blue-50 border border-blue-100' 
                             : 'hover:bg-gray-50 border border-transparent'
                         }`}
                       >
                          <div className="relative w-24 h-16 flex-shrink-0 bg-gray-200 rounded overflow-hidden">
                             <img 
                               src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} 
                               alt="thumb" 
                               className="w-full h-full object-cover"
                             />
                             <div className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] px-1 rounded">
                               {video.duration}
                             </div>
                             {currentVideo?.id === video.id && (
                               <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                               </div>
                             )}
                          </div>
                          <div className="flex-grow min-w-0">
                             <h4 className={`text-sm font-medium line-clamp-2 leading-snug ${currentVideo?.id === video.id ? 'text-jimu-blue' : 'text-gray-700'}`}>
                               {video.title}
                             </h4>
                             <p className="text-xs text-gray-400 mt-1">Video {idx + 1}</p>
                          </div>
                       </div>
                     ))}
                     {/* Mocking more items to fill list */}
                     {Array.from({ length: 10 }).map((_, i) => (
                        <div key={`mock-${i}`} className="p-3 flex gap-3 opacity-50 pointer-events-none">
                           <div className="w-24 h-16 bg-gray-200 rounded"></div>
                           <div className="flex-grow space-y-2">
                              <div className="h-4 bg-gray-200 rounded w-full"></div>
                              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                           </div>
                        </div>
                     ))}
                  </div>
                  
                  <div className="p-4 border-t border-gray-200 bg-gray-50 text-center">
                     <a 
                       href="https://www.youtube.com" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-sm text-jimu-blue font-medium hover:underline flex items-center justify-center gap-1"
                     >
                       前往 YouTube 观看更多 <ExternalLink size={14} />
                     </a>
                  </div>
               </div>
            </div>

         </div>
       </div>
    </div>
  );
};