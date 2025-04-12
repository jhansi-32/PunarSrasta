
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import ImageUploader from "@/components/scanner/ImageUploader";
import ScanResult from "@/components/scanner/ScanResult";
import ScanError from "@/components/scanner/ScanError";
import { 
  mockDomesticResults, 
  mockPlasticResults,
  uploadImageToSupabase,
  saveScanResult
} from "@/components/scanner/scannerUtils";

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

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    setScanError(null);
    setScanResult(null);
    
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result as string);
    };
    fileReader.readAsDataURL(file);
  };

  const handleClearImage = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setScanResult(null);
    setScanError(null);
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
    setIsUploading(true);
    
    try {
      const imagePath = await uploadImageToSupabase(selectedFile, type);
      setIsUploading(false);
      
      if (!imagePath) {
        throw new Error('Failed to upload image');
      }
      
      // Simulate API call with delay
      setTimeout(async () => {
        // Simulate random success/failure (80% success rate)
        if (Math.random() > 0.2) {
          let result;
          if (type === "domestic") {
            result = mockDomesticResults[Math.floor(Math.random() * mockDomesticResults.length)];
          } else {
            result = mockPlasticResults[Math.floor(Math.random() * mockPlasticResults.length)];
          }
          
          setScanResult(result);
          await saveScanResult(imagePath, result, type);
        } else {
          setScanError("Unable to classify the image. Please try a different image.");
        }
        
        setIsScanning(false);
      }, 2000);
    } catch (error) {
      console.error('Scan failed:', error);
      setScanError("Scan failed. Please try again.");
      setIsScanning(false);
      setIsUploading(false);
    }
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
          <ImageUploader 
            previewUrl={previewUrl}
            onFileSelect={handleFileSelect}
            onClearImage={handleClearImage}
          />
          
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
      
      {scanError && <ScanError error={scanError} />}
      {scanResult && <ScanResult result={scanResult} />}
    </div>
  );
};

export default Scanner;
