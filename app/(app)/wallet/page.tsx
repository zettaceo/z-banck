// ==============================================
// app/(app)/wallet/page.tsx
// ==============================================
"use client";
import { Card } from "@/components/ui/card";
export default function WalletPage() {
  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Wallet</h1>
      <Card><p className="p-8 text-zinc-400">Coming soon...</p></Card>
    </div>
  );
}

// ==============================================
// app/(app)/wallet/crypto/page.tsx
// ==============================================
"use client";
import { Card } from "@/components/ui/card";
export default function CryptoPage() {
  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Crypto Wallet</h1>
      <Card><p className="p-8 text-zinc-400">Coming soon...</p></Card>
    </div>
  );
}

// ==============================================
// app/(app)/wallet/fiat/page.tsx
// ==============================================
"use client";
import { Card } from "@/components/ui/card";
export default function FiatPage() {
  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Fiat Wallet</h1>
      <Card><p className="p-8 text-zinc-400">Coming soon...</p></Card>
    </div>
  );
}

// ==============================================
// app/(app)/dashboard/page.tsx
// ==============================================
"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function DashboardRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, [router]);
  return null;
}

// ==============================================
// app/(app)/pix/page.tsx
// ==============================================
import { Card } from "@/components/ui/card";
export default function PixPage() {
  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">PIX</h1>
      <Card><p className="p-8 text-zinc-400">Coming soon...</p></Card>
    </div>
  );
}

// ==============================================
// app/(app)/pix/send/page.tsx
// ==============================================
import { Card } from "@/components/ui/card";
export default function PixSendPage() {
  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Send PIX</h1>
      <Card><p className="p-8 text-zinc-400">Coming soon...</p></Card>
    </div>
  );
}

// ==============================================
// app/(app)/pix/receive/page.tsx
// ==============================================
import { Card } from "@/components/ui/card";
export default function PixReceivePage() {
  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Receive PIX</h1>
      <Card><p className="p-8 text-zinc-400">Coming soon...</p></Card>
    </div>
  );
}

// ==============================================
// app/(app)/cards/page.tsx
// ==============================================
import { Card } from "@/components/ui/card";
export default function CardsPage() {
  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Cards</h1>
      <Card><p className="p-8 text-zinc-400">Coming soon...</p></Card>
    </div>
  );
}

// ==============================================
// app/(app)/cards/[id]/page.tsx
// ==============================================
"use client";
import { useParams } from "next/navigation";
import { Card } from "@/components/ui/card";
export default function CardDetailPage() {
  const params = useParams();
  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Card {params.id}</h1>
      <Card><p className="p-8 text-zinc-400">Coming soon...</p></Card>
    </div>
  );
}

// ==============================================
// app/(app)/swap/page.tsx
// ==============================================
import { Card } from "@/components/ui/card";
export default function SwapPage() {
  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Swap</h1>
      <Card><p className="p-8 text-zinc-400">Coming soon...</p></Card>
    </div>
  );
}

// ==============================================
// app/(app)/transactions/page.tsx
// ==============================================
import { Card } from "@/components/ui/card";
export default function TransactionsPage() {
  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Transactions</h1>
      <Card><p className="p-8 text-zinc-400">Coming soon...</p></Card>
    </div>
  );
}

// ==============================================
// app/(app)/security/page.tsx
// ==============================================
import { Card } from "@/components/ui/card";
export default function SecurityPage() {
  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Security</h1>
      <Card><p className="p-8 text-zinc-400">Coming soon...</p></Card>
    </div>
  );
}

// ==============================================
// app/(app)/profile/page.tsx
// ==============================================
import { Card } from "@/components/ui/card";
export default function ProfilePage() {
  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <Card><p className="p-8 text-zinc-400">Coming soon...</p></Card>
    </div>
  );
}

// ==============================================
// app/(auth)/login/page.tsx
// ==============================================
export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="glass rounded-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-2 text-gradient-blue">Z-BANCK</h1>
        <p className="text-zinc-400">Login - Coming Soon</p>
      </div>
    </div>
  );
}

// ==============================================
// app/(auth)/register/page.tsx
// ==============================================
export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="glass rounded-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-2 text-gradient-blue">Z-BANCK</h1>
        <p className="text-zinc-400">Register - Coming Soon</p>
      </div>
    </div>
  );
}

// ==============================================
// app/(auth)/biometrics/page.tsx
// ==============================================
export default function BiometricsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="glass rounded-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-2 text-gradient-blue">Z-BANCK</h1>
        <p className="text-zinc-400">Biometrics - Coming Soon</p>
      </div>
    </div>
  );
}
