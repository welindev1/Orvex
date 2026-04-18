"use client";

import Link from "next/link";
import { Plus, Search, MoreHorizontal, ExternalLink, Pencil, Loader2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  fetchProofs, deleteProof, getCustomerName, getTransactionIdentifier,
  formatPaymentMethod, type Proof,
} from "@/lib/api";
import { useAuth } from "@/hooks/use-auth";
import { useState, useEffect } from "react";

export default function DashboardPage() {
  const { token } = useAuth();
  const [proofs, setProofs] = useState<Proof[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    fetchProofs()
      .then(setProofs)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  const filteredProofs = proofs.filter((proof) => {
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

  const handleDelete = async (id: string) => {
    if (!token) return;
    setDeletingId(id);
    try {
      await deleteProof(id, token);
      setProofs((prev) => prev.filter((p) => p.id !== id));
    } catch (e) {
      console.error(e);
    } finally {
      setDeletingId(null);
    }
  };

  const formatAmount = (amount: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);

  const total = proofs.length;
  const completed = proofs.filter((p) => p.status === "COMPLETED").length;
  const pending = proofs.filter((p) => p.status === "PENDING").length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Payment Proofs</h1>
          <p className="text-sm text-muted-foreground">
            Manage and track your digital product delivery proofs
          </p>
        </div>
        <Link href="/dashboard/create">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Create Proof
          </Button>
        </Link>
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search proofs..."
          className="pl-9"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border bg-card p-4">
          <p className="text-sm text-muted-foreground">Total Proofs</p>
          <p className="text-2xl font-semibold">{total}</p>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <p className="text-sm text-muted-foreground">Completed</p>
          <p className="text-2xl font-semibold">{completed}</p>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <p className="text-sm text-muted-foreground">Pending</p>
          <p className="text-2xl font-semibold">{pending}</p>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-lg border bg-card">
        {isLoading ? (
          <div className="flex justify-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Payment Method</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Transaction ID</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProofs.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="h-24 text-center text-muted-foreground">
                    No proofs found.
                  </TableCell>
                </TableRow>
              ) : (
                filteredProofs.map((proof) => (
                  <TableRow key={proof.id}>
                    <TableCell className="font-medium">{proof.productName}</TableCell>
                    <TableCell>{getCustomerName(proof)}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{formatPaymentMethod(proof.paymentMethod)}</Badge>
                    </TableCell>
                    <TableCell>{formatAmount(proof.amount)}</TableCell>
                    <TableCell>
                      <Badge
                        variant={proof.status === "COMPLETED" ? "default" : "outline"}
                        className={
                          proof.status === "COMPLETED"
                            ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
                            : "border-amber-300 bg-amber-50 text-amber-700 hover:bg-amber-50"
                        }
                      >
                        {proof.status === "COMPLETED" ? "Completed" : "Pending"}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-mono text-sm text-muted-foreground">
                      {getTransactionIdentifier(proof)}
                    </TableCell>
                    <TableCell>
                      <AlertDialog>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <Link href={`/dashboard/edit/${proof.id}`}>
                              <DropdownMenuItem>
                                <Pencil className="mr-2 h-4 w-4" />
                                Edit Proof
                              </DropdownMenuItem>
                            </Link>
                            <Link href={`/proof/${proof.id}`}>
                              <DropdownMenuItem>
                                <ExternalLink className="mr-2 h-4 w-4" />
                                View Public Page
                              </DropdownMenuItem>
                            </Link>
                            <DropdownMenuSeparator />
                            <AlertDialogTrigger asChild>
                              <DropdownMenuItem className="text-destructive focus:text-destructive">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete
                              </DropdownMenuItem>
                            </AlertDialogTrigger>
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete this proof?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will permanently delete the proof record and all associated screenshots.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDelete(proof.id)}
                              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                            >
                              {deletingId === proof.id ? (
                                <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Deleting...</>
                              ) : "Delete"}
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}
