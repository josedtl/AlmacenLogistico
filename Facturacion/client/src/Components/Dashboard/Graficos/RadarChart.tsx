// src/components/RadarChart.tsx
import React from 'react';
import { Radar } from '@ant-design/charts';

interface RadarChartProps {}

const RadarChart: React.FC<RadarChartProps> = () => {
  const data = [
    { name: 'Metric A', value: 100 },
    { name: 'Metric B', value: 80 },
    { name: 'Metric C', value: 70 },
    { name: 'Metric D', value: 60 },
    { name: 'Metric E', value: 90 },
  ];

  const config = {
    data,
    xField: 'name',
    yField: 'value',
    radar: {
      shape: 'circle',
      radius: 0.8,
    },
    xAxis: {
      grid: {
        line: { type: 'line', style: { stroke: '#e0e0e0' } },
      },
    },
    yAxis: {
      grid: {
        line: { type: 'line', style: { stroke: '#e0e0e0' } },
      },
    },
    seriesField: 'name',
    color: '#1890ff',
  };

  return <Radar {...config} />;
};

export default RadarChart;
