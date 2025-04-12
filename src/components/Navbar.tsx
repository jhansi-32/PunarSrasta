
import { Home, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";
import RecycleIcon from "./icons/RecycleIcon";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <RecycleIcon className="h-8 w-8 text-ps-green" />
          <span className="font-bold text-lg text-ps-green-dark">PunarSrasta</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground hover:text-ps-green-dark transition">
            Home
          </Link>
          <Link to="/domestic-waste" className="text-foreground hover:text-ps-green-dark transition">
            Domestic Waste
          </Link>
          <Link to="/dry-leaves" className="text-foreground hover:text-ps-green-dark transition">
            Dry Leaves
          </Link>
          <Link to="/plastic-waste" className="text-foreground hover:text-ps-green-dark transition">
            Plastic Waste
          </Link>
          <Link to="/about" className="text-foreground hover:text-ps-green-dark transition">
            About
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 pt-20 px-6 transform transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-4">
          <Link 
            to="/" 
            className="py-2 text-foreground hover:text-ps-green-dark transition text-lg"
            onClick={toggleMenu}
          >
            <Home className="inline-block mr-2" size={18} />
            Home
          </Link>
          <Link 
            to="/domestic-waste" 
            className="py-2 text-foreground hover:text-ps-green-dark transition text-lg"
            onClick={toggleMenu}
          >
            Domestic Waste
          </Link>
          <Link 
            to="/dry-leaves" 
            className="py-2 text-foreground hover:text-ps-green-dark transition text-lg"
            onClick={toggleMenu}
          >
            Dry Leaves
          </Link>
          <Link 
            to="/plastic-waste" 
            className="py-2 text-foreground hover:text-ps-green-dark transition text-lg"
            onClick={toggleMenu}
          >
            Plastic Waste
          </Link>
          <Link 
            to="/about" 
            className="py-2 text-foreground hover:text-ps-green-dark transition text-lg"
            onClick={toggleMenu}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
