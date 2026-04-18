import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getProofById } from "@/lib/data";
import { getCustomerName, getTransactionIdentifier } from "@/lib/types";
import { ImageGallery } from "@/components/image-gallery";

export default async function ProofDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const proof = getProofById(id);

  if (!proof) {
    notFound();
  }

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatPaymentMethod = (method: string) => {
    const labels: Record<string, string> = {
      paypal: "PayPal",
      cashapp: "CashApp",
      bank: "Bank Transfer",
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

      {/* Content */}
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to all proofs
        </Link>

        {/* Title */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">{proof.productName}</h1>
            {proof.description && (
              <p className="mt-1 text-muted-foreground">{proof.description}</p>
            )}
          </div>
          <Badge
            variant={proof.status === "completed" ? "default" : "outline"}
            className={
              proof.status === "completed"
                ? "shrink-0 bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
                : "shrink-0 border-amber-300 bg-amber-50 text-amber-700 hover:bg-amber-50"
            }
          >
            {proof.status === "completed" && <CheckCircle2 className="mr-1 h-3 w-3" />}
            {proof.status}
          </Badge>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Payment Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Payment Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Amount</span>
                <span className="font-semibold text-lg">{formatAmount(proof.amount)}</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Payment Method</span>
                <Badge variant="secondary">{formatPaymentMethod(proof.paymentMethod)}</Badge>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Transaction ID</span>
                <span className="font-mono text-sm">{getTransactionIdentifier(proof)}</span>
              </div>
              {proof.paymentMethod === "bank" && (
                <>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Bank Name</span>
                    <span className="text-sm">{proof.bankName}</span>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Customer Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Customer Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Name</span>
                <span className="font-medium">{getCustomerName(proof)}</span>
              </div>
              {proof.paymentMethod === "paypal" && (
                <>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">PayPal Email</span>
                    <span className="text-sm">{proof.customerPayPalEmail}</span>
                  </div>
                  {proof.discordName && (
                    <>
                      <Separator />
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Discord</span>
                        <span className="text-sm">{proof.discordAlias || proof.discordName}</span>
                      </div>
                    </>
                  )}
                </>
              )}
              {proof.paymentMethod === "cashapp" && (
                <>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Cashtag</span>
                    <span className="font-mono text-sm">{proof.cashtag}</span>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Screenshots Gallery */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Payment Screenshots</CardTitle>
            </CardHeader>
            <CardContent>
              <ImageGallery 
                images={proof.paymentScreenshots} 
                emptyMessage="No payment screenshots uploaded"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Delivery Screenshots</CardTitle>
            </CardHeader>
            <CardContent>
              <ImageGallery 
                images={proof.deliveryScreenshots} 
                emptyMessage="No delivery screenshots uploaded yet"
              />
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-base">Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium">Proof Created</p>
                  <p className="text-sm text-muted-foreground">
                    {formatDate(proof.createdAt)} at {formatTime(proof.createdAt)}
                  </p>
                </div>
              </div>
              {proof.updatedAt !== proof.createdAt && (
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Last Updated</p>
                    <p className="text-sm text-muted-foreground">
                      {formatDate(proof.updatedAt)} at {formatTime(proof.updatedAt)}
                    </p>
                  </div>
                </div>
              )}
              {proof.status === "completed" && (
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-emerald-700">Delivery Completed</p>
                    <p className="text-sm text-muted-foreground">
                      Product successfully delivered to customer
                    </p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Proof ID */}
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Proof ID: <span className="font-mono">{proof.id}</span>
        </p>
      </main>
    </div>
  );
}
