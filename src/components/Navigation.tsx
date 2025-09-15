import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [{
    name: "Home",
    href: "/"
  }, {
    name: "About",
    href: "/#about"
  }, {
    name: "Projects",
    href: "/#projects"
  }, {
    name: "Contact",
    href: "/contact"
  }];
  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };
  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-elegant" : "bg-transparent"}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl font-display font-bold text-gradient">GIovanni Valle</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <div key={item.name}>
                {item.href.startsWith("/#") ? <button onClick={() => scrollToSection(item.href)} className="text-foreground/70 hover:text-foreground transition-smooth">
                    {item.name}
                  </button> : <Link to={item.href} className="text-foreground/70 hover:text-foreground transition-smooth">
                    {item.name}
                  </Link>}
              </div>)}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild variant="default" size="sm" className="shadow-glow">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-foreground hover:text-primary transition-smooth">
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
      }} className="md:hidden mt-4 py-4 border-t border-border/30">
            <div className="flex flex-col space-y-4">
              {navItems.map(item => <div key={item.name}>
                  {item.href.startsWith("/#") ? <button onClick={() => scrollToSection(item.href)} className="block text-foreground/70 hover:text-foreground transition-smooth">
                      {item.name}
                    </button> : <Link to={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-foreground/70 hover:text-foreground transition-smooth">
                      {item.name}
                    </Link>}
                </div>)}
              <Button asChild variant="default" size="sm" className="mt-4 w-fit">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get In Touch
                </Link>
              </Button>
            </div>
          </motion.div>}
      </nav>
    </motion.header>;
};
export default Navigation;