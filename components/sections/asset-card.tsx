"use client";

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface AssetCardProps {
  symbol: string;
  name: string;
  balance: number;
  value: number;
  change24h: number;
  icon?: string;
  type: 'crypto' | 'fiat';
  onClick?: () => void;
}

export function AssetCard({
  symbol,
  name,
  balance,
  value,
  change24h,
  icon,
  type,
  onClick
}: AssetCardProps) {
  const isPositive = change24h >= 0;

  return (
    <Card 
      hover 
      className="cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Icon/Avatar */}
          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${
            type === 'crypto' 
              ? 'bg-gradient-to-br from-blue-600 to-blue-400' 
              : 'bg-gradient-to-br from-amber-600 to-amber-400'
          }`}>
            {icon || symbol.substring(0, 2)}
          </div>
          
          {/* Asset info */}
          <div>
            <h3 className="font-semibold text-lg">{symbol}</h3>
            <p className="text-sm text-zinc-400">{name}</p>
          </div>
        </div>

        {/* Change badge */}
        <Badge variant={isPositive ? 'success' : 'error'}>
          {isPositive ? '+' : ''}{change24h.toFixed(2)}%
        </Badge>
      </div>

      {/* Balance */}
      <div className="mb-3">
        <p className="text-sm text-zinc-400 mb-1">Balance</p>
        <p className="text-2xl font-bold">
          {type === 'crypto' 
            ? balance.toFixed(balance < 1 ? 6 : 4)
            : balance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })
          } {symbol}
        </p>
      </div>

      {/* Value */}
      <div className="flex items-center justify-between pt-3 border-t border-zinc-800">
        <span className="text-sm text-zinc-400">Value</span>
        <span className="font-semibold">
          ${value.toLocaleString('en-US', { 
            minimumFractionDigits: 2,
            maximumFractionDigits: 2 
          })}
        </span>
      </div>

      {/* Mini chart indicator */}
      <div className="mt-3 flex gap-1 h-8">
        {[...Array(12)].map((_, i) => {
          const height = 30 + Math.sin(i * 0.8 + (isPositive ? 0 : Math.PI)) * 20;
          return (
            <div
              key={i}
              className={`flex-1 rounded-t transition-all ${
                isPositive ? 'bg-emerald-600/30' : 'bg-red-600/30'
              }`}
              style={{ height: `${Math.max(height, 10)}%` }}
            />
          );
        })}
      </div>
    </Card>
  );
}
