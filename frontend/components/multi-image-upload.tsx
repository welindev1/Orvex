"use client";

import { useState, useCallback } from "react";
import { Upload, X, ImageIcon, GripVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface UploadedImage {
  id: string;
  file: File;
  preview: string;
  caption: string;
}

interface MultiImageUploadProps {
  label: string;
  description?: string;
  images: UploadedImage[];
  onChange: (images: UploadedImage[]) => void;
  maxImages?: number;
}

export function MultiImageUpload({
  label,
  description,
  images,
  onChange,
  maxImages = 10,
}: MultiImageUploadProps) {
  const [dragOver, setDragOver] = useState(false);

  const handleFileSelect = useCallback(
    (files: FileList | null) => {
      if (!files) return;
      
      const remainingSlots = maxImages - images.length;
      const filesToAdd = Array.from(files).slice(0, remainingSlots);
      
      const newImages: UploadedImage[] = filesToAdd.map((file) => ({
        id: `img_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
        file,
        preview: URL.createObjectURL(file),
        caption: "",
      }));
      
      onChange([...images, ...newImages]);
    },
    [images, maxImages, onChange]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      handleFileSelect(e.dataTransfer.files);
    },
    [handleFileSelect]
  );

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const removeImage = (id: string) => {
    const imageToRemove = images.find((img) => img.id === id);
    if (imageToRemove) {
      URL.revokeObjectURL(imageToRemove.preview);
    }
    onChange(images.filter((img) => img.id !== id));
  };

  const updateCaption = (id: string, caption: string) => {
    onChange(images.map((img) => (img.id === id ? { ...img, caption } : img)));
  };

  const canAddMore = images.length < maxImages;

  return (
    <div className="space-y-3">
      <div>
        <p className="text-sm font-medium">{label}</p>
        {description && <p className="text-xs text-muted-foreground">{description}</p>}
      </div>

      {/* Upload area */}
      {canAddMore && (
        <label
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 transition-colors ${
            dragOver
              ? "border-primary bg-primary/5"
              : "border-input bg-muted/40 hover:bg-muted"
          }`}
        >
          <Upload className="mb-2 h-6 w-6 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            Drop images here or click to upload
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {images.length}/{maxImages} images
          </p>
          <input
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => handleFileSelect(e.target.files)}
          />
        </label>
      )}

      {/* Image list */}
      {images.length > 0 && (
        <div className="space-y-2">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="flex items-start gap-3 rounded-lg border bg-card p-3"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center text-muted-foreground">
                <GripVertical className="h-4 w-4" />
              </div>
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md bg-muted">
                {image.preview ? (
                  <img
                    src={image.preview}
                    alt={`Preview ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <ImageIcon className="h-6 w-6 text-muted-foreground/50" />
                  </div>
                )}
              </div>
              <div className="flex-1 space-y-2">
                <p className="truncate text-sm font-medium">{image.file.name}</p>
                <Input
                  placeholder="Add a caption (optional)"
                  value={image.caption}
                  onChange={(e) => updateCaption(image.id, e.target.value)}
                  className="h-8 text-sm"
                />
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8 shrink-0 text-muted-foreground hover:text-destructive"
                onClick={() => removeImage(image.id)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
