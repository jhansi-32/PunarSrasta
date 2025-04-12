
import { Link } from "react-router-dom";
import RecycleIcon from "./icons/RecycleIcon";

const Footer = () => {
  return (
    <footer className="bg-ps-green-dark text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <RecycleIcon className="h-6 w-6" />
              <span className="font-bold text-lg">PunarSrasta</span>
            </div>
            <p className="text-sm text-white/80 mb-4">
              We believe waste isn't an end but a new beginning - AI driven recycling as a form of creative rebirth.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-white/80 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/domestic-waste" className="text-sm text-white/80 hover:text-white transition">
                  Domestic Waste
                </Link>
              </li>
              <li>
                <Link to="/dry-leaves" className="text-sm text-white/80 hover:text-white transition">
                  Dry Leaves
                </Link>
              </li>
              <li>
                <Link to="/plastic-waste" className="text-sm text-white/80 hover:text-white transition">
                  Plastic Waste
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-sm text-white/80 mb-2">
              Email: info@punarsrasta.org
            </p>
            <p className="text-sm text-white/80">
              Phone: +91 123 456 7890
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/20 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} PunarSrasta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
