import React, { useState } from 'react';
import { AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';
import SeverityBadge from './SeverityBadge';
import { formatDate } from '../utils/dateFormatter';

const IncidentCard = ({ incident }) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white gap-4">
        <div className="flex-grow">
          <div className="flex items-start gap-3">
            <AlertTriangle 
              size={20} 
              className={`mt-1 ${
                incident.severity === "High" ? "text-red-500" : 
                incident.severity === "Medium" ? "text-yellow-500" : "text-blue-500"
              }`} 
            />
            <div>
              <h3 className="font-medium text-lg text-gray-900">{incident.title}</h3>
              <div className="flex flex-wrap gap-3 mt-1 items-center text-sm text-gray-500">
                <SeverityBadge severity={incident.severity} />
                <span>Reported: {formatDate(incident.reported_at)}</span>
              </div>
            </div>
          </div>
        </div>
        
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
        >
          {expanded ? (
            <>Hide Details <ChevronUp size={16} /></>
          ) : (
            <>View Details <ChevronDown size={16} /></>
          )}
        </button>
      </div>
      
      {expanded && (
        <div className="p-4 bg-gray-50 border-t border-gray-100">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Description:</h4>
          <p className="text-gray-600">{incident.description}</p>
        </div>
      )}
    </div>
  );
};

export default IncidentCard;