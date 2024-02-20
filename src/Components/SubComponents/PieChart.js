import React from 'react';

const PieChart = () => {
  const data = [
    { name: 'Category 1', value: 30 },
    { name: 'Category 2', value: 60 },
    { name: 'Category 3', value: 10 }
  ];

  // Calculate total value
  const total = data.reduce((acc, cur) => acc + cur.value, 0);

  // Calculate angles for each segment
  let startAngle = 0;
  const segments = data.map((d, i) => {
    const angle = (d.value / total) * 360;
    const endAngle = startAngle + angle;
    const largeArcFlag = angle > 180 ? 1 : 0;

    // Calculate segment path
    const startX = Math.cos((startAngle * Math.PI) / 180) * 50 + 50;
    const startY = Math.sin((startAngle * Math.PI) / 180) * 50 + 50;
    const endX = Math.cos((endAngle * Math.PI) / 180) * 50 + 50;
    const endY = Math.sin((endAngle * Math.PI) / 180) * 50 + 50;

    const path = `M 50 50 L ${startX} ${startY} A 50 50 0 ${largeArcFlag} 1 ${endX} ${endY} Z`;

    startAngle = endAngle;

    const colors = ['#219BAF', '#FF9900', '#0F4865'];

    return <path key={i} d={path} fill={colors[i]} />;
  });

  return (
    <svg width="15rem" height="15rem" viewBox="0 0 100 100">
      {segments}
    </svg>
  );
};

export default PieChart;
