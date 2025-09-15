import { motion } from "framer-motion";
import { Code, Database, Globe, Smartphone, Server, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import personalHeadshot from "@/assets/personal-headshot.jpg";
const AboutSection = () => {
  const skills = [{
    icon: <Code className="text-primary" size={24} />,
    title: "Frontend Development",
    description: "Beautiful, responsive interfaces that convert visitors into customers",
    proficiency: 95
  }, {
    icon: <Server className="text-primary" size={24} />,
    title: "Backend Development",
    description: "Scalable systems that handle growth and reduce operational costs",
    proficiency: 90
  }, {
    icon: <Database className="text-primary" size={24} />,
    title: "Database Design",
    description: "Efficient data structures that improve performance by 40%+",
    proficiency: 85
  }, {
    icon: <Globe className="text-primary" size={24} />,
    title: "Cloud & DevOps",
    description: "Automated deployments that reduce downtime and save hours weekly",
    proficiency: 80
  }, {
    icon: <Smartphone className="text-primary" size={24} />,
    title: "Mobile Development",
    description: "Mobile-friendly design that works perfectly on phones and tablets",
    proficiency: 75
  }, {
    icon: <Zap className="text-primary" size={24} />,
    title: "Performance Optimization",
    description: "Faster loading speeds that boost search rankings and sales",
    proficiency: 88
  }];
  const achievements = [{
    number: "7+",
    label: "Projects Completed"
  }, {
    number: "5+",
    label: "International Clients"
  }, {
    number: "2+",
    label: "Years Experience"
  }, {
    number: "99%",
    label: "Client Satisfaction"
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
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating digital solutions that make a difference in businesses worldwide.
          </p>
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
              <p className="text-lg leading-relaxed">With over 2 years of experience in full-stack development, I specialize in building scalable web applications and digital solutions that drive business growth. My passion lies in transforming complex ideas into elegant, user-friendly experiences.</p>
              <p className="text-lg leading-relaxed">
                I've had the privilege of working with clients from various industries across North America, 
                Europe, and Asia, delivering projects that range from e-commerce platforms to enterprise 
                dashboards and mobile applications.
              </p>
              <p className="text-lg leading-relaxed">
                My approach combines technical expertise with business acumen, ensuring that every solution 
                not only works flawlessly but also contributes to your bottom line.
              </p>
            </div>

            <div className="pt-6">
              <Button asChild size="lg" className="shadow-glow">
                <Link to="/contact">Start a Project</Link>
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
            Technical Expertise
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
                            <span>Proficiency</span>
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