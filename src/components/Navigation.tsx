import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/beingsphere-logo.png";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Beingsphere" className="h-10 w-10" />
            <span className="text-2xl font-bold text-foreground">Beingsphere</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                Services <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/intrapreneurship-training">Intrapreneurship Training</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/innovation-labs">Innovation Labs</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                Products <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/reflect-goal">Reflect+Goal OS</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/ownership-canvas">Ownership Canvas</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/mentor-map">MentorMap</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/beingsphere-method" className="text-foreground hover:text-primary transition-colors">
              The Method
            </Link>
            <Link to="/case-studies" className="text-foreground hover:text-primary transition-colors">
              Case Studies
            </Link>
            <Button>Get Started</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border py-4 animate-fade-in">
            <nav className="flex flex-col gap-4 px-4">
              <Link to="/intrapreneurship-training" className="text-foreground hover:text-primary py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Intrapreneurship Training
              </Link>
              <Link to="/innovation-labs" className="text-foreground hover:text-primary py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Innovation Labs
              </Link>
              <Link to="/reflect-goal" className="text-foreground hover:text-primary py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Reflect+Goal OS
              </Link>
              <Link to="/ownership-canvas" className="text-foreground hover:text-primary py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Ownership Canvas
              </Link>
              <Link to="/mentor-map" className="text-foreground hover:text-primary py-2" onClick={() => setIsMobileMenuOpen(false)}>
                MentorMap
              </Link>
              <Link to="/beingsphere-method" className="text-foreground hover:text-primary py-2" onClick={() => setIsMobileMenuOpen(false)}>
                The Method
              </Link>
              <Link to="/case-studies" className="text-foreground hover:text-primary py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Case Studies
              </Link>
              <Button>Get Started</Button>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
