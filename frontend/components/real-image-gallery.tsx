"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface GalleryImage {
  id: string;
  url: string;
  caption?: string;
}

interface RealImageGalleryProps {
  images: GalleryImage[];
  emptyMessage?: string;
}

export function RealImageGallery({ images, emptyMessage = "No images uploaded" }: RealImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) {
    return (
      <div className="flex aspect-video items-center justify-center rounded-lg bg-muted">
        <div className="text-center">
          <ImageIcon className="mx-auto h-8 w-8 text-muted-foreground/50" />
          <p className="mt-2 text-sm text-muted-foreground">{emptyMessage}</p>
        </div>
      </div>
    );
  }

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const goToPrevious = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goToNext = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <>
      <div className="grid gap-2">
        {/* Main image */}
        <button
          onClick={() => openLightbox(0)}
          className="group relative aspect-video w-full overflow-hidden rounded-lg bg-muted"
        >
          <img
            src={images[0].url}
            alt={images[0].caption || "Payment proof"}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
            <ZoomIn className="h-6 w-6 text-white opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
          {images[0].caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
              <p className="text-xs text-white">{images[0].caption}</p>
            </div>
          )}
        </button>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="grid grid-cols-4 gap-2">
            {images.slice(1, 5).map((image, index) => (
              <button
                key={image.id}
                onClick={() => openLightbox(index + 1)}
                className="group relative aspect-square overflow-hidden rounded-md bg-muted"
              >
                <img
                  src={image.url}
                  alt={image.caption || `Image ${index + 2}`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
                  <ZoomIn className="h-4 w-4 text-white opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                {index === 3 && images.length > 5 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <span className="text-sm font-medium text-white">+{images.length - 5}</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        )}

        <p className="text-xs text-muted-foreground">
          {images.length} {images.length === 1 ? "image" : "images"}
        </p>
      </div>

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-4xl border-none bg-black/95 p-0">
          <div className="relative flex h-[80vh] items-center justify-center">
            <Button variant="ghost" size="icon" className="absolute right-4 top-4 z-50 text-white hover:bg-white/10"
              onClick={() => setLightboxOpen(false)}>
              <X className="h-5 w-5" />
            </Button>

            {images.length > 1 && (
              <>
                <Button variant="ghost" size="icon" className="absolute left-4 z-50 text-white hover:bg-white/10"
                  onClick={goToPrevious}>
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon" className="absolute right-4 z-50 text-white hover:bg-white/10"
                  onClick={goToNext}>
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>
            )}

            <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-12">
              <img
                src={images[currentIndex].url}
                alt={images[currentIndex].caption || `Image ${currentIndex + 1}`}
                className="max-h-full max-w-full rounded-lg object-contain"
              />
              {images[currentIndex].caption && (
                <p className="text-center text-sm text-white">{images[currentIndex].caption}</p>
              )}
            </div>

            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 w-2 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-white/40"}`}
                  />
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
