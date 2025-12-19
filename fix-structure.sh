#!/bin/bash

echo "🔧 Corrigindo estrutura do Z-BANCK..."

# 1. Deletar pastas problemáticas
echo "🗑️  Removendo pastas problemáticas..."
rm -rf "app/(app)"
rm -rf "app/(auth)"

# 2. Criar estrutura mínima funcional
echo "📁 Criando estrutura mínima..."
mkdir -p "app/(auth)/login"
mkdir -p "app/(auth)/register"
mkdir -p "app/(auth)/biometrics"

# 3. Criar páginas de auth (simples)
echo "📝 Criando páginas de autenticação..."

cat > "app/(auth)/login/page.tsx" << 'EOF'
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
EOF

cat > "app/(auth)/register/page.tsx" << 'EOF'
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
EOF

cat > "app/(auth)/biometrics/page.tsx" << 'EOF'
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
EOF

echo "✅ Estrutura corrigida!"
echo "📦 Agora faça:"
echo "   git add ."
echo "   git commit -m 'fix: clean structure and remove problematic routes'"
echo "   git push origin main"
