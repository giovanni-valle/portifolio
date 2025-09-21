import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    toast({
      title: "Mensagem Enviada!",
      description: "Obrigado por entrar em contato. Retornarei em até 24 horas."
    });
    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      projectType: "",
      message: ""
    });
  };
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        {/* Header */}
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
            Vamos Trabalhar Juntos!
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pronto para dar vida ao seu projeto? Adoraria ouvir sobre sua visão e discutir como podemos torná-la realidade.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Information - Hidden on mobile */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }} className="lg:col-span-1 hidden lg:block">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Mail className="text-primary" size={20} />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">contact@giovannivalle.com.br</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Phone className="text-primary" size={20} />
                    Telefone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">+55 (19) 99206-7245</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <MapPin className="text-primary" size={20} />
                    Localização
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Disponível Mundialmente</p>
                  <p className="text-sm text-muted-foreground mt-1">Remoto & Presencial</p>
                </CardContent>
              </Card>

              <div className="pt-6">
                <h3 className="font-semibold mb-4">Tempo de Resposta</h3>
                <p className="text-muted-foreground text-sm">
                  Geralmente respondo a todas as consultas em até 24 horas durante dias úteis.
                  Para projetos urgentes, por favor mencione na sua mensagem.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.4
        }} className="lg:col-span-2 w-full">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Inicie Seu Projeto</CardTitle>
                <p className="text-muted-foreground">
                  Conte-me sobre seu projeto e vamos discutir como posso ajudá-lo a alcançar seus objetivos.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nome Completo *
                      </label>
                      <Input id="name" type="text" value={formData.name} onChange={e => handleInputChange("name", e.target.value)} placeholder="João Silva" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Endereço de Email *
                      </label>
                      <Input id="email" type="email" value={formData.email} onChange={e => handleInputChange("email", e.target.value)} placeholder="joao@empresa.com" required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Detalhes do Projeto *
                    </label>
                    <Textarea id="message" value={formData.message} onChange={e => handleInputChange("message", e.target.value)} placeholder="Conte-me sobre seu projeto, cronograma, orçamento e requisitos específicos..." rows={6} required />
                  </div>

                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full shadow-glow">
                    {isSubmitting ? "Enviando..." : <>
                        <Send size={18} className="mr-2" />
                        Enviar Mensagem
                      </>}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Response Time - Only visible on mobile, below the form */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.6
          }} className="lg:hidden mt-8">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Tempo de Resposta</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Geralmente respondo a todas as consultas em até 24 horas durante dias úteis.
                    Para projetos urgentes, por favor mencione na sua mensagem.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default ContactSection;