"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ImageIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { mockProofs } from "@/lib/data";
import { getCustomerName, getTransactionIdentifier } from "@/lib/types";

export default function PublicPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProofs = mockProofs.filter((proof) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    const customerName = getCustomerName(proof).toLowerCase();
    const transactionId = getTransactionIdentifier(proof).toLowerCase();
    return (
      proof.productName.toLowerCase().includes(query) ||
      customerName.includes(query) ||
      transactionId.includes(query) ||
      proof.id.toLowerCase().includes(query)
    );
  });

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const formatPaymentMethod = (method: string) => {
    const labels: Record<string, string> = {
      paypal: "PayPal",
      cashapp: "CashApp",
      bank: "Bank",
    };
    return labels[method] || method;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Orvex"
              width={120}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>
          <Link href="/login">
            <Button variant="ghost" size="sm">
              Admin Login
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero / Search Section */}
      <section className="border-b bg-muted/40 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-semibold tracking-tight">Delivery Proofs</h1>
            <p className="mt-2 text-muted-foreground">
              Search and verify digital product delivery proofs
            </p>
            <div className="relative mt-6">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by name, product, transaction ID..."
                className="h-12 pl-12 text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results Grid */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {filteredProofs.length} proof{filteredProofs.length !== 1 ? "s" : ""} found
            </p>
          </div>

          {filteredProofs.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">No proofs found matching your search.</p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProofs.map((proof) => (
                <Link key={proof.id} href={`/proof/${proof.id}`}>
                  <Card className="h-full overflow-hidden transition-shadow hover:shadow-md">
                    {/* Image Preview */}
                    <div className="aspect-video bg-muted flex items-center justify-center">
                      <ImageIcon className="h-10 w-10 text-muted-foreground/50" />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0 flex-1">
                          <h3 className="truncate font-medium">{proof.productName}</h3>
                          <p className="text-sm text-muted-foreground">
                            {getCustomerName(proof)}
                          </p>
                        </div>
                        <Badge
                          variant={proof.status === "completed" ? "default" : "outline"}
                          className={
                            proof.status === "completed"
                              ? "shrink-0 bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
                              : "shrink-0 border-amber-300 bg-amber-50 text-amber-700 hover:bg-amber-50"
                          }
                        >
                          {proof.status}
                        </Badge>
                      </div>
                      <div className="mt-3 flex items-center justify-between text-sm">
                        <Badge variant="secondary">{formatPaymentMethod(proof.paymentMethod)}</Badge>
                        <span className="font-medium">{formatAmount(proof.amount)}</span>
                      </div>
                      <p className="mt-2 truncate font-mono text-xs text-muted-foreground">
                        {getTransactionIdentifier(proof)}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
