// src/components/ActivityChart.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { DayWiseActivity } from '../types';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface ActivityChartProps {
  data: DayWiseActivity[];
}

const ActivityChart: React.FC<ActivityChartProps> = ({ data }) => {
  const labels = data.map(day => day.date);
  const activities = data.reduce((acc, day) => {
    day.items.children.forEach(item => {
      if (!acc[item.label]) {
        acc[item.label] = [];
      }
      acc[item.label].push({ x: day.date, y: parseInt(item.count, 10) });
    });
    return acc;
  }, {} as Record<string, { x: string, y: number }[]>);

  const colors = [
    'rgba(75,192,192,1)',
    'rgba(153,102,255,1)',
    'rgba(255,159,64,1)',
    'rgba(255,99,132,1)',
    'rgba(54,162,235,1)',
    'rgba(255,206,86,1)',
    'rgba(75,192,192,1)'
  ];

  const backgroundColors = colors.map(color => color.replace('1)', '0.2)'));

  const datasets = Object.keys(activities).map((key, index) => ({
    label: key,
    data: activities[key],
    borderColor: colors[index % colors.length],
    backgroundColor: backgroundColors[index % backgroundColors.length],
    fill: true,
  }));

  const chartData = {
    labels,
    datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Developer Activity Over the Week',
      },
    },
    scales: {
      x: {
        type: 'category' as const,
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Activity Count',
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default ActivityChart;
