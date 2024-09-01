// src/components/BarChart.tsx
import React from 'react';
import { Bar } from '@ant-design/charts';

interface BarChartProps {}

const BarChart: React.FC<BarChartProps> = () => {
  const data = [
    { type: 'Category A', value: 30 },
    { type: 'Category B', value: 70 },
    { type: 'Category C', value: 45 },
    { type: 'Category D', value: 60 },
  ];

  // Función para asignar colores a las barras
  const getColor = (type: string) => {
    switch (type) {
      case 'Category A':
        return '#ff4d4f'; // Color para Category A
      case 'Category B':
        return '#52c41a'; // Color para Category B
      case 'Category C':
        return '#1890ff'; // Color para Category C
      case 'Category D':
        return '#faad14'; // Color para Category D
      default:
        return '#ccc'; // Color por defecto
    }
  };

  const config = {
    data,
    xField: 'type',
    yField: 'value',
    seriesField: 'type',
    color: (datum: any) => getColor(datum.type), // Asignar color basado en el tipo
    label: {
      position: 'middle',
      layout: [
        { type: 'interval-adjust-position' },
        { type: 'adjust-color' },
      ],
    },
  };

  return <Bar {...config} />;
};

export default BarChart;
