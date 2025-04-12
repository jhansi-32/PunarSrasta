
import { RecycleIcon } from "lucide-react";

const PageHeader = () => {
  return (
    <div className="bg-ps-cream py-12">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block p-2 bg-ps-green/10 rounded-lg mb-4">
            <RecycleIcon className="w-6 h-6 text-ps-green-dark" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-ps-brown-dark">
            Domestic Waste Recycling
          </h1>
          <p className="text-foreground/70">
            Our AI-powered scanner helps you identify which household items can be recycled and provides guidance on proper disposal methods.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
