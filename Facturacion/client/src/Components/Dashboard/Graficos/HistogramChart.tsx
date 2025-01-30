// src/components/HistogramChart.tsx
import React from 'react';
import { Histogram } from '@ant-design/charts';

interface HistogramChartProps {}

const HistogramChart: React.FC<HistogramChartProps> = () => {
  const data = [
    { value: 1 },
    { value: 2 },
    { value: 2 },
    { value: 3 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
  ];

  // Función para asignar colores a los bins
  const getColor = (value: number) => {
    if (value <= 2) return '#ff4d4f'; // Color para valores <= 2
    if (value <= 3) return '#52c41a'; // Color para valores <= 3
    if (value <= 4) return '#1890ff'; // Color para valores <= 4
    return '#faad14'; // Color para valores > 4
  };

  const config = {
    data,
    xField: 'value',
    yField: 'count',
    binField: 'value',
    binWidth: 1,
    color: (datum: any) => getColor(datum.value), // Asignar color basado en el valor
  };

  return <Histogram {...config} />;
};

export default HistogramChart;
