import { motion } from "framer-motion";
import { Code, Database, Globe, Smartphone, Server, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import personalHeadshot from "@/assets/personal-headshot.jpg";
const AboutSection = () => {
  const skills = [{
    icon: <Code className="text-primary" size={24} />,
    title: "Desenvolvimento Frontend",
    description: "Interfaces bonitas e responsivas que convertem visitantes em clientes",
    proficiency: 95
  }, {
    icon: <Server className="text-primary" size={24} />,
    title: "Desenvolvimento Backend",
    description: "Sistemas escaláveis que suportam crescimento e reduzem custos operacionais",
    proficiency: 90
  }, {
    icon: <Database className="text-primary" size={24} />,
    title: "Design de Banco de Dados",
    description: "Estruturas de dados eficientes que melhoram a performance em 40%+",
    proficiency: 85
  }, {
    icon: <Globe className="text-primary" size={24} />,
    title: "Cloud & DevOps",
    description: "Deploys automatizados que reduzem downtime e poupam horas semanais",
    proficiency: 80
  }, {
    icon: <Smartphone className="text-primary" size={24} />,
    title: "Desenvolvimento Mobile",
    description: "Design mobile-friendly que funciona perfeitamente em phones e tablets",
    proficiency: 75
  }, {
    icon: <Zap className="text-primary" size={24} />,
    title: "Otimização de Performance",
    description: "Carregamento mais rápido que melhora rankings e vendas",
    proficiency: 88
  }];
  const achievements = [{
    number: "7+",
    label: "Projetos Concluídos"
  }, {
    number: "5+",
    label: "Clientes Internacionais"
  }, {
    number: "2+",
    label: "Anos de Experiência"
  }, {
    number: "99%",
    label: "Satisfação do Cliente"
  }];
  return <section id="about" className="py-20 bg-background">
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
            Sobre Mim
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Apaixonado por criar soluções digitais que fazem a diferença em negócios ao redor do mundo!</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Professional Image */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="relative">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-20 group-hover:opacity-30 transition-smooth blur-xl"></div>
              <img src={personalHeadshot} alt="Professional Developer" className="relative rounded-2xl shadow-elegant w-full max-w-md mx-auto object-cover" />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="space-y-6">
            <div className="prose prose-lg text-muted-foreground">
              <p className="text-lg leading-relaxed">Com mais de 2 anos de experiência em desenvolvimento full-stack, me especializo em construir aplicações web escaláveis e soluções digitais que impulsionam o crescimento dos negócios. Minha paixão está em transformar ideias complexas em experiências elegantes e amigáveis ao usuário.</p>
              <p className="text-lg leading-relaxed">
                Tive o privilégio de trabalhar com clientes de diversas indústrias na América do Norte, 
                Europa e Ásia, entregando projetos que vão desde plataformas de e-commerce até 
                dashboards empresariais e aplicações mobile.
              </p>
              <p className="text-lg leading-relaxed">
                Minha abordagem combina expertise técnica com conhecimento de negócios, garantindo que cada solução 
                não apenas funcione perfeitamente, mas também contribua para seus resultados.
              </p>
            </div>

            <div className="pt-6">
              <Button size="lg" className="shadow-glow" onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({
                  behavior: "smooth"
                });
              }
            }}>
                Iniciar um Projeto
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="mb-20">
          <h3 className="text-3xl font-display font-bold text-center mb-12">
            Expertise Técnica
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => <motion.div key={skill.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }}>
                <Card className="glass-card h-full hover:shadow-glow transition-smooth group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                        {skill.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2">{skill.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          {skill.description}
                        </p>
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span>Proficiência</span>
                            <span>{skill.proficiency}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <motion.div initial={{
                          width: 0
                        }} whileInView={{
                          width: `${skill.proficiency}%`
                        }} viewport={{
                          once: true
                        }} transition={{
                          duration: 1,
                          delay: index * 0.1
                        }} className="bg-gradient-primary h-2 rounded-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {achievements.map((achievement, index) => <motion.div key={achievement.label} initial={{
            opacity: 0,
            scale: 0.5
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="space-y-2">
                <div className="text-4xl md:text-5xl font-display font-bold text-gradient">
                  {achievement.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {achievement.label}
                </div>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </section>;
};
export default AboutSection;