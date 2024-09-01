// src/components/PieChart.tsx
import React from 'react';
import { Pie } from '@ant-design/charts';

interface PieChartProps {}

const PieChart: React.FC<PieChartProps> = () => {
  const data = [
    { type: 'Category A', value: 27 },
    { type: 'Category B', value: 25 },
    { type: 'Category C', value: 18 },
    { type: 'Category D', value: 30 },
  ];

  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    interactions: [{ type: 'element-active' }],
    label: {
      type: 'outer',
      content: '{name}\n{percentage}',
    },
  };

  return <Pie {...config} />;
};

export default PieChart;
