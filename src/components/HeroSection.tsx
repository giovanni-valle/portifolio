import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Desenvolvedor Full-Stack";
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div animate={{
        backgroundPosition: ["0% 0%", "100% 100%"]
      }} transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse"
      }} className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle at 20% 80%, hsl(217 91% 60%) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(217 91% 70%) 0%, transparent 50%)",
        backgroundSize: "800px 800px"
      }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }}>
          <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.3
        }} className="text-primary font-medium text-lg mb-4">Construo sites e sistemas sob medida.</motion.p>

          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            <span className="text-gradient">{displayedText}</span>
            <motion.span animate={{
            opacity: [1, 0]
          }} transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse"
          }} className="text-primary">
              |
            </motion.span>
          </h1>

          <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.6
        }} className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">Desenvolvo websites e sistemas digitais para empresas no Brasil e exterior. Soluções personalizadas para melhorar sua presença online e apoiar o crescimento do seu negócio.</motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.9
        }} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="shadow-glow text-lg px-8 py-3" onClick={() => {
            const element = document.getElementById("contact");
            if (element) {
              element.scrollIntoView({
                behavior: "smooth"
              });
            }
          }}>
              Vamos Trabalhar Juntos
            </Button>
            
            <Button variant="outline" size="lg" onClick={scrollToProjects} className="text-lg px-8 py-3 border-primary/30 hover:border-primary hover:bg-primary/10">
              Ver Meu Trabalho
              <ArrowDown className="ml-2" size={18} />
            </Button>
          </motion.div>

          {/* Social Links */}
          
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.5
    }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity
      }} onClick={scrollToProjects} className="cursor-pointer">
          <ArrowDown className="text-muted-foreground hover:text-primary transition-smooth" size={24} />
        </motion.div>
      </motion.div>
    </section>;
};
export default HeroSection;