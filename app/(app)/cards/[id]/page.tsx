"use client";

import { useParams, useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function CardDetailPage() {
  const params = useParams();
  const router = useRouter();
  const cardId = params.id as string;

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <button 
          onClick={() => router.back()}
          className="w-10 h-10 rounded-lg glass glass-hover flex items-center justify-center"
        >
          ←
        </button>
        <div>
          <h1 className="text-2xl font-bold">Card Details</h1>
          <p className="text-zinc-400">Card ID: {cardId}</p>
        </div>
      </div>

      <Card>
        <div className="text-center py-12">
          <p className="text-zinc-400 mb-4">Card details page</p>
          <p className="text-sm text-zinc-500">Coming soon...</p>
        </div>
      </Card>
    </div>
  );
}
