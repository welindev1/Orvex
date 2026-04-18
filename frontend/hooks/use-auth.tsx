'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { loginApi } from '@/lib/api';
import { useRouter } from 'next/navigation';

interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: string;
}

interface AuthContextType {
  user: AuthUser | null;
  token: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem('orvex_token');
    const storedUser = localStorage.getItem('orvex_user');
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const { access_token, user: authUser } = await loginApi(email, password);
    localStorage.setItem('orvex_token', access_token);
    localStorage.setItem('orvex_user', JSON.stringify(authUser));
    setToken(access_token);
    setUser(authUser);
    router.push('/dashboard');
  };

  const logout = () => {
    localStorage.removeItem('orvex_token');
    localStorage.removeItem('orvex_user');
    setToken(null);
    setUser(null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, token, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
