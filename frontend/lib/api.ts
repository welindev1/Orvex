// Centralized API client for Orvex
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

// ─── Generic fetcher ─────────────────────────────────────
async function apiFetch<T>(
  path: string,
  options?: RequestInit,
  token?: string,
): Promise<T> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options?.headers as Record<string, string>),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers,
    cache: 'no-store',
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: res.statusText }));
    throw new Error(error?.message || 'API error');
  }

  return res.json() as Promise<T>;
}

// ─── Auth ─────────────────────────────────────────────────
export async function loginApi(email: string, password: string) {
  return apiFetch<{ access_token: string; user: { id: string; email: string; name: string; role: string } }>(
    '/auth/login',
    {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    },
  );
}

// ─── Proofs ───────────────────────────────────────────────
export async function fetchProofs() {
  return apiFetch<Proof[]>('/proofs');
}

export async function fetchProofById(id: string) {
  return apiFetch<Proof>(`/proofs/${id}`);
}

export async function createProof(data: unknown, token: string) {
  return apiFetch<Proof>('/proofs', {
    method: 'POST',
    body: JSON.stringify(data),
  }, token);
}

export async function updateProof(id: string, data: unknown, token: string) {
  return apiFetch<Proof>(`/proofs/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  }, token);
}

export async function deleteProof(id: string, token: string) {
  return apiFetch<void>(`/proofs/${id}`, { method: 'DELETE' }, token);
}

// ─── Upload ───────────────────────────────────────────────
export async function uploadFiles(files: File[]): Promise<string[]> {
  const formData = new FormData();
  files.forEach((f) => formData.append('files', f));

  const res = await fetch(`${API_URL}/upload`, {
    method: 'POST',
    body: formData,
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Upload failed');
  }

  const json = await res.json();
  return json.urls as string[];
}

// ─── Shared Types (mirrors backend) ──────────────────────
export type PaymentMethod = 'PAYPAL' | 'CASHAPP' | 'BANK';
export type ProofStatus = 'PENDING' | 'COMPLETED';

export interface ProofImage {
  id: string;
  url: string;
  caption?: string;
  uploadedAt: string;
}

export interface Proof {
  id: string;
  productName: string;
  description?: string;
  amount: number;
  status: ProofStatus;
  paymentMethod: PaymentMethod;

  // PayPal
  customerPayPalEmail?: string;
  payPalName?: string;
  transactionId?: string;
  discordName?: string;
  discordAlias?: string;
  discordId?: string;

  // CashApp
  cashtag?: string;
  customerName?: string;

  // Bank
  bankName?: string;
  accountLast4?: string;

  deliveryNote?: string;

  paymentScreenshots: ProofImage[];
  deliveryScreenshots: ProofImage[];

  createdAt: string;
  updatedAt: string;
}

// ─── Helpers (same logic as old types.ts) ────────────────
export function getCustomerName(proof: Proof): string {
  if (proof.paymentMethod === 'PAYPAL') return proof.payPalName ?? '';
  return proof.customerName ?? '';
}

export function getTransactionIdentifier(proof: Proof): string {
  if (proof.paymentMethod === 'PAYPAL') return proof.transactionId ?? '';
  if (proof.paymentMethod === 'CASHAPP') return proof.cashtag ?? '';
  if (proof.paymentMethod === 'BANK') return `****${proof.accountLast4 ?? ''}`;
  return '';
}

export function formatPaymentMethod(method: PaymentMethod): string {
  const labels: Record<PaymentMethod, string> = {
    PAYPAL: 'PayPal',
    CASHAPP: 'CashApp',
    BANK: 'Bank Transfer',
  };
  return labels[method] ?? method;
}
