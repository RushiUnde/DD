// src/App.tsx
import React, { useEffect, useState } from 'react';
import { DeveloperActivity } from './types';
import sampleData from './data/sample-data.json';
import ActivityChart from './components/ActivityChart';
import ActivityFilter from './components/ActivityFilter';

const App: React.FC = () => {
  const [data, setData] = useState<DeveloperActivity[]>([]);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    setData(sampleData.data.AuthorWorklog.rows)
  }, []);

  const getWeeklyData = (developerActivity: DeveloperActivity) => {
    if (filter === 'all') {
      return developerActivity.dayWiseActivity;
    } else {
      return developerActivity.dayWiseActivity.map(day => ({
        ...day,
        items: {
          children: day.items.children.filter(item => item.label === filter),
        },
      }));
    }
  };

  const handleFilterChange = (filter: string) => {
    setFilter(filter);
  };

  return (
    <div className="App">

      <div className='flex items-center justify-center my-8 w-full text-center text-3xl'>
        <h1 className='border py-1 px-2 rounded-md'>Activity Dashboard</h1>
      </div>

      <div className='my-4 flex items-center justify-center'>
        <ActivityFilter onFilterChange={handleFilterChange} />
      </div>
      <div className='flex flex-col gap-4 mb-8'>
        {data.map(developer => (
          <div key={developer.name} className='flex w-full px-16'>
            <h2 className='w-[30%] flex justify-center flex-col gap-1 text-lg'>
              <p>
                Developer Name: 
              </p>
              <p className='font-semibold'>
                {developer.name}
              </p>
            </h2>
            <div className='w-[70%]'>
              <ActivityChart data={getWeeklyData(developer)} />
            </div>
            <hr />
          </div>
        ))}
      </div>

    </div>
  );
};

export default App;
