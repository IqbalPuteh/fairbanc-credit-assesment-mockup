
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b border-gray-100 py-4 px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Fairbanc" className="h-10" />
        </Link>
        <div className="flex items-center gap-4">
          <Button variant="default" className="rounded-full bg-primary hover:bg-primary-hover">
            Log In
          </Button>
          <Button variant="outline" className="rounded-full bg-gray-100 border-none text-gray-600 hover:bg-gray-200 hover:text-gray-800">
            Book a Demo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
