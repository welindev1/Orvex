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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MultiImageUpload } from "@/components/multi-image-upload";
import type { PaymentMethod } from "@/lib/types";

interface UploadedImage {
  id: string;
  file: File;
  preview: string;
  caption: string;
}

export default function CreateProofPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("paypal");
  const [paymentScreenshots, setPaymentScreenshots] = useState<UploadedImage[]>([]);
  const [deliveryScreenshots, setDeliveryScreenshots] = useState<UploadedImage[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call - in production, replace with actual submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    router.push("/dashboard");
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
          <p className="text-sm text-muted-foreground">
            Add a new payment and delivery proof record
          </p>
        </div>
      </div>

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
              <Textarea
                id="description"
                placeholder="Brief description of the product or service"
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount">Amount (USD)</Label>
              <Input
                id="amount"
                type="number"
                step="0.01"
                min="0"
                placeholder="0.00"
                required
              />
            </div>
          </CardContent>
        </Card>

        {/* Payment Method Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Payment Method</CardTitle>
            <CardDescription>Select the payment method used</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="paymentMethod">Payment Method</Label>
              <Select
                value={paymentMethod}
                onValueChange={(value) => setPaymentMethod(value as PaymentMethod)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="paypal">PayPal</SelectItem>
                  <SelectItem value="cashapp">CashApp</SelectItem>
                  <SelectItem value="bank">Bank Transfer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator />

            {/* PayPal Fields */}
            {paymentMethod === "paypal" && (
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

            {/* CashApp Fields */}
            {paymentMethod === "cashapp" && (
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

            {/* Bank Fields */}
            {paymentMethod === "bank" && (
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="bankName">Bank Name</Label>
                    <Input id="bankName" placeholder="Chase Bank" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="accountLast4">Account Last 4 Digits</Label>
                    <Input
                      id="accountLast4"
                      placeholder="1234"
                      maxLength={4}
                      pattern="[0-9]{4}"
                      required
                    />
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
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </Link>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating...
              </>
            ) : (
              "Create Proof"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
