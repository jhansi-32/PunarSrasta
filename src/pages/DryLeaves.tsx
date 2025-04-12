
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeafForm from "@/components/LeafForm";
import Benefits from "@/components/Benefits";
import { Leaf } from "lucide-react";

const DryLeaves = () => {
  const benefits = [
    {
      title: "Enhanced Soil Structure",
      description: "Leaf compost improves soil aeration, drainage, and water retention capacity."
    },
    {
      title: "Natural Nutrient Source",
      description: "Provides essential nutrients like nitrogen, phosphorus, and potassium for plant growth."
    },
    {
      title: "Waste Reduction",
      description: "Diverts leaves from landfills where they would generate methane, a potent greenhouse gas."
    },
    {
      title: "Carbon Sequestration",
      description: "Composting leaves returns carbon to the soil rather than releasing it as CO2 when burned."
    },
    {
      title: "Reduced Need for Chemical Fertilizers",
      description: "Natural leaf manure decreases dependence on synthetic fertilizers that can harm water bodies."
    },
    {
      title: "Supports Biodiversity",
      description: "Creates a healthy habitat for beneficial soil organisms that contribute to plant health."
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
                <Leaf className="w-6 h-6 text-ps-green-dark" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-4 text-ps-brown-dark">
                Dry Leaves Collection & Composting
              </h1>
              <p className="text-foreground/70">
                Our community leaf collection service transforms fallen leaves into valuable manure, supporting local nurseries and gardens.
              </p>
            </div>
          </div>
        </div>
        
        <section className="py-16 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="order-2 md:order-1">
              <Benefits 
                title="Benefits of Leaf Composting" 
                benefits={benefits}
              />
              
              <div className="mt-8 bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4 text-ps-brown-dark">
                  Our Process
                </h3>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <div className="bg-ps-green-light/30 text-ps-green-dark w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-ps-brown-dark">Collection</h4>
                      <p className="text-sm text-foreground/70">Our team collects dry leaves from your location at a scheduled time.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-ps-green-light/30 text-ps-green-dark w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-ps-brown-dark">Processing</h4>
                      <p className="text-sm text-foreground/70">Leaves are shredded and mixed with other organic materials at our partner nurseries.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-ps-green-light/30 text-ps-green-dark w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium text-ps-brown-dark">Composting</h4>
                      <p className="text-sm text-foreground/70">The mixture is allowed to decompose naturally over 3-4 months with regular turning.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-ps-green-light/30 text-ps-green-dark w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium text-ps-brown-dark">Distribution</h4>
                      <p className="text-sm text-foreground/70">The resulting manure is used in nurseries or returned to community members who request it.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <LeafForm />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DryLeaves;
