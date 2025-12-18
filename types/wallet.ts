export type AssetType = 'crypto' | 'fiat';

export interface Asset {
  symbol: string;
  name: string;
  type: AssetType;
  balance: number;
  available: number;
  locked?: number;
  price?: number;
  change24h: number;
  change7d?: number;
  valueUSD?: number;
  valueBRL?: number;
  icon?: string;
}

export interface CryptoAsset extends Asset {
  type: 'crypto';
  price: number;
  valueUSD: number;
  network: string;
  contractAddress?: string;
  decimals: number;
}

export interface FiatAsset extends Asset {
  type: 'fiat';
  currency: string;
  country: string;
}

export interface WalletSummary {
  totalBalanceUSD: number;
  totalBalanceBRL: number;
  cryptoBalanceUSD: number;
  fiatBalanceBRL: number;
  change24h: number;
  change7d: number;
}

export interface ChartDataPoint {
  timestamp: string;
  value: number;
  label?: string;
}
