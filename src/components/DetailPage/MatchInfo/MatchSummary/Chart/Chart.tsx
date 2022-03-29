import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { ISummary } from '@/models';

export const Chart:React.FC<{ data: ISummary }> = (props) => {
  const { data } = props;
  const totalGames = data.wins + data.losses;
  const winRate = ((data.wins / (totalGames)) * 100).toFixed(0);

  const chartData = [{
    value: data.losses,
    color: '#ee5a52',
    name: 'losses',
  }, {
    value: data.wins,
    color: '#1f8ecd',
    name: 'wins',
  }];
  return (
    <PieChart
      data={chartData}
      lineWidth={26}
      lengthAngle={360}
      startAngle={270}
      label={() => `${winRate}%`}
      labelPosition={0}
      labelStyle={{
        fontSize: '14px',
        fontFamily: 'Helvetica',
        fill: '#555',
      }}
    />
  );
};
