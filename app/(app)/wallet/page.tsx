"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AssetCard } from '@/components/sections/asset-card';
import { mockBalances, calculateTotalBalance } from '@/lib/mock-data';

export default function WalletPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'all' | 'crypto' | 'fiat'>('all');
  const totalBalance = calculateTotalBalance();

  const cryptoAssets = Object.values(mockBalances.crypto);
  const fiatAssets = Object.values(mockBalances.fiat);

  const cryptoTotal = cryptoAssets.reduce((sum, asset) => sum + (asset.valueUSD || 0) * 5, 0);
  const fiatTotal = fiatAssets.reduce((sum, asset) => sum + asset.balance, 0);

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-1">Wallet</h1>
            <p className="text-zinc-400">Manage your assets</p>
          </div>
          <Button variant="primary">
            + Add Funds
          </Button>
        </div>

        {/* Total Balance Card */}
        <Card className="mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-zinc-400 text-sm mb-2">Total Portfolio Value</p>
              <h2 className="text-4xl font-bold mb-2">
                R$ {totalBalance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </h2>
              <div className="flex items-center gap-3">
                <Badge variant="success">+8.34%</Badge>
                <span className="text-zinc-500 text-sm">Last 24h</span>
              </div>
            </div>

            {/* Distribution */}
            <div className="flex gap-6">
              <div>
                <p className="text-zinc-400 text-sm mb-1">Crypto</p>
                <p className="text-xl font-semibold text-blue-400">
                  R$ {cryptoTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
                <p className="text-xs text-zinc-500">
                  {((cryptoTotal / totalBalance) * 100).toFixed(1)}%
                </p>
              </div>
              <div>
                <p className="text-zinc-400 text-sm mb-1">Fiat</p>
                <p className="text-xl font-semibold text-amber-400">
                  R$ {fiatTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
                <p className="text-xs text-zinc-500">
                  {((fiatTotal / totalBalance) * 100).toFixed(1)}%
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {[
            { id: 'all', label: 'All Assets', count: cryptoAssets.length + fiatAssets.length },
            { id: 'crypto', label: 'Crypto', count: cryptoAssets.length },
            { id: 'fiat', label: 'Fiat', count: fiatAssets.length }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'glass glass-hover text-zinc-400'
              }`}
            >
              {tab.label} <span className="ml-2 opacity-60">({tab.count})</span>
            </button>
          ))}
        </div>
      </header>

      {/* Quick Actions */}
      <section className="mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Send', icon: '↗', color: 'blue' },
            { label: 'Receive', icon: '↙', color: 'emerald' },
            { label: 'Swap', icon: '⇄', color: 'amber' },
            { label: 'Buy', icon: '+', color: 'blue' }
          ].map((action) => (
            <button
              key={action.label}
              className="glass glass-hover p-4 rounded-xl flex items-center gap-3 transition-all hover:scale-105"
            >
              <div className={`w-10 h-10 rounded-lg bg-${action.color}-600/20 flex items-center justify-center text-lg`}>
                {action.icon}
              </div>
              <span className="font-medium">{action.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Assets Grid */}
      <section>
        <h3 className="text-lg font-semibold mb-4">
          {activeTab === 'all' ? 'All Assets' : activeTab === 'crypto' ? 'Crypto Assets' : 'Fiat Currencies'}
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Crypto Assets */}
          {(activeTab === 'all' || activeTab === 'crypto') &&
            cryptoAssets.map((asset) => (
              <AssetCard
                key={asset.symbol}
                symbol={asset.symbol}
                name={asset.name}
                balance={asset.balance}
                value={asset.valueUSD || 0}
                change24h={asset.change24h}
                type="crypto"
                onClick={() => router.push(`/wallet/crypto?asset=${asset.symbol}`)}
              />
            ))}

          {/* Fiat Assets */}
          {(activeTab === 'all' || activeTab === 'fiat') &&
            fiatAssets.map((asset) => (
              <AssetCard
                key={asset.symbol}
                symbol={asset.symbol}
                name={asset.name}
                balance={asset.balance}
                value={asset.balance}
                change24h={asset.change24h}
                type="fiat"
                onClick={() => router.push(`/wallet/fiat?asset=${asset.symbol}`)}
              />
            ))}
        </div>
      </section>

      {/* Bottom spacing for mobile nav */}
      <div className="h-24 md:h-8" />
    </div>
  );
        }
