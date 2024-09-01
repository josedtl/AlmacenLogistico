// src/components/ScatterChart.tsx
import React from 'react';
import { Scatter } from '@ant-design/charts';

interface ScatterChartProps {}

const ScatterChart: React.FC<ScatterChartProps> = () => {
  const data = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 7 },
    { x: 5, y: 8 },
  ];

  const config = {
    data,
    xField: 'x',
    yField: 'y',
    pointSize: 5,
    color: '#1890ff',
    shape: 'circle',
  };

  return <Scatter {...config} />;
};

export default ScatterChart;
