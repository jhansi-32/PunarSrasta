
import { Home, Leaf, Package } from "lucide-react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import RecycleIcon from "@/components/icons/RecycleIcon";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <section className="py-16 container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block p-2 bg-ps-green/10 rounded-lg mb-4">
              <RecycleIcon className="w-6 h-6 text-ps-green-dark" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-ps-brown-dark">
              Our Recycling Solutions
            </h2>
            <p className="text-foreground/70">
              Explore our three specialized recycling programs designed to transform waste into resources through AI-driven solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <CategoryCard
              title="Domestic Waste"
              description="Scan your household items to check recyclability and get proper disposal methods."
              icon={Home}
              to="/domestic-waste"
            />
            
            <CategoryCard
              title="Dry Leaves"
              description="Turn fallen leaves into valuable manure with our community collection service."
              icon={Leaf}
              to="/dry-leaves"
            />
            
            <CategoryCard
              title="Plastic Waste"
              description="Discover creative ways to repurpose non-recyclable plastics into useful crafts."
              icon={Package}
              to="/plastic-waste"
            />
          </div>
        </section>
        
        <section className="py-16 bg-ps-green/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-ps-brown-dark">
                  Why Choose PunarSrasta?
                </h2>
                <p className="text-foreground/70 mb-6">
                  At PunarSrasta, we're revolutionizing waste management through innovative AI technology and community engagement. Our platform offers:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">AI-Powered Recycling Guidance</span>
                      <p className="text-sm text-foreground/70">Instant identification of recyclability and sustainable disposal options.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Community Waste Collection</span>
                      <p className="text-sm text-foreground/70">Coordinated pickup services that transform waste into valuable resources.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Creative Upcycling Ideas</span>
                      <p className="text-sm text-foreground/70">Innovative suggestions to give new life to non-recyclable materials.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="relative">
                <div className="aspect-video bg-white rounded-xl shadow-md overflow-hidden flex items-center justify-center">
                  <RecycleIcon className="w-24 h-24 text-ps-green/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-center text-ps-green font-medium bg-white px-4 py-2 rounded-lg shadow-sm">
                      Waste isn't the end - it's a new beginning
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-ps-brown/20 rounded-full -z-10" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-ps-green/30 rounded-full -z-10" />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Helper component for the check icon
const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={`w-5 h-5 text-ps-green-dark ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default Index;
