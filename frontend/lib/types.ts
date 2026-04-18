export type PaymentMethod = "paypal" | "cashapp" | "bank";
export type ProofStatus = "pending" | "completed";

export interface ProofImage {
  id: string;
  url: string;
  caption?: string;
  uploadedAt: string;
}

export interface BaseProof {
  id: string;
  productName: string;
  description?: string;
  amount: number;
  status: ProofStatus;
  paymentMethod: PaymentMethod;
  paymentScreenshots: ProofImage[];
  deliveryScreenshots: ProofImage[];
  createdAt: string;
  updatedAt: string;
}

export interface PayPalProof extends BaseProof {
  paymentMethod: "paypal";
  customerPayPalEmail: string;
  payPalName: string;
  transactionId: string;
  discordName?: string;
  discordAlias?: string;
  discordId?: string;
}

export interface CashAppProof extends BaseProof {
  paymentMethod: "cashapp";
  cashtag: string;
  customerName: string;
}

export interface BankProof extends BaseProof {
  paymentMethod: "bank";
  bankName: string;
  accountLast4: string;
  customerName: string;
}

export type Proof = PayPalProof | CashAppProof | BankProof;

export function getCustomerName(proof: Proof): string {
  switch (proof.paymentMethod) {
    case "paypal":
      return proof.payPalName;
    case "cashapp":
      return proof.customerName;
    case "bank":
      return proof.customerName;
  }
}

export function getTransactionIdentifier(proof: Proof): string {
  switch (proof.paymentMethod) {
    case "paypal":
      return proof.transactionId;
    case "cashapp":
      return proof.cashtag;
    case "bank":
      return `****${proof.accountLast4}`;
  }
}
