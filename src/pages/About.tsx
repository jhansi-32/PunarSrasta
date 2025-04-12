
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecycleIcon from "@/components/icons/RecycleIcon";

const About = () => {
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
                About PunarSrasta
              </h1>
              <p className="text-foreground/70">
                Learn about our mission to revolutionize waste management through technology and community engagement.
              </p>
            </div>
          </div>
        </div>
        
        <section className="py-16 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative z-10 bg-white rounded-xl shadow-lg p-8">
                <div className="mb-6 text-center">
                  <RecycleIcon className="w-16 h-16 text-ps-green mx-auto" />
                </div>
                <h2 className="text-xl font-semibold mb-4 text-center text-ps-brown-dark">
                  Our Vision
                </h2>
                <p className="text-foreground/70 mb-4">
                  At PunarSrasta, we envision a world where waste is no longer seen as the end of a product's lifecycle, but rather as the beginning of something new and valuable.
                </p>
                <p className="text-foreground/70">
                  We believe that through the smart application of technology, community engagement, and creative thinking, we can transform our relationship with waste and build a more sustainable future.
                </p>
              </div>
              <div className="absolute top-4 left-4 w-full h-full bg-ps-green/20 rounded-xl -z-0" />
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-6 text-ps-brown-dark">
                Our Story
              </h2>
              <p className="text-foreground/70 mb-4">
                PunarSrasta, which means "creative rebirth" in Sanskrit, was founded with a simple yet powerful idea: to use artificial intelligence to help people make better decisions about waste.
              </p>
              <p className="text-foreground/70 mb-4">
                What started as a small project to help identify recyclable items has grown into a comprehensive platform that addresses various types of waste streams, from everyday household items to seasonal organic waste like leaves.
              </p>
              <p className="text-foreground/70 mb-4">
                Our team combines expertise in environmental science, artificial intelligence, and community organizing to create practical solutions that make a real difference in how we handle waste.
              </p>
              <p className="text-foreground/70">
                Today, PunarSrasta works with local nurseries, recycling facilities, and artisans to create a network that transforms waste into resources, benefiting both people and the planet.
              </p>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-xl font-semibold mb-6 text-center text-ps-brown-dark">
              How PunarSrasta Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-ps-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-ps-green-dark">1</span>
                </div>
                <h3 className="font-medium text-ps-brown-dark mb-2">AI-Powered Identification</h3>
                <p className="text-sm text-foreground/70">
                  Our algorithms analyze images of waste items to identify their material composition and recyclability, providing personalized guidance.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-ps-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-ps-green-dark">2</span>
                </div>
                <h3 className="font-medium text-ps-brown-dark mb-2">Community Collection</h3>
                <p className="text-sm text-foreground/70">
                  We coordinate the collection of specific waste types like dry leaves, connecting waste generators with organizations that can use these materials.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-ps-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-ps-green-dark">3</span>
                </div>
                <h3 className="font-medium text-ps-brown-dark mb-2">Creative Transformation</h3>
                <p className="text-sm text-foreground/70">
                  For non-recyclable items, we suggest innovative ways to repurpose them into useful or decorative objects, extending their lifecycle.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 bg-ps-cream rounded-xl p-8 text-center">
            <h2 className="text-xl font-semibold mb-4 text-ps-brown-dark">
              Join Our Mission
            </h2>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Whether you're looking to make better recycling choices, want to contribute your fallen leaves to create rich compost, or are interested in learning how to upcycle plastic waste, PunarSrasta is here to help you make a difference.
            </p>
            <button className="bg-ps-green hover:bg-ps-green-dark text-white px-6 py-3 rounded-lg transition-colors">
              Contact Us
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
