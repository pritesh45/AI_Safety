import React from 'react';
import { Filter, Calendar } from 'lucide-react';

const FilterControls = ({ 
  severityFilter, 
  setSeverityFilter, 
  sortOrder, 
  setSortOrder 
}) => {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg">
        <Filter size={18} className="text-gray-500" />
        <span className="text-sm font-medium text-gray-700">Filter by Severity:</span>
        <select 
          value={severityFilter}
          onChange={(e) => setSeverityFilter(e.target.value)}
          className="bg-white border border-gray-300 rounded-md py-1 px-3 text-sm"
        >
          <option value="All">All Severities</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      
      <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg">
        <Calendar size={18} className="text-gray-500" />
        <span className="text-sm font-medium text-gray-700">Sort by Date:</span>
        <select 
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="bg-white border border-gray-300 rounded-md py-1 px-3 text-sm"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>
    </div>
  );
};

export default FilterControls;