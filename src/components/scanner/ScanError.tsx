
import { XCircle } from "lucide-react";

interface ScanErrorProps {
  error: string;
}

const ScanError = ({ error }: ScanErrorProps) => {
  return (
    <div className="mt-6 border-t border-ps-green/20 pt-6 animate-fade-in text-center text-destructive">
      <div className="flex items-center justify-center gap-2 text-orange-600">
        <XCircle className="w-6 h-6" />
        <p className="text-sm">{error}</p>
      </div>
    </div>
  );
};

export default ScanError;
