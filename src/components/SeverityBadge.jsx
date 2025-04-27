import React from 'react';

const SeverityBadge = ({ severity }) => {
  const badgeClasses = {
    Low: "bg-blue-100 text-blue-800",
    Medium: "bg-yellow-100 text-yellow-800",
    High: "bg-red-100 text-red-800"
  };
  
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${badgeClasses[severity]}`}>
      {severity}
    </span>
  );
};

export default SeverityBadge;