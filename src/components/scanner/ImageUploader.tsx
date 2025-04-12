
import { Camera, FileImage, XCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

interface ImageUploaderProps {
  previewUrl: string | null;
  onFileSelect: (file: File) => void;
  onClearImage: () => void;
}

const ImageUploader = ({ previewUrl, onFileSelect, onClearImage }: ImageUploaderProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!validTypes.includes(file.type)) {
        toast({
          title: "Invalid File Type",
          description: "Please upload a JPEG, PNG, or WebP image.",
          variant: "destructive"
        });
        return;
      }

      if (file.size > maxSize) {
        toast({
          title: "File Too Large",
          description: "Image must be less than 5MB.",
          variant: "destructive"
        });
        return;
      }

      onFileSelect(file);
    }
  };

  const captureImage = () => {
    toast({
      title: "Camera functionality",
      description: "This feature would open your device camera in a real implementation",
    });
  };

  return (
    <div className="w-full max-w-sm">
      {previewUrl ? (
        <div className="relative w-full">
          <img 
            src={previewUrl} 
            alt="Preview" 
            className="w-full h-48 object-cover rounded-lg border border-ps-green/30"
          />
          <Button
            variant="outline"
            size="sm"
            className="absolute top-2 right-2 bg-white/80 hover:bg-white"
            onClick={onClearImage}
          >
            Change
          </Button>
        </div>
      ) : (
        <>
          <Input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <div className="flex flex-col gap-3 justify-center items-center border-2 border-dashed border-ps-green/30 rounded-lg p-8 hover:border-ps-green/50 transition-colors">
            <FileImage className="w-12 h-12 text-ps-green-dark/50" />
            <p className="text-sm text-foreground/70 text-center">
              Drag and drop your image here or click to browse
            </p>
            <div className="flex gap-3 mt-2">
              <Button 
                variant="outline" 
                onClick={() => document.getElementById("image-upload")?.click()}
              >
                Browse Files
              </Button>
              <Button 
                variant="outline"
                onClick={captureImage}
              >
                <Camera className="w-4 h-4 mr-2" />
                Capture
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ImageUploader;
