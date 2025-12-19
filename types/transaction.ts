// ============================================
// types/transaction.ts
// ============================================
export interface Transaction {
  id: string;
  type: 'send' | 'receive' | 'swap' | 'card';
  method: string;
  amount?: number;
  currency?: string;
  amountFrom?: number;
  currencyFrom?: string;
  amountTo?: number;
  currencyTo?: string;
  from?: string;
  to?: string;
  merchant?: string;
  status: string;
  timestamp: string;
  description: string;
  fee?: number;
}
