"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MultiImageUpload } from "@/components/multi-image-upload";
import { createProof, uploadFiles, type PaymentMethod } from "@/lib/api";
import { useAuth } from "@/hooks/use-auth";

interface UploadedImage {
  id: string;
  file: File;
  preview: string;
  caption: string;
}

export default function CreateProofPage() {
  const router = useRouter();
  const { token } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("PAYPAL");
  const [paymentScreenshots, setPaymentScreenshots] = useState<UploadedImage[]>([]);
  const [deliveryScreenshots, setDeliveryScreenshots] = useState<UploadedImage[]>([]);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!token) return;
    setIsSubmitting(true);
    setError("");

    try {
      const form = e.currentTarget;
      const get = (id: string) => (form.querySelector(`#${id}`) as HTMLInputElement)?.value ?? "";

      // 1. Upload images first
      const paymentUrls = paymentScreenshots.length
        ? await uploadFiles(paymentScreenshots.map((i) => i.file))
        : [];
      const deliveryUrls = deliveryScreenshots.length
        ? await uploadFiles(deliveryScreenshots.map((i) => i.file))
        : [];

      // 2. Build payload
      const payload: Record<string, unknown> = {
        productName: get("productName"),
        description: get("description") || undefined,
        amount: parseFloat(get("amount")),
        paymentMethod,
        paymentScreenshots: paymentUrls.map((url, i) => ({
          url,
          caption: paymentScreenshots[i]?.caption || undefined,
        })),
        deliveryScreenshots: deliveryUrls.map((url, i) => ({
          url,
          caption: deliveryScreenshots[i]?.caption || undefined,
        })),
      };

      if (paymentMethod === "PAYPAL") {
        payload.customerPayPalEmail = get("paypalEmail");
        payload.payPalName = get("paypalName");
        payload.transactionId = get("transactionId");
        payload.discordName = get("discordName") || undefined;
        payload.discordAlias = get("discordAlias") || undefined;
        payload.discordId = get("discordId") || undefined;
      } else if (paymentMethod === "CASHAPP") {
        payload.cashtag = get("cashtag");
        payload.customerName = get("cashappName");
      } else if (paymentMethod === "BANK") {
        payload.bankName = get("bankName");
        payload.accountLast4 = get("accountLast4");
        payload.customerName = get("bankCustomerName");
      }

      await createProof(payload, token);
      router.push("/dashboard");
    } catch (err: any) {
      setError(err?.message || "Failed to create proof. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/dashboard">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Create Proof</h1>
          <p className="text-sm text-muted-foreground">Add a new payment and delivery proof record</p>
        </div>
      </div>

      {error && (
        <div className="rounded-md bg-destructive/10 px-4 py-3 text-sm text-destructive">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Product Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Product Information</CardTitle>
            <CardDescription>Basic details about the product or service</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="productName">Product Name</Label>
              <Input id="productName" placeholder="e.g., Premium Discord Bot License" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Brief description of the product or service" rows={3} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount">Amount (USD)</Label>
              <Input id="amount" type="number" step="0.01" min="0" placeholder="0.00" required />
            </div>
          </CardContent>
        </Card>

        {/* Payment Method */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Payment Method</CardTitle>
            <CardDescription>Select the payment method used</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Payment Method</Label>
              <Select value={paymentMethod} onValueChange={(v) => setPaymentMethod(v as PaymentMethod)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PAYPAL">PayPal</SelectItem>
                  <SelectItem value="CASHAPP">CashApp</SelectItem>
                  <SelectItem value="BANK">Bank Transfer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator />

            {paymentMethod === "PAYPAL" && (
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="paypalEmail">Customer PayPal Email</Label>
                    <Input id="paypalEmail" type="email" placeholder="customer@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="paypalName">PayPal Name</Label>
                    <Input id="paypalName" placeholder="John Doe" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="transactionId">Transaction ID</Label>
                  <Input id="transactionId" placeholder="5YH82547AB123456K" required />
                </div>
                <Separator />
                <p className="text-sm font-medium">Discord Information (Optional)</p>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="discordName">Discord Name</Label>
                    <Input id="discordName" placeholder="JohnD" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="discordAlias">Discord Alias</Label>
                    <Input id="discordAlias" placeholder="JohnD#1234" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="discordId">Discord ID</Label>
                    <Input id="discordId" placeholder="123456789012345678" />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === "CASHAPP" && (
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="cashtag">Cashtag</Label>
                    <Input id="cashtag" placeholder="$username" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cashappName">Customer Name</Label>
                    <Input id="cashappName" placeholder="John Doe" required />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === "BANK" && (
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="bankName">Bank Name</Label>
                    <Input id="bankName" placeholder="Chase Bank" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="accountLast4">Account Last 4 Digits</Label>
                    <Input id="accountLast4" placeholder="1234" maxLength={4} pattern="[0-9]{4}" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bankCustomerName">Customer Name</Label>
                  <Input id="bankCustomerName" placeholder="John Doe" required />
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Screenshots */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Screenshots</CardTitle>
            <CardDescription>Upload payment and delivery proof screenshots (multiple allowed)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <MultiImageUpload
              label="Payment Screenshots"
              description="Screenshots of the payment confirmation"
              images={paymentScreenshots}
              onChange={setPaymentScreenshots}
              maxImages={5}
            />
            <Separator />
            <MultiImageUpload
              label="Delivery Screenshots"
              description="Screenshots proving the product was delivered"
              images={deliveryScreenshots}
              onChange={setDeliveryScreenshots}
              maxImages={10}
            />
          </CardContent>
        </Card>

        {/* Submit */}
        <div className="flex items-center justify-end gap-4">
          <Link href="/dashboard">
            <Button type="button" variant="outline">Cancel</Button>
          </Link>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Creating...</>
            ) : "Create Proof"}
          </Button>
        </div>
      </form>
    </div>
  );
}
