// ============================================
// app/(app)/swap/page.tsx
// ============================================
import { Card } from '@/components/ui/card';

export default function SwapPage() {
  return (
    <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Swap</h1>
      <Card>
        <div className="text-center py-12">
          <p className="text-zinc-400 mb-4">Crypto ↔ Fiat Exchange</p>
          <p className="text-sm text-zinc-500">Coming soon...</p>
        </div>
      </Card>
    </div>
  );
}
