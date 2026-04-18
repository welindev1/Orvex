import { Proof } from "./types";

export const mockProofs: Proof[] = [
  {
    id: "prf_001",
    productName: "Premium Discord Bot License",
    description: "Lifetime license for premium Discord bot features",
    amount: 49.99,
    status: "completed",
    paymentMethod: "paypal",
    customerPayPalEmail: "john.doe@email.com",
    payPalName: "John Doe",
    transactionId: "5YH82547AB123456K",
    discordName: "JohnD",
    discordAlias: "JohnD#1234",
    discordId: "123456789012345678",
    paymentScreenshots: [
      { id: "img_001", url: "/placeholder-payment.jpg", caption: "PayPal confirmation", uploadedAt: "2024-01-15T10:30:00Z" }
    ],
    deliveryScreenshots: [
      { id: "img_002", url: "/placeholder-delivery.jpg", caption: "License key delivered", uploadedAt: "2024-01-15T10:45:00Z" },
      { id: "img_003", url: "/placeholder-delivery-2.jpg", caption: "Discord DM confirmation", uploadedAt: "2024-01-15T10:46:00Z" }
    ],
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-15T10:45:00Z",
  },
  {
    id: "prf_002",
    productName: "Custom Website Template",
    description: "Responsive e-commerce template",
    amount: 129.00,
    status: "pending",
    paymentMethod: "cashapp",
    cashtag: "$mikejohnson",
    customerName: "Mike Johnson",
    paymentScreenshots: [
      { id: "img_004", url: "/placeholder-payment.jpg", caption: "CashApp payment", uploadedAt: "2024-01-16T14:20:00Z" }
    ],
    deliveryScreenshots: [],
    createdAt: "2024-01-16T14:20:00Z",
    updatedAt: "2024-01-16T14:20:00Z",
  },
  {
    id: "prf_003",
    productName: "SEO Consultation Package",
    description: "3-month SEO strategy and implementation",
    amount: 599.00,
    status: "completed",
    paymentMethod: "bank",
    bankName: "Chase Bank",
    accountLast4: "4532",
    customerName: "Sarah Williams",
    paymentScreenshots: [
      { id: "img_005", url: "/placeholder-payment.jpg", caption: "Bank transfer confirmation", uploadedAt: "2024-01-14T09:00:00Z" }
    ],
    deliveryScreenshots: [
      { id: "img_006", url: "/placeholder-delivery.jpg", caption: "Strategy document", uploadedAt: "2024-01-17T16:30:00Z" },
      { id: "img_007", url: "/placeholder-delivery-2.jpg", caption: "Implementation checklist", uploadedAt: "2024-01-17T16:35:00Z" },
      { id: "img_008", url: "/placeholder-delivery-3.jpg", caption: "Final report", uploadedAt: "2024-01-17T16:40:00Z" }
    ],
    createdAt: "2024-01-14T09:00:00Z",
    updatedAt: "2024-01-17T16:30:00Z",
  },
  {
    id: "prf_004",
    productName: "Logo Design Package",
    description: "Brand logo with variations and source files",
    amount: 250.00,
    status: "completed",
    paymentMethod: "paypal",
    customerPayPalEmail: "emily.chen@business.com",
    payPalName: "Emily Chen",
    transactionId: "8KL93628CD789012M",
    discordName: "EmilyDesigns",
    discordAlias: "EmilyDesigns#5678",
    discordId: "987654321098765432",
    paymentScreenshots: [
      { id: "img_009", url: "/placeholder-payment.jpg", caption: "PayPal receipt", uploadedAt: "2024-01-12T11:15:00Z" }
    ],
    deliveryScreenshots: [
      { id: "img_010", url: "/placeholder-delivery.jpg", caption: "Logo delivered", uploadedAt: "2024-01-13T14:00:00Z" }
    ],
    createdAt: "2024-01-12T11:15:00Z",
    updatedAt: "2024-01-13T14:00:00Z",
  },
  {
    id: "prf_005",
    productName: "API Integration Service",
    description: "Custom API integration for third-party services",
    amount: 450.00,
    status: "pending",
    paymentMethod: "cashapp",
    cashtag: "$alexdev",
    customerName: "Alex Rivera",
    paymentScreenshots: [
      { id: "img_011", url: "/placeholder-payment.jpg", caption: "CashApp payment screenshot", uploadedAt: "2024-01-17T08:45:00Z" }
    ],
    deliveryScreenshots: [],
    createdAt: "2024-01-17T08:45:00Z",
    updatedAt: "2024-01-17T08:45:00Z",
  },
  {
    id: "prf_006",
    productName: "Mobile App UI Kit",
    description: "Complete Figma UI kit for mobile applications",
    amount: 79.00,
    status: "completed",
    paymentMethod: "bank",
    bankName: "Bank of America",
    accountLast4: "7891",
    customerName: "David Kim",
    paymentScreenshots: [
      { id: "img_012", url: "/placeholder-payment.jpg", caption: "Wire transfer confirmation", uploadedAt: "2024-01-10T15:30:00Z" }
    ],
    deliveryScreenshots: [
      { id: "img_013", url: "/placeholder-delivery.jpg", caption: "Figma file shared", uploadedAt: "2024-01-11T09:20:00Z" }
    ],
    createdAt: "2024-01-10T15:30:00Z",
    updatedAt: "2024-01-11T09:20:00Z",
  },
];

export function getProofById(id: string): Proof | undefined {
  return mockProofs.find((proof) => proof.id === id);
}

export function searchProofs(query: string): Proof[] {
  const lowercaseQuery = query.toLowerCase();
  return mockProofs.filter((proof) => {
    const customerName = proof.paymentMethod === "paypal" 
      ? proof.payPalName 
      : proof.customerName;
    
    const transactionId = proof.paymentMethod === "paypal" 
      ? proof.transactionId 
      : proof.paymentMethod === "cashapp"
        ? proof.cashtag
        : proof.accountLast4;

    return (
      proof.productName.toLowerCase().includes(lowercaseQuery) ||
      customerName.toLowerCase().includes(lowercaseQuery) ||
      proof.id.toLowerCase().includes(lowercaseQuery) ||
      transactionId.toLowerCase().includes(lowercaseQuery)
    );
  });
}
