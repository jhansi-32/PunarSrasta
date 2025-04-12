import { Camera, FileImage, Loader2, XCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { v4 as uuidv4 } from 'uuid';

interface ScannerProps {
  type: "domestic" | "plastic";
}

const Scanner = ({ type }: ScannerProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [scanError, setScanError] = useState<string | null>(null);
  const [scanResult, setScanResult] = useState<null | {
    recyclable: boolean;
    type?: string;
    suggestions?: string[];
  }>(null);

  const mockDomesticResults = [
    {
      recyclable: true,
      type: "Paper",
      suggestions: [
        "Recycle with other paper products",
        "Remove any plastic or metal parts first",
        "Flatten to save space in recycling bin"
      ]
    },
    {
      recyclable: false,
      type: "Mixed Materials",
      suggestions: [
        "Not recyclable in standard facilities",
        "Check with local specialized recycling centers",
        "Consider reusing for other purposes"
      ]
    }
  ];

  const mockPlasticResults = [
    {
      recyclable: false,
      type: "Type 7 Plastic",
      suggestions: [
        "Create a decorative planter",
        "Use as storage containers",
        "Make a bird feeder",
        "Create jewelry or accessories"
      ]
    },
    {
      recyclable: true,
      type: "Type 1 PET Plastic",
      suggestions: [
        "Recycle with other plastic containers",
        "Remove labels and rinse clean",
        "Crush to save space in recycling bin"
      ]
    }
  ];

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

      setSelectedFile(file);
      setScanError(null);
      setScanResult(null);
      
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result as string);
      };
      fileReader.readAsDataURL(file);
    }
  };

  const uploadImageToSupabase = async (file: File): Promise<string | null> => {
    try {
      setIsUploading(true);
      
      const fileExt = file.name.split('.').pop();
      const fileName = `${uuidv4()}.${fileExt}`;
      const filePath = `${type}/${fileName}`;
      
      const { data, error } = await supabase.storage
        .from('waste_images')
        .upload(filePath, file);
        
      if (error) {
        throw error;
      }
      
      const { data: { publicUrl } } = supabase.storage
        .from('waste_images')
        .getPublicUrl(filePath);
        
      return publicUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      toast({
        title: "Upload Failed",
        description: "There was an error uploading your image.",
        variant: "destructive"
      });
      setScanError("Image upload failed");
      return null;
    } finally {
      setIsUploading(false);
    }
  };

  const saveScanResult = async (imagePath: string, result: any) => {
    try {
      const { error } = await supabase
        .from('waste_items')
        .insert({
          name: type === 'domestic' ? result.type : `${result.type} Container`,
          type: type,
          recyclable: result.recyclable,
          image_path: imagePath
        });
        
      if (error) {
        throw error;
      }
      
      console.log('Scan result saved successfully');
    } catch (error) {
      console.error('Error saving scan result:', error);
    }
  };

  const scanImage = async () => {
    if (!selectedFile) {
      toast({
        title: "No Image Selected",
        description: "Please select an image to scan.",
        variant: "destructive"
      });
      return;
    }

    setIsScanning(true);
    setScanError(null);
    setScanResult(null);
    
    try {
      const imagePath = await uploadImageToSupabase(selectedFile);
      
      if (!imagePath) {
        throw new Error('Failed to upload image');
      }
      
      setTimeout(async () => {
        let result;
        if (type === "domestic") {
          result = Math.random() > 0.2 
            ? mockDomesticResults[Math.floor(Math.random() * mockDomesticResults.length)]
            : null;
        } else {
          result = Math.random() > 0.2 
            ? mockPlasticResults[Math.floor(Math.random() * mockPlasticResults.length)]
            : null;
        }
        
        if (!result) {
          setScanError("Unable to classify the image. Please try a different image.");
          setScanResult(null);
        } else {
          setScanResult(result);
          await saveScanResult(imagePath, result);
        }
        
        setIsScanning(false);
      }, 2000);
    } catch (error) {
      console.error('Scan failed:', error);
      setScanError("Scan failed. Please try again.");
      setIsScanning(false);
    }
  };

  const captureImage = () => {
    toast({
      title: "Camera functionality",
      description: "This feature would open your device camera in a real implementation",
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4 text-center text-ps-brown-dark">
        {type === "domestic" ? "Domestic Waste Scanner" : "Plastic Waste Scanner"}
      </h3>
      
      <div className="mb-6">
        <p className="text-foreground/70 text-sm mb-4 text-center">
          {type === "domestic" 
            ? "Upload an image of your domestic waste to check if it's recyclable" 
            : "Upload an image of your plastic waste to get creative reuse ideas"}
        </p>
        
        <div className="flex flex-col items-center gap-4">
          {previewUrl ? (
            <div className="relative w-full max-w-sm">
              <img 
                src={previewUrl} 
                alt="Preview" 
                className="w-full h-48 object-cover rounded-lg border border-ps-green/30"
              />
              <Button
                variant="outline"
                size="sm"
                className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                onClick={() => {
                  setSelectedFile(null);
                  setPreviewUrl(null);
                  setScanResult(null);
                  setScanError(null);
                }}
              >
                Change
              </Button>
            </div>
          ) : (
            <div className="w-full max-w-sm">
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
            </div>
          )}
          
          {previewUrl && !scanResult && (
            <Button 
              onClick={scanImage} 
              disabled={isScanning || isUploading}
              className="bg-ps-green hover:bg-ps-green-dark"
            >
              {isScanning || isUploading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  {isUploading ? "Uploading..." : "Scanning..."}
                </>
              ) : (
                "Scan Image"
              )}
            </Button>
          )}
        </div>
      </div>
      
      {scanError && (
        <div className="mt-6 border-t border-ps-green/20 pt-6 animate-fade-in text-center text-destructive">
          <div className="flex items-center justify-center gap-2 text-orange-600">
            <XCircle className="w-6 h-6" />
            <p className="text-sm">{scanError}</p>
          </div>
        </div>
      )}

      {scanResult && (
        <div className="mt-6 border-t border-ps-green/20 pt-6 animate-fade-in">
          <h4 className="text-lg font-medium mb-3 flex items-center gap-2">
            {scanResult.recyclable ? (
              <>
                <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">✓</span>
                <span className="text-green-600">Recyclable</span>
              </>
            ) : (
              <>
                <span className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white">!</span>
                <span className="text-orange-600">Not Traditionally Recyclable</span>
              </>
            )}
          </h4>
          
          {scanResult.type && (
            <p className="text-sm text-foreground/70 mb-4">
              Identified as: <span className="font-medium">{scanResult.type}</span>
            </p>
          )}
          
          {scanResult.suggestions && scanResult.suggestions.length > 0 && (
            <div>
              <h5 className="text-sm font-medium mb-2">
                {scanResult.recyclable ? "Recycling Tips:" : "Creative Reuse Ideas:"}
              </h5>
              <ul className="list-disc list-inside text-sm text-foreground/70 space-y-1">
                {scanResult.suggestions.map((suggestion, index) => (
                  <li key={index}>{suggestion}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Scanner;
