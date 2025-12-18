"use client";

import { useSearchParams } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AssetChart } from '@/components/sections/asset-chart';
import { 
  mockBalances, 
  mockTransactions,
  brlChartData,
  usdChartData
} from '@/lib/mock-data';

export default function FiatDetailPage() {
  const searchParams = useSearchParams();
  const assetSymbol = searchParams.get('asset') || 'BRL';
  
  const asset = mockBalances.fiat[assetSymbol as keyof typeof mockBalances.fiat];
  
  if (!asset) {
    return <div className="p-8">Currency not found</div>;
  }

  const chartData = assetSymbol === 'BRL' ? brlChartData : usdChartData;

  const assetTransactions = mockTransactions.filter(tx => 
    tx.currency === assetSymbol
  );

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

      {/* Balance Card */}
      <Card className="mb-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <p className="text-zinc-400 text-sm mb-2">Available Balance</p>
            <h2 className="text-4xl font-bold mb-2">
              {assetSymbol === 'BRL' ? 'R$' : '$'} {asset.balance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </h2>
            <div className="flex items-center gap-2">
              <Badge variant="default">
                Instant Transfer
              </Badge>
            </div>
          </div>

          <div className="flex gap-4">
            <div>
              <p className="text-zinc-400 text-sm mb-1">Available</p>
              <p className="text-2xl font-bold text-emerald-400">
                {assetSymbol === 'BRL' ? 'R$' : '$'} {asset.available.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
            </div>
            <div>
              <p className="text-zinc-400 text-sm mb-1">Locked</p>
              <p className="text-2xl font-bold text-zinc-500">
                {assetSymbol === 'BRL' ? 'R$' : '$'} 0.00
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Chart */}
      <Card className="mb-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Balance History</h3>
          <div className="flex gap-2">
            {['7D', '30D', '90D', '1Y'].map((period) => (
              <button
                key={period}
                className={`px-3 py-1 rounded-lg text-sm ${
                  period === '30D'
                    ? 'bg-amber-600 text-white'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
        <AssetChart data={chartData} isPositive={true} height={200} />
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Button variant="primary" className="w-full">
          {assetSymbol === 'BRL' ? 'PIX Transfer' : 'Wire Transfer'}
        </Button>
        <Button variant="secondary" className="w-full">
          Receive
        </Button>
        <Button variant="secondary" className="w-full">
          Swap to Crypto
        </Button>
        <Button variant="secondary" className="w-full">
          Add Funds
        </Button>
      </div>

      {/* Currency Info */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <Card>
          <h3 className="font-semibold mb-4">Account Information</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-zinc-400">Currency</span>
              <span className="font-medium">{asset.symbol}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">Account Type</span>
              <span className="font-medium">Digital Account</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">Status</span>
              <Badge variant="success">Active</Badge>
            </div>
            {assetSymbol === 'BRL' && (
              <div className="flex justify-between">
                <span className="text-zinc-400">PIX Key</span>
                <span className="font-medium text-xs">marcus@zetta.finance</span>
              </div>
            )}
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold mb-4">Transfer Limits</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-zinc-400">Daily Limit</span>
              <span className="font-medium">
                {assetSymbol === 'BRL' ? 'R$' : '$'} 50,000.00
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">Used Today</span>
              <span className="font-medium text-blue-400">
                {assetSymbol === 'BRL' ? 'R$' : '$'} 3,350.50
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">Remaining</span>
              <span className="font-medium text-emerald-400">
                {assetSymbol === 'BRL' ? 'R$' : '$'} 46,649.50
              </span>
            </div>
            <div className="mt-4">
              <div className="w-full bg-zinc-800 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-600 to-blue-400 h-2 rounded-full" style={{ width: '6.7%' }} />
              </div>
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
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {tx.type === 'receive' ? '↓' : '↑'}
                  </div>
                  <div>
                    <p className="font-medium">{tx.description}</p>
                    <p className="text-sm text-zinc-400">
                      {new Date(tx.timestamp).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })} • {tx.method}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${
                    tx.type === 'receive' ? 'text-emerald-400' : 'text-white'
                  }`}>
                    {tx.type === 'receive' ? '+' : '-'}
                    {assetSymbol === 'BRL' ? 'R$' : '$'} {tx.amount?.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </p>
                  <Badge variant="success" className="text-xs mt-1">
                    {tx.status}
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
