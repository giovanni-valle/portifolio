import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [{
    name: "Início",
    href: "/#top"
  }, {
    name: "Sobre",
    href: "/#about"
  }, {
    name: "Projetos",
    href: "/#projects"
  }, {
    name: "Contato",
    href: "/#contact"
  }];
  const scrollToTop = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const scrollToSection = (sectionId: string) => {
    // Close mobile menu first
    setIsMobileMenuOpen(false);
    if (sectionId === "top") {
      scrollToTop();
      return;
    }
    if (location.pathname !== "/") {
      // Navigate to home page first, then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth"
          });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
  };
  const handleContactClick = () => {
    // Close mobile menu first
    setIsMobileMenuOpen(false);
    if (location.pathname !== "/") {
      // Navigate to home page first, then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById("contact");
        if (element) {
          element.scrollIntoView({
            behavior: "smooth"
          });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
  };
  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-elegant" : "bg-transparent"}`}>
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={scrollToTop} className="text-lg sm:text-xl font-display font-bold text-gradient flex-shrink-0">
            Giovanni Valle
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map(item => <div key={item.name}>
                {item.href.startsWith("/#") ? <button onClick={() => scrollToSection(item.href.replace("/#", ""))} className="text-foreground/70 hover:text-foreground transition-smooth whitespace-nowrap">
                    {item.name}
                  </button> : <Link to={item.href} className="text-foreground/70 hover:text-foreground transition-smooth whitespace-nowrap">
                    {item.name}
                  </Link>}
              </div>)}
          </div>

          <div className="hidden md:block flex-shrink-0">
            <Button size="sm" className="shadow-glow" onClick={handleContactClick}>Fale Comigo!</Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-foreground hover:text-primary transition-smooth p-2 -mr-2" aria-label="Toggle mobile menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} className="md:hidden mt-4 py-6 border-t border-border/30 bg-background/95 backdrop-blur-md rounded-lg mx-2">
            <div className="flex flex-col space-y-6 px-4">
              {navItems.map(item => <div key={item.name}>
                  {item.href.startsWith("/#") ? <button onClick={() => scrollToSection(item.href.replace("/#", ""))} className="block text-left text-lg text-foreground/70 hover:text-foreground transition-smooth py-2">
                      {item.name}
                    </button> : <Link to={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-lg text-foreground/70 hover:text-foreground transition-smooth py-2">
                      {item.name}
                    </Link>}
                </div>)}
              <div className="pt-4">
                <Button size="sm" className="w-full shadow-glow" onClick={handleContactClick}>
                  Entre em Contato
                </Button>
              </div>
            </div>
          </motion.div>}
      </nav>
    </motion.header>;
};
export default Navigation;