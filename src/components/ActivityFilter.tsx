// src/components/ActivityFilter.tsx
import React from 'react';

interface ActivityFilterProps {
  onFilterChange: (filter: string) => void;
}

const ActivityFilter: React.FC<ActivityFilterProps> = ({ onFilterChange }) => {
  return (
    <div>
      <label htmlFor="activity-filter">
        Filter by Activity: 
      </label>
      <select 
        id="activity-filter" 
        onChange={(e) => onFilterChange(e.target.value)}
        className='border rounded-md ml-2'  
      >
        <option value="all">All</option>
        <option value="PR Open">PR Open</option>
        <option value="PR Merged">PR Merged</option>
        <option value="Commits">Commits</option>
        <option value="PR Reviewed">PR Reviewed</option>
        <option value="PR Comments">PR Comments</option>
        <option value="Incident Alerts">Incident Alerts</option>
        <option value="Incidents Resolved">Incidents Resolved</option>
      </select>
    </div>
  );
};

export default ActivityFilter;
