// Mock user data
export const mockUser = {
  id: "usr_zetta_001",
  name: "Marcus Aurelius",
  email: "marcus@zetta.finance",
  avatar: "MA",
  tier: "ELITE",
  kycStatus: "verified",
  createdAt: "2024-01-15T10:30:00Z"
};

// Mock wallet balances
export const mockBalances = {
  fiat: {
    BRL: {
      symbol: "BRL",
      name: "Brazilian Real",
      balance: 127543.89,
      available: 127543.89,
      change24h: 0
    },
    USD: {
      symbol: "USD",
      name: "US Dollar",
      balance: 25840.00,
      available: 25840.00,
      change24h: 0
    }
  },
  crypto: {
    BTC: {
      symbol: "BTC",
      name: "Bitcoin",
      balance: 0.8457,
      available: 0.8457,
      price: 98234.56,
      change24h: 3.42,
      valueUSD: 83067.23
    },
    ETH: {
      symbol: "ETH",
      name: "Ethereum",
      balance: 12.3456,
      available: 12.3456,
      price: 3789.23,
      change24h: 5.67,
      valueUSD: 46789.45
    },
    USDT: {
      symbol: "USDT",
      name: "Tether USD",
      balance: 50000.00,
      available: 50000.00,
      price: 1.00,
      change24h: 0.01,
      valueUSD: 50000.00
    }
  }
};

// Mock transactions
export const mockTransactions = [
  {
    id: "tx_001",
    type: "receive",
    method: "PIX",
    amount: 2500.00,
    currency: "BRL",
    from: "João Silva",
    status: "completed",
    timestamp: "2024-12-18T14:23:00Z",
    description: "Pagamento recebido"
  },
  {
    id: "tx_002",
    type: "send",
    method: "CRYPTO",
    amount: 0.0234,
    currency: "BTC",
    to: "0x742d...8f3a",
    status: "completed",
    timestamp: "2024-12-18T12:15:00Z",
    description: "Transferência BTC",
    fee: 0.00012
  },
  {
    id: "tx_003",
    type: "swap",
    method: "SWAP",
    amountFrom: 1000.00,
    currencyFrom: "USDT",
    amountTo: 0.01018,
    currencyTo: "BTC",
    status: "completed",
    timestamp: "2024-12-18T10:45:00Z",
    description: "USDT → BTC"
  },
  {
    id: "tx_004",
    type: "send",
    method: "PIX",
    amount: 850.50,
    currency: "BRL",
    to: "Maria Santos",
    status: "completed",
    timestamp: "2024-12-17T18:30:00Z",
    description: "PIX agendado"
  },
  {
    id: "tx_005",
    type: "receive",
    method: "CRYPTO",
    amount: 2.5,
    currency: "ETH",
    from: "0x123a...45bc",
    status: "completed",
    timestamp: "2024-12-17T15:20:00Z",
    description: "Depósito ETH"
  },
  {
    id: "tx_006",
    type: "card",
    method: "CARD",
    amount: 342.90,
    currency: "BRL",
    merchant: "Amazon Brasil",
    status: "completed",
    timestamp: "2024-12-17T11:10:00Z",
    description: "Compra cartão virtual"
  }
];

// Mock cards
export const mockCards = [
  {
    id: "card_001",
    type: "virtual",
    brand: "VISA",
    last4: "4532",
    name: "Marcus Aurelius",
    status: "active",
    limit: 50000.00,
    spent: 12340.50,
    currency: "BRL",
    expiryMonth: 12,
    expiryYear: 2027,
    cvv: "***"
  },
  {
    id: "card_002",
    type: "physical",
    brand: "MASTERCARD",
    last4: "8976",
    name: "Marcus Aurelius",
    status: "active",
    limit: 100000.00,
    spent: 45678.90,
    currency: "USD",
    expiryMonth: 8,
    expiryYear: 2028,
    cvv: "***"
  }
];

// Mock performance data (7 days)
export const mockPerformanceData = [
  { day: "Mon", value: 295340 },
  { day: "Tue", value: 301234 },
  { day: "Wed", value: 298765 },
  { day: "Thu", value: 305890 },
  { day: "Fri", value: 312456 },
  { day: "Sat", value: 318234 },
  { day: "Sun", value: 332697 }
];

// Calculate total balance
export const calculateTotalBalance = () => {
  const fiatTotal = Object.values(mockBalances.fiat).reduce(
    (sum, curr) => sum + (curr.symbol === 'BRL' ? curr.balance : curr.balance * 5), 
    0
  );
  
  const cryptoTotal = Object.values(mockBalances.crypto).reduce(
    (sum, curr) => sum + curr.valueUSD * 5, 
    0
  );
  
  return fiatTotal + cryptoTotal;
};

// Quick actions
export const quickActions = [
  { id: "pix", label: "PIX", icon: "⚡", color: "blue" },
  { id: "swap", label: "Swap", icon: "🔄", color: "amber" },
  { id: "send", label: "Send", icon: "↗", color: "blue" },
  { id: "receive", label: "Receive", icon: "↙", color: "emerald" }
];
