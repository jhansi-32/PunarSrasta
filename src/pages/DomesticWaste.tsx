
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Scanner from "@/components/Scanner";
import Benefits from "@/components/Benefits";
import PageHeader from "@/components/domestic/PageHeader";
import RecyclingTips from "@/components/domestic/RecyclingTips";

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
        <PageHeader />
        
        <section className="py-16 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Scanner type="domestic" />
            
            <Benefits 
              title="Benefits of Domestic Waste Recycling" 
              benefits={benefits}
            />
          </div>
          
          <RecyclingTips />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DomesticWaste;
