import React from 'react';

interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: any }[];
  label?: string;
}

export default function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: '#8884d8', color: 'white', border: '1px solid #999', margin: 10, padding: 10 }}>
        <p>{`${label}: ${payload[0].value}%`}</p>
      </div>
    );
  }

  return null;
}
