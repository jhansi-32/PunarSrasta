
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Scanner from "@/components/Scanner";
import Benefits from "@/components/Benefits";
import { Package } from "lucide-react";

const PlasticWaste = () => {
  const benefits = [
    {
      title: "Reduces Environmental Pollution",
      description: "Creative reuse prevents plastic from ending up in oceans, waterways, and landfills."
    },
    {
      title: "Conserves Resources",
      description: "Reusing plastics reduces the need for new plastic production, saving oil and energy."
    },
    {
      title: "Develops Creativity",
      description: "Turning plastic waste into art and functional items sparks innovation and creative thinking."
    },
    {
      title: "Builds Community",
      description: "Upcycling workshops bring people together to solve waste problems collaboratively."
    },
    {
      title: "Creates Economic Opportunities",
      description: "Handicrafts made from waste plastic can become sources of income for local artisans."
    }
  ];

  const craftIdeas = [
    {
      title: "Plastic Bottle Planters",
      description: "Cut bottles in half and decorate them for unique indoor or hanging gardens."
    },
    {
      title: "Plastic Bag Weaving",
      description: "Cut plastic bags into strips and weave them into durable mats, baskets, or bags."
    },
    {
      title: "Bottle Cap Art",
      description: "Collect colorful bottle caps to create mosaics, jewelry, or decorative wall pieces."
    },
    {
      title: "Plastic Spoon Lamps",
      description: "Attach cleaned plastic spoons to a lampshade frame for an elegant lighting fixture."
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
                <Package className="w-6 h-6 text-ps-green-dark" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-4 text-ps-brown-dark">
                Plastic Waste Upcycling
              </h1>
              <p className="text-foreground/70">
                Discover creative ways to transform non-recyclable plastic into beautiful and useful handicrafts with our AI-powered suggestions.
              </p>
            </div>
          </div>
        </div>
        
        <section className="py-16 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Scanner type="plastic" />
            
            <Benefits 
              title="Benefits of Plastic Upcycling" 
              benefits={benefits}
            />
          </div>
          
          <div className="mt-16">
            <h2 className="text-xl font-semibold mb-6 text-ps-brown-dark">
              Popular Plastic Upcycling Ideas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {craftIdeas.map((idea, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="font-medium text-ps-brown-dark mb-2">{idea.title}</h3>
                  <p className="text-sm text-foreground/70">{idea.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-ps-green/10 rounded-xl p-6">
              <h3 className="font-medium text-ps-brown-dark mb-2">Plastic Types</h3>
              <p className="text-sm text-foreground/70 mb-4">
                Not all plastics are created equal. Each type has different properties that make them suitable for different upcycling projects:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="text-sm font-medium">PET (Type 1)</h4>
                  <p className="text-xs text-foreground/70">Water bottles, soft drink containers. Good for making yarn, fabric crafts.</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="text-sm font-medium">HDPE (Type 2)</h4>
                  <p className="text-xs text-foreground/70">Milk jugs, detergent bottles. Sturdy for planters and storage containers.</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="text-sm font-medium">PVC (Type 3)</h4>
                  <p className="text-xs text-foreground/70">Pipes, garden hoses. Durable for outdoor projects and structures.</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="text-sm font-medium">LDPE (Type 4)</h4>
                  <p className="text-xs text-foreground/70">Grocery bags, bread bags. Great for weaving and yarn making.</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="text-sm font-medium">PP (Type 5)</h4>
                  <p className="text-xs text-foreground/70">Yogurt cups, bottle caps. Good for colorful mosaics and decorations.</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="text-sm font-medium">PS (Type 6)</h4>
                  <p className="text-xs text-foreground/70">Foam cups, food containers. Can be melted (with caution) for art projects.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PlasticWaste;
