// ============================================
// app/(app)/dashboard/page.tsx
// ============================================
"use client";
import { useRouter } from 'next/navigation';

export default function DashboardPageRedirect() {
  const router = useRouter();
  
  // Redirect to main dashboard
  if (typeof window !== 'undefined') {
    router.push('/');
  }
  
  return null;
}
