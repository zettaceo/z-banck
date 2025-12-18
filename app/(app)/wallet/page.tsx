"use client";

import { useSearchParams } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AssetChart } from '@/components/sections/asset-chart';
import { 
  mockBalances, 
  mockTransactions,
  btcChartData,
  ethChartData,
  usdtChartData
} from '@/lib/mock-data';

export default function CryptoDetailPage() {
  const searchParams = useSearchParams();
  const assetSymbol = searchParams.get('asset') || 'BTC';
  
  const asset = mockBalances.crypto[assetSymbol as keyof typeof mockBalances.crypto];
  
  if (!asset) {
    return <div className="p-8">Asset not found</div>;
  }

  const chartData = assetSymbol === 'BTC' ? btcChartData : 
                    assetSymbol === 'ETH' ? ethChartData : 
                    usdtChartData;

  const assetTransactions = mockTransactions.filter(tx => 
    tx.currency === assetSymbol || tx.currencyFrom === assetSymbol || tx.currencyTo === assetSymbol
  );

  const isPositive = asset.change24h >= 0;

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button 
          onClick={() => window.history.back()}
          className="w-10 h-10 rounded-lg glass glass-hover flex items-center justify-center"
        >
          ←
        </button>
        <div>
          <h1 className="text-2xl font-bold">{asset.name}</h1>
          <p className="text-zinc-400">{asset.symbol}</p>
        </div>
      </div>

      {/* Price Card */}
      <Card className="mb-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <p className="text-zinc-400 text-sm mb-2">Current Price</p>
            <h2 className="text-4xl font-bold mb-2">
              ${asset.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </h2>
            <div className="flex items-center gap-2">
              <Badge variant={isPositive ? 'success' : 'error'}>
                {isPositive ? '+' : ''}{asset.change24h.toFixed(2)}%
              </Badge>
              <span className="text-zinc-500 text-sm">24h change</span>
            </div>
          </div>

          <div className="flex gap-4">
            <div>
              <p className="text-zinc-400 text-sm mb-1">Your Balance</p>
              <p className="text-2xl font-bold">{asset.balance.toFixed(6)}</p>
              <p className="text-sm text-zinc-500">{asset.symbol}</p>
            </div>
            <div>
              <p className="text-zinc-400 text-sm mb-1">Value</p>
              <p className="text-2xl font-bold text-blue-400">
                ${asset.valueUSD?.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </p>
              <p className="text-sm text-zinc-500">USD</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Chart */}
      <Card className="mb-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Price History (30D)</h3>
          <div className="flex gap-2">
            {['24H', '7D', '30D', '1Y'].map((period) => (
              <button
                key={period}
                className={`px-3 py-1 rounded-lg text-sm ${
                  period === '30D'
                    ? 'bg-blue-600 text-white'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
        <AssetChart data={chartData} isPositive={isPositive} height={200} />
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Button variant="primary" className="w-full">
          Send {asset.symbol}
        </Button>
        <Button variant="secondary" className="w-full">
          Receive
        </Button>
        <Button variant="secondary" className="w-full">
          Swap
        </Button>
        <Button variant="secondary" className="w-full">
          Buy More
        </Button>
      </div>

      {/* Asset Info */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <Card>
          <h3 className="font-semibold mb-4">Asset Information</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-zinc-400">Network</span>
              <span className="font-medium">
                {assetSymbol === 'BTC' ? 'Bitcoin' : 
                 assetSymbol === 'ETH' ? 'Ethereum' : 
                 'Ethereum (ERC-20)'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">Available</span>
              <span className="font-medium text-emerald-400">{asset.available.toFixed(6)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">Locked</span>
              <span className="font-medium">0.000000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">24h Volume</span>
              <span className="font-medium">$2.4B</span>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold mb-4">Market Stats</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-zinc-400">Market Cap</span>
              <span className="font-medium">
                {assetSymbol === 'BTC' ? '$1.9T' : 
                 assetSymbol === 'ETH' ? '$455B' : 
                 '$124B'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">24h High</span>
              <span className="font-medium text-emerald-400">
                ${(asset.price * 1.03).toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">24h Low</span>
              <span className="font-medium text-red-400">
                ${(asset.price * 0.97).toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">Rank</span>
              <span className="font-medium">
                #{assetSymbol === 'BTC' ? '1' : assetSymbol === 'ETH' ? '2' : '3'}
              </span>
            </div>
          </div>
        </Card>
      </div>

      {/* Transaction History */}
      <Card>
        <h3 className="font-semibold mb-4">Recent Transactions</h3>
        {assetTransactions.length > 0 ? (
          <div className="space-y-1">
            {assetTransactions.map((tx, i) => (
              <div
                key={tx.id}
                className={`flex items-center justify-between p-4 rounded-lg hover:bg-zinc-800/50 transition-all ${
                  i !== 0 ? 'border-t border-zinc-800' : ''
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    tx.type === 'receive' ? 'bg-emerald-500/20 text-emerald-400' :
                    tx.type === 'send' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-amber-500/20 text-amber-400'
                  }`}>
                    {tx.type === 'receive' ? '↓' : tx.type === 'send' ? '↑' : '⇄'}
                  </div>
                  <div>
                    <p className="font-medium">{tx.description}</p>
                    <p className="text-sm text-zinc-400">
                      {new Date(tx.timestamp).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${
                    tx.type === 'receive' ? 'text-emerald-400' : 'text-white'
                  }`}>
                    {tx.type === 'receive' ? '+' : '-'}
                    {(tx.amount || tx.amountFrom || 0).toFixed(6)} {asset.symbol}
                  </p>
                  <Badge variant="success" className="text-xs mt-1">
                    Completed
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-zinc-500">
            No transactions yet
          </div>
        )}
      </Card>

      <div className="h-24 md:h-8" />
    </div>
  );
}
