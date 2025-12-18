"use client";

import { useState } from 'react';

interface ChartDataPoint {
  timestamp: string;
  value: number;
  label: string;
}

interface AssetChartProps {
  data: ChartDataPoint[];
  isPositive: boolean;
  height?: number;
}

export function AssetChart({ data, isPositive, height = 160 }: AssetChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-40 text-zinc-500">
        No chart data available
      </div>
    );
  }

  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));
  const range = maxValue - minValue || 1;

  return (
    <div className="relative">
      {/* Hovered value display */}
      {hoveredIndex !== null && (
        <div className="absolute top-0 left-0 right-0 flex justify-between items-center mb-2">
          <div>
            <p className="text-xs text-zinc-400">{data[hoveredIndex].label}</p>
            <p className="text-lg font-semibold">
              ${data[hoveredIndex].value.toLocaleString('en-US', { 
                minimumFractionDigits: 2,
                maximumFractionDigits: 2 
              })}
            </p>
          </div>
        </div>
      )}

      {/* Chart */}
      <div 
        className="flex items-end gap-1 mt-12"
        style={{ height: `${height}px` }}
      >
        {data.map((point, i) => {
          const heightPercent = ((point.value - minValue) / range) * 100;
          const isHovered = hoveredIndex === i;
          
          return (
            <div
              key={i}
              className="flex-1 relative group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Bar */}
              <div
                className={`w-full rounded-t-sm transition-all duration-200 ${
                  isPositive
                    ? 'bg-gradient-to-t from-emerald-600 to-emerald-400'
                    : 'bg-gradient-to-t from-red-600 to-red-400'
                } ${isHovered ? 'opacity-100 scale-x-110' : 'opacity-70'}`}
                style={{ height: `${Math.max(heightPercent, 5)}%` }}
              />
              
              {/* Hover tooltip */}
              {isHovered && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-zinc-900 border border-zinc-700 rounded text-xs whitespace-nowrap z-10">
                  ${point.value.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* X-axis labels */}
      <div className="flex justify-between mt-2 px-1">
        <span className="text-xs text-zinc-500">{data[0].label}</span>
        <span className="text-xs text-zinc-500">{data[Math.floor(data.length / 2)].label}</span>
        <span className="text-xs text-zinc-500">{data[data.length - 1].label}</span>
      </div>
    </div>
  );
}
