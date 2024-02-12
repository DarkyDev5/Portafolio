"use client"
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';


const data  = [
  { subject: 'JavaScript', A: 85, fullMark: 100 },
  { subject: 'React', A: 80, fullMark: 100 },
  { subject: 'Next.js', A: 75, fullMark: 100 },
  { subject: 'Node.js', A: 70, fullMark: 100 },
  { subject: 'Express', A: 65, fullMark: 100 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: any }[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: '#8884d8', color: 'white', border: '1px solid #999', margin: 10, padding: 10 }}>
        <p>{`${label}: ${payload[0].value}%`}</p>
      </div>
    );
  }

  return null;
};

export default function App() {
  return (
    <div className="flex flex-col items-center bg-white-200 p-4">
      <h2 className="text-4xl font-bold text-blue-600 mb-4">Mis habilidades</h2>
      <div className="bg-white shadow-lg rounded p-4">
        <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" stroke="#8884d8" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Tooltip content={<CustomTooltip />} />
          <Radar name="Nivel de habilidad" dataKey="A" stroke="#8884d8" fill="url(#colorUv)" fillOpacity={0.6} />
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
          </defs>
        </RadarChart>
      </div>
    </div>
  );
}