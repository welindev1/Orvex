"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Loader2, Save, Trash2, ImageIcon, X, Upload, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  fetchProofById, updateProof, deleteProof, uploadFiles,
  formatPaymentMethod, type Proof, type ProofStatus,
} from "@/lib/api";
import { useAuth } from "@/hooks/use-auth";

const API_BASE = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') ?? 'http://localhost:3001';

interface UploadedImage {
  id: string;
  file?: File;
  url?: string;
  preview: string;
  caption: string;
  isExisting: boolean;
}

export default function EditProofPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const { token } = useAuth();

  const [proof, setProof] = useState<Proof | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState("");

  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState<ProofStatus>("PENDING");
  const [deliveryNote, setDeliveryNote] = useState("");
  const [paymentScreenshots, setPaymentScreenshots] = useState<UploadedImage[]>([]);
  const [deliveryScreenshots, setDeliveryScreenshots] = useState<UploadedImage[]>([]);

  useEffect(() => {
    fetchProofById(id)
      .then((p) => {
        setProof(p);
        setProductName(p.productName);
        setDescription(p.description || "");
        setAmount(p.amount.toString());
        setStatus(p.status);
        setDeliveryNote(p.deliveryNote || "");
        setPaymentScreenshots(
          p.paymentScreenshots.map((img) => ({
            id: img.id, url: img.url, preview: `${API_BASE}${img.url}`,
            caption: img.caption || "", isExisting: true,
          }))
        );
        setDeliveryScreenshots(
          p.deliveryScreenshots.map((img) => ({
            id: img.id, url: img.url, preview: `${API_BASE}${img.url}`,
            caption: img.caption || "", isExisting: true,
          }))
        );
      })
      .catch(() => setError("Proof not found"))
      .finally(() => setIsLoading(false));
  }, [id]);

  const handleFileSelect = (
    files: FileList | null,
    setter: React.Dispatch<React.SetStateAction<UploadedImage[]>>,
    current: UploadedImage[],
    max: number
  ) => {
    if (!files) return;
    const toAdd = Array.from(files).slice(0, max - current.length);
    const newImgs: UploadedImage[] = toAdd.map((file) => ({
      id: `new_${Date.now()}_${Math.random().toString(36).slice(2)}`,
      file, preview: URL.createObjectURL(file), caption: "", isExisting: false,
    }));
    setter([...current, ...newImgs]);
  };

  const removeImage = (
    imgId: string,
    setter: React.Dispatch<React.SetStateAction<UploadedImage[]>>,
    images: UploadedImage[]
  ) => {
    const img = images.find((i) => i.id === imgId);
    if (img && !img.isExisting && img.preview) URL.revokeObjectURL(img.preview);
    setter(images.filter((i) => i.id !== imgId));
  };

  const updateCaption = (
    imgId: string, caption: string,
    setter: React.Dispatch<React.SetStateAction<UploadedImage[]>>,
    images: UploadedImage[]
  ) => setter(images.map((i) => (i.id === imgId ? { ...i, caption } : i)));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;
    setIsSubmitting(true);
    setError("");

    try {
      // Upload new files
      const newPaymentFiles = paymentScreenshots.filter((i) => !i.isExisting && i.file).map((i) => i.file!);
      const newDeliveryFiles = deliveryScreenshots.filter((i) => !i.isExisting && i.file).map((i) => i.file!);

      const uploadedPaymentUrls = newPaymentFiles.length ? await uploadFiles(newPaymentFiles) : [];
      const uploadedDeliveryUrls = newDeliveryFiles.length ? await uploadFiles(newDeliveryFiles) : [];

      // Map all screenshots (existing keep URL, new use uploaded URL)
      let newPaymentIdx = 0;
      const allPayment = paymentScreenshots.map((img) => ({
        url: img.isExisting ? img.url! : uploadedPaymentUrls[newPaymentIdx++],
        caption: img.caption || undefined,
      }));

      let newDeliveryIdx = 0;
      const allDelivery = deliveryScreenshots.map((img) => ({
        url: img.isExisting ? img.url! : uploadedDeliveryUrls[newDeliveryIdx++],
        caption: img.caption || undefined,
      }));

      await updateProof(id, {
        productName,
        description: description || undefined,
        amount: parseFloat(amount),
        status,
        deliveryNote: deliveryNote || undefined,
        paymentScreenshots: allPayment,
        deliveryScreenshots: allDelivery,
      }, token);

      router.push("/dashboard");
    } catch (err: any) {
      setError(err?.message || "Failed to save changes.");
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!token) return;
    setIsDeleting(true);
    try {
      await deleteProof(id, token);
      router.push("/dashboard");
    } catch (err: any) {
      setError(err?.message || "Failed to delete proof.");
      setIsDeleting(false);
    }
  };

  const ImageUploadSection = ({
    label, description, images, setImages, maxImages,
  }: {
    label: string; description: string;
    images: UploadedImage[]; setImages: React.Dispatch<React.SetStateAction<UploadedImage[]>>; maxImages: number;
  }) => (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium">{label}</p>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
        {images.length < maxImages && (
          <label className="cursor-pointer">
            <Button type="button" variant="outline" size="sm" className="gap-2" asChild>
              <span><Plus className="h-4 w-4" />Add Image</span>
            </Button>
            <input type="file" accept="image/*" multiple className="hidden"
              onChange={(e) => handleFileSelect(e.target.files, setImages, images, maxImages)} />
          </label>
        )}
      </div>

      {images.length === 0 ? (
        <label className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-input bg-muted/40 p-6 transition-colors hover:bg-muted">
          <Upload className="mb-2 h-6 w-6 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">Drop images here or click to upload</p>
          <p className="mt-1 text-xs text-muted-foreground">0/{maxImages} images</p>
          <input type="file" accept="image/*" multiple className="hidden"
            onChange={(e) => handleFileSelect(e.target.files, setImages, images, maxImages)} />
        </label>
      ) : (
        <div className="space-y-2">
          {images.map((image, index) => (
            <div key={image.id} className="flex items-start gap-3 rounded-lg border bg-card p-3">
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md bg-muted">
                {image.preview ? (
                  <img src={image.preview} alt={`Preview ${index + 1}`} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <ImageIcon className="h-6 w-6 text-muted-foreground/50" />
                  </div>
                )}
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <p className="truncate text-sm font-medium">
                    {image.isExisting ? `Image ${index + 1}` : image.file?.name}
                  </p>
                  {image.isExisting && <Badge variant="secondary" className="text-xs">Existing</Badge>}
                </div>
                <Input
                  placeholder="Add a caption (optional)"
                  value={image.caption}
                  onChange={(e) => updateCaption(image.id, e.target.value, setImages, images)}
                  className="h-8 text-sm"
                />
              </div>
              <Button type="button" variant="ghost" size="icon" className="h-8 w-8 shrink-0 text-muted-foreground hover:text-destructive"
                onClick={() => removeImage(image.id, setImages, images)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <p className="text-xs text-muted-foreground">{images.length}/{maxImages} images</p>
        </div>
      )}
    </div>
  );

  if (isLoading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!proof) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <div className="text-center">
          <h2 className="text-lg font-semibold">Proof not found</h2>
          <p className="mt-1 text-sm text-muted-foreground">The proof you are looking for does not exist.</p>
          <Link href="/dashboard"><Button className="mt-4">Back to Dashboard</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Edit Proof</h1>
            <p className="text-sm text-muted-foreground">Update proof details and add delivery screenshots</p>
          </div>
        </div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2 text-destructive hover:bg-destructive hover:text-destructive-foreground">
              <Trash2 className="h-4 w-4" />Delete
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete this proof?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. All screenshots will also be deleted.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                {isDeleting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Deleting...</> : "Delete"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      {error && (
        <div className="rounded-md bg-destructive/10 px-4 py-3 text-sm text-destructive">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Status */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Status</CardTitle>
            <CardDescription>Update the delivery status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select value={status} onValueChange={(v) => setStatus(v as ProofStatus)}>
              <SelectTrigger className="w-48"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="PENDING">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-amber-500" />Pending
                  </div>
                </SelectItem>
                <SelectItem value="COMPLETED">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />Completed
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>

            <div className="space-y-2">
              <Label htmlFor="deliveryNote">Delivery Note</Label>
              <Textarea
                id="deliveryNote"
                placeholder='e.g., "Delivered via Discord DM on April 18"'
                rows={2}
                value={deliveryNote}
                onChange={(e) => setDeliveryNote(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Product Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Product Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="productName">Product Name</Label>
              <Input id="productName" value={productName} onChange={(e) => setProductName(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows={3} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount">Amount (USD)</Label>
              <Input id="amount" type="number" step="0.01" min="0" value={amount} onChange={(e) => setAmount(e.target.value)} required />
            </div>
          </CardContent>
        </Card>

        {/* Payment Details (Read-only) */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Payment Details</CardTitle>
            <CardDescription>Payment information cannot be modified</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between rounded-lg bg-muted p-3">
              <span className="text-sm text-muted-foreground">Payment Method</span>
              <Badge variant="secondary">{formatPaymentMethod(proof.paymentMethod)}</Badge>
            </div>
            {proof.paymentMethod === "PAYPAL" && (
              <>
                <div className="flex items-center justify-between rounded-lg bg-muted p-3">
                  <span className="text-sm text-muted-foreground">PayPal Email</span>
                  <span className="text-sm">{proof.customerPayPalEmail}</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-muted p-3">
                  <span className="text-sm text-muted-foreground">PayPal Name</span>
                  <span className="text-sm">{proof.payPalName}</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-muted p-3">
                  <span className="text-sm text-muted-foreground">Transaction ID</span>
                  <span className="font-mono text-sm">{proof.transactionId}</span>
                </div>
              </>
            )}
            {proof.paymentMethod === "CASHAPP" && (
              <>
                <div className="flex items-center justify-between rounded-lg bg-muted p-3">
                  <span className="text-sm text-muted-foreground">Cashtag</span>
                  <span className="font-mono text-sm">{proof.cashtag}</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-muted p-3">
                  <span className="text-sm text-muted-foreground">Customer Name</span>
                  <span className="text-sm">{proof.customerName}</span>
                </div>
              </>
            )}
            {proof.paymentMethod === "BANK" && (
              <>
                <div className="flex items-center justify-between rounded-lg bg-muted p-3">
                  <span className="text-sm text-muted-foreground">Bank Name</span>
                  <span className="text-sm">{proof.bankName}</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-muted p-3">
                  <span className="text-sm text-muted-foreground">Account</span>
                  <span className="font-mono text-sm">****{proof.accountLast4}</span>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Screenshots */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Screenshots</CardTitle>
            <CardDescription>Manage payment and delivery proof screenshots</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <ImageUploadSection
              label="Payment Screenshots" description="Screenshots of the payment confirmation"
              images={paymentScreenshots} setImages={setPaymentScreenshots} maxImages={5}
            />
            <Separator />
            <ImageUploadSection
              label="Delivery Screenshots" description="Screenshots proving the product was delivered"
              images={deliveryScreenshots} setImages={setDeliveryScreenshots} maxImages={10}
            />
          </CardContent>
        </Card>

        {/* Submit */}
        <div className="flex items-center justify-end gap-4">
          <Link href="/dashboard">
            <Button type="button" variant="outline">Cancel</Button>
          </Link>
          <Button type="submit" disabled={isSubmitting} className="gap-2">
            {isSubmitting ? (
              <><Loader2 className="h-4 w-4 animate-spin" />Saving...</>
            ) : (
              <><Save className="h-4 w-4" />Save Changes</>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
