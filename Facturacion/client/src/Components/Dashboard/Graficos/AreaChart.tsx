// src/components/AreaChart.tsx
import React from 'react';
import { Area } from '@ant-design/charts';

interface AreaChartProps {}

const AreaChart: React.FC<AreaChartProps> = () => {
  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
  ];

  const config = {
    data,
    xField: 'year',
    yField: 'value',
    smooth: true,
    areaStyle: () => ({
      fill: '#5B8FF9',  // Color del área del gráfico
      opacity: 0.3,
    }),
    color: '#5B8FF9',  // Color de la línea del gráfico
  };

  return <Area {...config} />;
};

export default AreaChart;
