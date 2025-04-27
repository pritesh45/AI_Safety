import React, { useState } from 'react';

const IncidentForm = ({ onSubmit }) => {
  const [newIncident, setNewIncident] = useState({
    title: "",
    description: "",
    severity: "Medium"
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewIncident(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!newIncident.title.trim() || !newIncident.description.trim()) {
      alert("Please fill in all fields");
      return;
    }
    
    // Pass the new incident to parent component
    onSubmit(newIncident);
    
    // Reset form
    setNewIncident({
      title: "",
      description: "",
      severity: "Medium"
    });
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-200">
      <h2 className="text-xl font-semibold mb-4">Report New AI Safety Incident</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Incident Title</label>
            <input
              type="text"
              name="title"
              value={newIncident.title}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter incident title"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Severity Level</label>
            <select
              name="severity"
              value={newIncident.severity}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          
          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Incident Description</label>
            <textarea
              name="description"
              value={newIncident.description}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2 h-24"
              placeholder="Describe the incident in detail..."
              required
            />
          </div>
        </div>
        
        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Submit Incident Report
          </button>
        </div>
      </form>
    </div>
  );
};

export default IncidentForm;