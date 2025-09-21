import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const scrollToSection = (sectionId: string) => {
    if (sectionId === "top") {
      scrollToTop();
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const socialLinks = [{
    icon: <Github size={20} />,
    href: "https://github.com",
    label: "GitHub"
  }, {
    icon: <Linkedin size={20} />,
    href: "https://linkedin.com",
    label: "LinkedIn"
  }, {
    icon: <Mail size={20} />,
    href: "mailto:contact@portfolio.dev",
    label: "Email"
  }];
  const quickLinks = [{
    name: "Início",
    section: "top"
  }, {
    name: "Sobre",
    section: "about"
  }, {
    name: "Projetos",
    section: "projects"
  }, {
    name: "Contato",
    section: "contact"
  }];
  return <footer className="border-t border-border/30 bg-slate-900">
      <div className="container mx-auto px-6 py-16 bg-slate-900">
        {/* Main CTA */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gradient">
              Pronto para Iniciar Seu Projeto?
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Vamos transformar suas ideias em experiências digitais excepcionais. 
              Estou aqui para ajudá-lo a ter sucesso no mundo digital.
            </p>
            <Button size="lg" className="shadow-glow" onClick={() => scrollToSection("contact")}>
              Entre em Contato Hoje
            </Button>
          </div>
        </motion.div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          

          {/* Quick Links */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1
        }}>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => <li key={link.name}>
                  <button onClick={() => scrollToSection(link.section)} className="text-muted-foreground hover:text-foreground transition-smooth text-left">
                    {link.name}
                  </button>
                </li>)}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }}>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>contact@giovannivalle.com.br</p>
              <p>+55 (19) 99206-7245
            </p>
              <p>Disponível Mundialmente</p>
              <p className="text-sm">Remoto & Presencial</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/30">
          <motion.p initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} className="text-muted-foreground text-sm mb-4 md:mb-0">© 2025. Todos os direitos reservados.</motion.p>
          
          <motion.button initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} onClick={scrollToTop} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-smooth">
            <ArrowUp size={16} />
            Voltar ao Topo
          </motion.button>
        </div>
      </div>
    </footer>;
};
export default Footer;