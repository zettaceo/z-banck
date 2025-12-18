export {};

declare global {
  interface Window {
    // Add global window properties if needed
  }
}

// Re-export common types
export type { Asset, CryptoAsset, FiatAsset, WalletSummary } from './wallet';
export type { Transaction } from './transaction';
