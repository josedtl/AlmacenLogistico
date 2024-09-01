// src/components/LineChart.tsx
import React from 'react';
import { Line } from '@ant-design/charts';

// interface LineChartProps {}

const LineChart = () => {
  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
];

const config = {
    data,
    height: 400,
    xField: 'year',
    yField: 'value',
    point: {
        size: 5,
        shape: 'diamond',
    },
};


  return <Line {...config} />;
};

export default LineChart;
