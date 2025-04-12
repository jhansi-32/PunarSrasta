
import { ReactNode } from "react";

interface ScanResultProps {
  result: {
    recyclable: boolean;
    type?: string;
    suggestions?: string[];
  };
}

const ScanResult = ({ result }: ScanResultProps) => {
  return (
    <div className="mt-6 border-t border-ps-green/20 pt-6 animate-fade-in">
      <h4 className="text-lg font-medium mb-3 flex items-center gap-2">
        {result.recyclable ? (
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
      
      {result.type && (
        <p className="text-sm text-foreground/70 mb-4">
          Identified as: <span className="font-medium">{result.type}</span>
        </p>
      )}
      
      {result.suggestions && result.suggestions.length > 0 && (
        <div>
          <h5 className="text-sm font-medium mb-2">
            {result.recyclable ? "Recycling Tips:" : "Creative Reuse Ideas:"}
          </h5>
          <ul className="list-disc list-inside text-sm text-foreground/70 space-y-1">
            {result.suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ScanResult;
