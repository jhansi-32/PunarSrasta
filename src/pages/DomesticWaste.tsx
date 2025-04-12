
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Scanner from "@/components/Scanner";
import Benefits from "@/components/Benefits";
import { RecycleIcon } from "lucide-react";

const DomesticWaste = () => {
  const benefits = [
    {
      title: "Reduces Landfill Waste",
      description: "Proper recycling can divert up to 75% of household waste from landfills, extending their lifespan."
    },
    {
      title: "Conserves Natural Resources",
      description: "Recycling one ton of paper saves 17 trees, 7,000 gallons of water, and 463 gallons of oil."
    },
    {
      title: "Saves Energy",
      description: "Recycling aluminum cans uses 95% less energy than making new ones from raw materials."
    },
    {
      title: "Reduces Greenhouse Gas Emissions",
      description: "Recycling reduces methane emissions from landfills and saves energy in manufacturing processes."
    },
    {
      title: "Creates Jobs",
      description: "The recycling industry creates significantly more jobs than landfilling or incinerating waste."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
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
        
        <section className="py-16 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Scanner type="domestic" />
            
            <Benefits 
              title="Benefits of Domestic Waste Recycling" 
              benefits={benefits}
            />
          </div>
          
          <div className="mt-16">
            <h2 className="text-xl font-semibold mb-6 text-ps-brown-dark">
              How to Prepare Common Household Items for Recycling
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-medium text-ps-brown-dark mb-2">Paper Products</h3>
                <ul className="text-sm text-foreground/70 space-y-2">
                  <li>• Remove plastic windows from envelopes</li>
                  <li>• Keep paper dry and clean</li>
                  <li>• Flatten cardboard boxes</li>
                  <li>• Remove tape and staples if possible</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-medium text-ps-brown-dark mb-2">Plastic Containers</h3>
                <ul className="text-sm text-foreground/70 space-y-2">
                  <li>• Rinse out food residue</li>
                  <li>• Remove lids and caps (recycle separately)</li>
                  <li>• Crush to save space</li>
                  <li>• Check for recycling symbols (#1 and #2 are most recyclable)</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-medium text-ps-brown-dark mb-2">Glass & Metal</h3>
                <ul className="text-sm text-foreground/70 space-y-2">
                  <li>• Rinse thoroughly</li>
                  <li>• Remove paper labels when possible</li>
                  <li>• Separate metal lids from glass jars</li>
                  <li>• Never put broken glass in recycling bin</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DomesticWaste;
