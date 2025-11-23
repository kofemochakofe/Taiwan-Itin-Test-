import React, { useState } from 'react';
import { MapPin, Calendar, ExternalLink, Menu, X, ChevronRight } from 'lucide-react';
import { ITINERARY_DATA } from './constants';
import { MapView } from './components/MapView';
import { GeminiCard } from './components/GeminiCard';
import { Location } from './types';

const App: React.FC = () => {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const currentItinerary = ITINERARY_DATA.find(d => d.day === activeDay) || ITINERARY_DATA[0];

  const handleLocationSelect = (loc: Location) => {
    setSelectedLocation(loc);
    if (window.innerWidth < 768) {
        setSidebarOpen(false); // Close sidebar on mobile when selected
    }
  };

  return (
    <div className="flex h-screen flex-col md:flex-row bg-white">
      {/* Header / Mobile Nav */}
      <div className="md:hidden h-16 bg-white border-b flex items-center justify-between px-4 z-30">
         <div className="flex items-center gap-2 font-bold text-lg text-indigo-700">
            <MapPin className="w-5 h-5" />
            <span>Taiwan Trax</span>
         </div>
         <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-gray-100 rounded-full">
           {sidebarOpen ? <X /> : <Menu />}
         </button>
      </div>

      {/* Sidebar */}
      <div className={`
        fixed md:relative z-20 h-[calc(100vh-64px)] md:h-screen w-full md:w-96 bg-white border-r shadow-xl md:shadow-none transition-transform duration-300 ease-in-out flex flex-col
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        
        {/* Desktop Logo */}
        <div className="hidden md:flex items-center gap-2 p-6 border-b border-gray-100">
             <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
               <MapPin className="w-5 h-5" />
             </div>
             <h1 className="font-bold text-xl text-gray-800 tracking-tight">Taiwan Trax</h1>
        </div>

        {/* Day Selector */}
        <div className="p-4 border-b border-gray-100">
          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block">Select Day</label>
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {ITINERARY_DATA.map(d => (
              <button
                key={d.day}
                onClick={() => {
                    setActiveDay(d.day);
                    setSelectedLocation(null);
                }}
                className={`
                  flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border
                  ${activeDay === d.day 
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-200' 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'}
                `}
              >
                Day {d.day}
              </button>
            ))}
          </div>
        </div>

        {/* Itinerary List */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-3">
            {currentItinerary.locations.map((loc, index) => (
              <div 
                key={loc.id}
                onClick={() => handleLocationSelect(loc)}
                className={`
                  group flex items-start p-3 rounded-xl cursor-pointer border transition-all duration-200
                  ${selectedLocation?.id === loc.id 
                    ? 'border-indigo-500 bg-indigo-50 shadow-sm' 
                    : 'border-gray-100 hover:border-indigo-200 hover:bg-gray-50'}
                `}
              >
                 <div className={`
                   w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0
                   ${selectedLocation?.id === loc.id ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500 group-hover:bg-indigo-200 group-hover:text-indigo-700'}
                 `}>
                   {index + 1}
                 </div>
                 <div className="flex-1 min-w-0">
                   <h3 className={`text-sm font-semibold truncate ${selectedLocation?.id === loc.id ? 'text-indigo-900' : 'text-gray-800'}`}>
                     {loc.name}
                   </h3>
                   <div className="flex items-center mt-1 gap-3">
                      <a 
                        href={loc.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs text-gray-400 hover:text-indigo-600 flex items-center gap-1 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" /> Map Link
                      </a>
                      {selectedLocation?.id === loc.id && (
                          <span className="text-xs text-indigo-600 font-medium animate-pulse">
                            Asking Gemini...
                          </span>
                      )}
                   </div>
                 </div>
                 <ChevronRight className={`w-4 h-4 text-gray-300 transition-transform ${selectedLocation?.id === loc.id ? 'rotate-90 text-indigo-400' : ''}`} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t bg-gray-50 text-xs text-gray-500 text-center">
          {currentItinerary.locations.length} stops planned for Day {activeDay}
        </div>
      </div>

      {/* Map Area */}
      <div className="flex-1 h-[calc(100vh-64px)] md:h-auto relative bg-gray-100">
         <MapView 
            locations={currentItinerary.locations} 
            selectedLocationId={selectedLocation?.id || null}
            onMarkerClick={handleLocationSelect}
         />
         
         {/* Floating Gemini Card */}
         <GeminiCard 
            location={selectedLocation} 
            onClose={() => setSelectedLocation(null)} 
         />
      </div>
    </div>
  );
};

export default App;