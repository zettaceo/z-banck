"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  mockUser, 
  mockBalances, 
  mockTransactions,
  mockPerformanceData,
  calculateTotalBalance,
  quickActions
} from '@/lib/mock-data';

export default function DashboardPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('7D');
  const totalBalance = calculateTotalBalance();

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-8 animate-fade-in">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-1 text-gradient-blue">Z-BANCK</h1>
            <p className="text-zinc-400 text-sm">Hybrid Crypto Banking</p>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="gold">ELITE</Badge>
            <div className="w-12 h-12 rounded-full gradient-blue flex items-center justify-center font-bold text-lg">
              {mockUser.avatar}
            </div>
          </div>
        </div>

        {/* Balance Overview */}
        <Card className="animate-slide-up">
          <div className="mb-4">
            <p className="text-zinc-400 text-sm mb-1">Total Balance</p>
            <h2 className="text-4xl font-bold mb-2">
              R$ {totalBalance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 text-sm font-medium">+8.34%</span>
              <span className="text-zinc-500 text-xs">vs last week</span>
            </div>
          </div>

          {/* Period selector */}
          <div className="flex gap-2 mb-6">
            {['24H', '7D', '1M', '1Y'].map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedPeriod === period
                    ? 'bg-blue-600 text-white'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {period}
              </button>
            ))}
          </div>

          {/* Simple chart */}
          <div className="flex items-end gap-1 h-24">
            {mockPerformanceData.map((item, i) => {
              const maxValue = Math.max(...mockPerformanceData.map(d => d.value));
              const height = (item.value / maxValue) * 100;
              return (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div 
                    className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t transition-all hover:from-blue-500 hover:to-blue-300"
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-xs text-zinc-500">{item.day}</span>
                </div>
              );
            })}
          </div>
        </Card>
      </header>

      {/* Quick Actions */}
      <section className="mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <button
              key={action.id}
              className="glass glass-hover p-6 rounded-2xl flex flex-col items-center gap-3 transition-all hover:scale-105"
            >
              <div className={`w-12 h-12 rounded-xl bg-${action.color}-600/20 flex items-center justify-center text-2xl`}>
                {action.icon}
              </div>
              <span className="font-medium">{action.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Assets Overview */}
      <section className="mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <h3 className="text-lg font-semibold mb-4">Assets</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {/* Crypto */}
          <Card>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <span className="text-2xl">₿</span>
              Crypto Portfolio
            </h4>
            <div className="space-y-3">
              {Object.values(mockBalances.crypto).map((crypto) => (
                <div key={crypto.symbol} className="flex items-center justify-between p-3 rounded-lg hover:bg-zinc-800/50 transition-all">
                  <div>
                    <p className="font-medium">{crypto.symbol}</p>
                    <p className="text-sm text-zinc-400">{crypto.balance.toFixed(4)}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${crypto.valueUSD.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                    <p className={`text-sm ${crypto.change24h >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                      {crypto.change24h >= 0 ? '+' : ''}{crypto.change24h}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Fiat */}
          <Card>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <span className="text-2xl">💰</span>
              Fiat Balance
            </h4>
            <div className="space-y-3">
              {Object.values(mockBalances.fiat).map((fiat) => (
                <div key={fiat.symbol} className="flex items-center justify-between p-3 rounded-lg hover:bg-zinc-800/50 transition-all">
                  <div>
                    <p className="font-medium">{fiat.symbol}</p>
                    <p className="text-sm text-zinc-400">{fiat.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">
                      {fiat.symbol === 'BRL' ? 'R$' : '$'} {fiat.balance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                    <p className="text-sm text-zinc-400">Available</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Recent Transactions */}
      <section className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Recent Transactions</h3>
          <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
            View All →
          </button>
        </div>
        <Card>
          <div className="space-y-1">
            {mockTransactions.slice(0, 5).map((tx, i) => (
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
                      {new Date(tx.timestamp).toLocaleDateString('pt-BR')} • {tx.method}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${
                    tx.type === 'receive' ? 'text-emerald-400' : 'text-white'
                  }`}>
                    {tx.type === 'receive' ? '+' : '-'}
                    {tx.currency === 'BRL' ? 'R$ ' : ''}
                    {tx.amount?.toLocaleString('pt-BR', { minimumFractionDigits: tx.currency === 'BTC' ? 4 : 2 }) || 
                     tx.amountFrom?.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    {' '}{tx.currency || tx.currencyFrom}
                  </p>
                  <Badge variant="success" className="text-xs">
                    {tx.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Bottom Navigation (Mobile) */}
      <nav className="fixed bottom-0 left-0 right-0 glass border-t border-zinc-800 p-4 md:hidden">
        <div className="flex justify-around items-center max-w-md mx-auto">
          {['Home', 'Wallet', 'PIX', 'Cards', 'More'].map((item) => (
            <button key={item} className="flex flex-col items-center gap-1 text-zinc-400 hover:text-white transition-colors">
              <div className="w-6 h-6 rounded-full bg-zinc-800" />
              <span className="text-xs">{item}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
