
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import RecycleIcon from "./icons/RecycleIcon";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-ps-cream py-16 md:py-24">
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-ps-green-light/30 animate-rotate-slow" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-ps-green-light/20 animate-rotate-slow" style={{ animationDirection: 'reverse' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-ps-green/10 text-ps-green-dark px-4 py-2 rounded-full mb-4 animate-fade-in">
              <RecycleIcon className="h-5 w-5" />
              <span className="text-sm font-medium">Reimagine. Recycle. Rebirth.</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-ps-brown-dark">
              Welcome to <span className="text-ps-green-dark">PunarSrasta</span>
            </h1>
            
            <p className="text-foreground/80 mb-8 max-w-lg mx-auto md:mx-0">
              We believe waste isn't an end but a new beginning - AI driven recycling as a form of creative rebirth.
            </p>
            
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-ps-green hover:bg-ps-green-dark text-white px-6 py-3 rounded-lg transition-colors"
            >
              Learn More <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-ps-green/20 rounded-full flex items-center justify-center">
              <img 
            src="/punar.webp" 
            alt="PunarSrasta Logo" 
           className="w-56 h-66 md:w-72 md:h-82 animate-pulse object-contain"
          />

              </div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-ps-brown/20 rounded-full" />
              <div className="absolute bottom-8 -left-8 w-16 h-16 bg-ps-brown-light/30 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
