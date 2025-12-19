// ============================================
// types/card.ts
// ============================================
export interface Card {
  id: string;
  type: 'virtual' | 'physical';
  brand: string;
  last4: string;
  name: string;
  status: string;
  limit: number;
  spent: number;
  currency: string;
  expiryMonth: number;
  expiryYear: number;
  cvv: string;
}
