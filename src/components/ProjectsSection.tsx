import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import projectDashboard from "@/assets/project-dashboard.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectCorporate from "@/assets/project-corporate.jpg";
import projectTaskManager from "@/assets/project-taskmanager.jpg";
import projectSocial from "@/assets/project-social.jpg";
import projectFintech from "@/assets/project-fintech.jpg";
const ProjectsSection = () => {
  const projects = [{
    title: "Dashboard de Analytics",
    description: "Plataforma de analytics em tempo real com visualização avançada de dados e recursos personalizáveis de relatórios para clientes empresariais.",
    image: projectDashboard,
    technologies: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    category: "Web App"
  }, {
    title: "Plataforma E-commerce",
    description: "Loja online completa com gerenciamento de inventário, processamento de pagamentos e suporte multi-vendedor.",
    image: projectEcommerce,
    technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    category: "E-commerce"
  }, {
    title: "Site Corporativo",
    description: "Site corporativo moderno com integração CMS, otimização SEO e suporte multi-idiomas.",
    image: projectCorporate,
    technologies: ["React", "Headless CMS", "GraphQL", "GSAP", "AWS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    category: "Website"
  }, {
    title: "Sistema de Gestão de Tarefas",
    description: "Ferramenta de gerenciamento colaborativo com quadros kanban, controle de tempo e recursos de colaboração em equipe.",
    image: projectTaskManager,
    technologies: ["Vue.js", "Node.js", "Socket.io", "Redis", "Docker"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    category: "SaaS"
  }, {
    title: "Plataforma de Rede Social",
    description: "Plataforma de rede social moderna com mensagens em tempo real, compartilhamento de conteúdo e controles avançados de privacidade.",
    image: projectSocial,
    technologies: ["React Native", "Firebase", "GraphQL", "TypeScript", "Redis"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    category: "Mobile"
  }, {
    title: "Plataforma de Trading FinTech",
    description: "Plataforma avançada de trading com dados de mercado em tempo real, gerenciamento de portfólio e recursos de trading algorítmico.",
    image: projectFintech,
    technologies: ["Python", "FastAPI", "React", "WebSocket", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    category: "FinTech"
  }];
  return <section id="projects" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gradient">
            Projetos em Destaque
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma seleção de projetos recentes mostrando desenvolvimento web moderno, soluções inovadoras, 
            e colaborações bem-sucedidas com clientes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => <motion.div key={project.title} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }}>
              <Card className="glass-card h-full group hover:shadow-glow transition-smooth overflow-hidden">
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-smooth" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end justify-center pb-4">
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="bg-background/90 backdrop-blur-sm" asChild>
                        
                      </Button>
                      <Button size="sm" className="bg-primary/90 hover:bg-primary" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      
                    </Button>
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Ver Projeto
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>)}
        </div>

        {/* CTA Section */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center">
          
        </motion.div>
      </div>
    </section>;
};
export default ProjectsSection;