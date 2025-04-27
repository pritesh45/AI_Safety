import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { initialIncidents } from '../data/mockIncidents';
import FilterControls from './FilterControls';
import IncidentForm from './IncidentForm';
import IncidentCard from './IncidentCard';

const AISafetyDashboard = () => {
  const [incidents, setIncidents] = useState(initialIncidents);
  const [severityFilter, setSeverityFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");
  const [showForm, setShowForm] = useState(false);
  
  // Filter incidents by severity
  const filteredIncidents = incidents.filter(incident => 
    severityFilter === "All" || incident.severity === severityFilter
  );
  
  // Sort incidents by date
  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    const dateA = new Date(a.reported_at);
    const dateB = new Date(b.reported_at);
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  });
  
  // Handle new incident submission
  const handleNewIncident = (newIncident) => {
    const incident = {
      id: incidents.length + 1,
      title: newIncident.title,
      description: newIncident.description,
      severity: newIncident.severity,
      reported_at: new Date().toISOString()
    };
    
    setIncidents([incident, ...incidents]);
    setShowForm(false);
  };
  
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">AI Safety Incident Dashboard</h1>
        <p className="text-gray-600">Monitor and report AI safety incidents across your organization</p>
      </header>
      
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
        <FilterControls 
          severityFilter={severityFilter}
          setSeverityFilter={setSeverityFilter}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
        
        <button 
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Plus size={18} />
          {showForm ? "Cancel" : "Report New Incident"}
        </button>
      </div>
      
      {showForm && <IncidentForm onSubmit={handleNewIncident} />}
      
      <div className="space-y-4">
        {sortedIncidents.length > 0 ? (
          sortedIncidents.map(incident => (
            <IncidentCard key={incident.id} incident={incident} />
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            No incidents match the current filters
          </div>
        )}
      </div>
      
      <div className="mt-6 text-sm text-gray-500 text-right">
        Total incidents: {sortedIncidents.length} 
        {severityFilter !== "All" && ` (filtered from ${incidents.length})`}
      </div>
    </div>
  );
};

export default AISafetyDashboard;