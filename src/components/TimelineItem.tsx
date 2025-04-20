import React, { useRef, useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { TimelineItem as TimelineItemType } from '../data/evolutionData';

interface TimelineItemProps {
  item: TimelineItemType;
  isActive: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, isActive }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  
  const showTooltip = () => setTooltipVisible(true);
  const hideTooltip = () => setTooltipVisible(false);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setTooltipVisible(!tooltipVisible);
    }
  };

  return (
    <div 
      className={`timeline-item ${isActive ? 'active' : ''} flex flex-col min-w-[300px] max-w-[350px] relative`}
    >
      {/* Year marker and dot */}
      <div className="flex items-center mb-4">
        <div className={`w-4 h-4 rounded-full ${item.importance === 'major' ? 'bg-amber-500' : 'bg-stone-400'}`}></div>
        <div className="h-px w-12 bg-stone-300"></div>
        <span className="text-sm font-medium">{item.year}</span>
      </div>
      
      {/* Image */}
      <div 
        className="aspect-video w-full mb-4 rounded-lg overflow-hidden"
      >
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      
      {/* Content */}
      <div className="space-y-2">
        <h3 className="text-xl font-medium">{item.title}</h3>
        <p className="text-stone-600 text-sm line-clamp-3">{item.description}</p>
        
        {/* Info button and tooltip */}
        <div className="relative">
          <button
            className="flex items-center text-amber-600 text-sm font-medium mt-2 hover:text-amber-700"
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
            onFocus={showTooltip}
            onBlur={hideTooltip}
            onClick={() => setTooltipVisible(!tooltipVisible)}
            onKeyDown={handleKeyPress}
            aria-describedby={`tooltip-${item.id}`}
          >
            <AlertCircle className="w-4 h-4 mr-1" />
            Learn More
          </button>
          
          <div 
            ref={tooltipRef}
            id={`tooltip-${item.id}`}
            className={`tooltip ${tooltipVisible ? 'visible' : ''}`}
            role="tooltip"
          >
            <h4 className="font-medium mb-2">{item.title}</h4>
            <p className="text-stone-600">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;