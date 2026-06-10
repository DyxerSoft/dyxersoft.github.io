import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import {
  AlertCircle,
  Zap,
  Clock,
  FileText,
  TrendingDown,
  Users,
  TrendingUp,
  Target,
  Gauge,
  Shield,
  BarChart,
  CheckCircle,
  Sparkles,
  Code,
  Smartphone,
  Wrench,
  Database,
  PieChart,
  Layout,
  Workflow,
  Link,
  Brain,
  TestTube,
  RefreshCw,
  Lightbulb,
  Award,
  MapPin,
  Headphones,
  Rocket,
  Lock,
  Radio,
  Building,
  ShoppingCart,
  Briefcase,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import ProblemCard from '@/components/ProblemCard.jsx';
import BenefitCard from '@/components/BenefitCard.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import DifferentiatorCard from '@/components/DifferentiatorCard.jsx';
import IndustryCard from '@/components/IndustryCard.jsx';
import HowItWorksStep from '@/components/HowItWorksStep.jsx';
import ContactForm from '@/components/ContactForm.jsx';

function HomePage() {
  const problems = [
    {
      icon: AlertCircle,
      title: 'Incidencias dispersas',
      description: 'Tickets en WhatsApp, correos, llamadas y planillas. Sin un punto central de registro.',
    },
    {
      icon: Zap,
      title: 'Falta de trazabilidad',
      description: 'No hay historial claro de quién atendió qué, cuándo y cómo se resolvió.',
    },
    {
      icon: Clock,
      title: 'Atención lenta',
      description: 'Sin priorización clara, los casos críticos se mezclan con los menores.',
    },
    {
      icon: FileText,
      title: 'Reportes manuales',
      description: 'Horas perdidas consolidando datos en Excel para reportes gerenciales.',
    },
    {
      icon: TrendingDown,
      title: 'Decisiones sin datos',
      description: 'No hay métricas confiables para mejorar procesos o asignar recursos.',
    },
    {
      icon: Users,
      title: 'Equipos saturados',
      description: 'Sin visibilidad de carga de trabajo, algunos agentes colapsan mientras otros esperan.',
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Reducción de tiempo de respuesta',
      description: 'Priorización automática y asignación inteligente aceleran la atención.',
      featured: true,
    },
    {
      icon: Target,
      title: 'Mayor visibilidad operativa',
      description: 'Dashboards en tiempo real muestran el estado de todas las incidencias.',
    },
    {
      icon: Gauge,
      title: 'Cumplimiento de SLA',
      description: 'Alertas automáticas y métricas de tiempo garantizan el cumplimiento de acuerdos.',
    },
    {
      icon: Shield,
      title: 'Decisiones basadas en datos',
      description: 'Reportes automáticos y analítica histórica para optimizar procesos.',
    },
    {
      icon: BarChart,
      title: 'Equipos más productivos',
      description: 'Distribución equilibrada de carga y visibilidad de rendimiento individual.',
    },
    {
      icon: CheckCircle,
      title: 'Mejor experiencia del cliente',
      description: 'Respuestas más rápidas y seguimiento transparente mejoran la satisfacción.',
    },
    {
      icon: Sparkles,
      title: 'Escalabilidad sin caos',
      description: 'Crece tu operación sin perder control ni calidad de servicio.',
    },
  ];

  const services = [
    {
      icon: Code,
      title: 'Desarrollo SaaS',
      description: 'Plataformas web escalables, multi-tenant y listas para crecer.',
    },
    {
      icon: Smartphone,
      title: 'Desarrollo web y móvil',
      description: 'Aplicaciones modernas, responsivas y centradas en el usuario.',
    },
    {
      icon: Wrench,
      title: 'Software personalizado',
      description: 'Soluciones a medida que se adaptan a tus procesos únicos.',
    },
    {
      icon: Database,
      title: 'Ingeniería de datos',
      description: 'Pipelines, ETL y arquitecturas de datos robustas.',
    },
    {
      icon: PieChart,
      title: 'Business Intelligence',
      description: 'Convierte datos en insights accionables para tu negocio.',
    },
    {
      icon: Layout,
      title: 'Dashboards ejecutivos',
      description: 'Visualizaciones claras y métricas clave para la toma de decisiones.',
    },
    {
      icon: Workflow,
      title: 'Automatización de procesos',
      description: 'Elimina tareas repetitivas y libera tiempo de tu equipo.',
    },
    {
      icon: Link,
      title: 'Integración de sistemas',
      description: 'Conecta tus herramientas existentes en un ecosistema unificado.',
    },
    {
      icon: Brain,
      title: 'Inteligencia artificial',
      description: 'Modelos de ML, NLP y análisis predictivo para tu industria.',
    },
    {
      icon: TestTube,
      title: 'QA Testing',
      description: 'Aseguramiento de calidad y testing automatizado.',
    },
    {
      icon: RefreshCw,
      title: 'Modernización de sistemas legacy',
      description: 'Actualiza tecnología obsoleta sin perder funcionalidad.',
    },
    {
      icon: Lightbulb,
      title: 'Consultoría tecnológica',
      description: 'Asesoría estratégica para transformación digital.',
    },
  ];

  const differentiators = [
    {
      icon: Award,
      title: 'Experiencia local, estándares globales',
      description: 'Conocemos el mercado boliviano y aplicamos mejores prácticas internacionales.',
    },
    {
      icon: Users,
      title: 'Equipo multidisciplinario',
      description: 'Desarrolladores, ingenieros de datos, diseñadores y consultores trabajando juntos.',
    },
    {
      icon: MapPin,
      title: 'Presencia en Bolivia',
      description: 'Oficinas en Santa Cruz, soporte en tu zona horaria y en tu idioma.',
    },
    {
      icon: Headphones,
      title: 'Soporte continuo',
      description: 'No solo entregamos software, acompañamos tu crecimiento.',
    },
    {
      icon: Rocket,
      title: 'Metodología ágil',
      description: 'Entregas iterativas, feedback constante y adaptación rápida.',
    },
    {
      icon: Lock,
      title: 'Seguridad y confiabilidad',
      description: 'Arquitecturas robustas, backups automáticos y cumplimiento de estándares.',
    },
  ];

  const industries = [
    {
      icon: Radio,
      title: 'Telecomunicaciones',
      description: 'Gestión de incidencias de red, soporte técnico y atención al cliente.',
    },
    {
      icon: Building,
      title: 'Servicios financieros',
      description: 'Seguimiento de casos, cumplimiento normativo y reportes auditables.',
    },
    {
      icon: Users,
      title: 'Cooperativas',
      description: 'Atención a socios, gestión de reclamos y trazabilidad completa.',
    },
    {
      icon: ShoppingCart,
      title: 'Retail',
      description: 'Soporte post-venta, devoluciones y gestión de garantías.',
    },
    {
      icon: Briefcase,
      title: 'Empresas de servicios',
      description: 'Tickets de mantenimiento, órdenes de trabajo y seguimiento de SLA.',
    },
    {
      icon: Headphones,
      title: 'Áreas de soporte y operaciones',
      description: 'Centralización de incidencias internas y externas.',
    },
    {
      icon: MessageSquare,
      title: 'Empresas con atención multicanal',
      description: 'Unifica WhatsApp, email, teléfono y web en una sola plataforma.',
    },
  ];

  const howItWorksSteps = [
    {
      number: 1,
      title: 'Registro',
      description: 'Captura incidencias desde cualquier canal: web, email, API o integración.',
    },
    {
      number: 2,
      title: 'Clasificación y priorización',
      description: 'Asigna categorías, niveles de urgencia y responsables automáticamente.',
    },
    {
      number: 3,
      title: 'Atención y resolución',
      description: 'Seguimiento en tiempo real, historial completo y colaboración del equipo.',
    },
    {
      number: 4,
      title: 'Visualización de métricas',
      description: 'Dashboards ejecutivos y reportes automáticos para decisiones informadas.',
    },
  ];

  const dashboardMetrics = [
    { label: 'Incidencias abiertas', value: '47', color: 'bg-destructive' },
    { label: 'Casos críticos', value: '12', color: 'bg-accent' },
    { label: 'SLA cumplido', value: '94.2%', color: 'bg-primary' },
    { label: 'Tiempo promedio', value: '2.4h', color: 'bg-secondary' },
    { label: 'Resueltas', value: '1,847', color: 'bg-primary' },
  ];

  return (
    <>
      <Helmet>
        <title>Dyxersoft | Soluciones SaaS, IA y Gestión Inteligente de Incidencias</title>
        <meta
          name="description"
          content="Dyxersoft desarrolla plataformas SaaS, software personalizado, ingeniería de datos e inteligencia artificial. Conoce PIGIM, nuestra plataforma inteligente para gestionar incidencias empresariales."
        />
        <meta
          name="keywords"
          content="SaaS, software personalizado, ingeniería de datos, business intelligence, inteligencia artificial, gestión de incidencias, PIGIM, desarrollo web, Bolivia, Santa Cruz"
        />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-background to-primary/5">
          <div className="section-container py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance" style={{ letterSpacing: '-0.02em' }}>
                  Gestión inteligente de incidencias para empresas que necesitan control, velocidad y datos
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  Dyxersoft desarrolla soluciones SaaS, software personalizado e ingeniería de datos. PIGIM es nuestra plataforma para centralizar, priorizar y resolver incidencias con métricas en tiempo real.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={() => {
                      const element = document.querySelector('#contacto');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98] transition-all duration-200"
                  >
                    Solicitar demo de PIGIM
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => {
                      const element = document.querySelector('#servicios');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="border-primary text-primary hover:bg-primary/10 active:scale-[0.98] transition-all duration-200"
                  >
                    Ver soluciones
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b"
                    alt="Panel de control de PIGIM mostrando métricas de incidencias en tiempo real"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 grid grid-cols-2 md:grid-cols-3 gap-3">
                    {dashboardMetrics.map((metric, index) => (
                      <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      >
                        <Card className="bg-background/95 backdrop-blur-sm border-0">
                          <CardContent className="p-3">
                            <div className={`w-2 h-2 rounded-full ${metric.color} mb-2`} />
                            <p className="text-xs text-muted-foreground mb-1">{metric.label}</p>
                            <p className="text-lg font-bold text-foreground">{metric.value}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-muted/30">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                Las empresas no pierden eficiencia por falta de esfuerzo. La pierden por procesos desordenados.
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {problems.map((problem, index) => (
                <ProblemCard key={index} {...problem} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* PIGIM Product Section */}
        <section id="pigim" className="py-24 bg-background">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">PIGIM: Plataforma Inteligente de Gestión de Incidencias</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Una solución completa para centralizar, priorizar y resolver incidencias con visibilidad total y métricas en tiempo real.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { title: 'Registro y centralización', desc: 'Captura desde cualquier canal' },
                { title: 'Gestión de estados', desc: 'Flujos personalizables' },
                { title: 'Priorización inteligente', desc: 'Asignación automática' },
                { title: 'Dashboard operativo/ejecutivo', desc: 'Métricas en tiempo real' },
                { title: 'Métricas de SLA', desc: 'Cumplimiento garantizado' },
                { title: 'Historial y trazabilidad', desc: 'Auditoría completa' },
                { title: 'Reportes y analítica', desc: 'Insights accionables' },
                { title: 'Preparado para integraciones e IA', desc: 'Escalable y extensible' },
              ].map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card className="h-full bg-card border-primary/20 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2 text-card-foreground">{module.title}</h3>
                      <p className="text-sm text-muted-foreground">{module.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Button
                size="lg"
                onClick={() => {
                  const element = document.querySelector('#contacto');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98] transition-all duration-200"
              >
                Quiero una demo de PIGIM
              </Button>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-muted/30">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Cómo funciona PIGIM</h2>
            </motion.div>
            <div className="max-w-5xl mx-auto space-y-8">
              {howItWorksSteps.map((step, index) => (
                <HowItWorksStep
                  key={index}
                  {...step}
                  index={index}
                  isLast={index === howItWorksSteps.length - 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Business Benefits */}
        <section id="beneficios" className="py-24 bg-background">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Menos caos operativo. Más control, productividad y datos.
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <BenefitCard key={index} {...benefit} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Dyxersoft Services */}
        <section id="servicios" className="py-24 bg-muted/30">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Más que software: construimos soluciones digitales escalables
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Desde plataformas SaaS hasta inteligencia artificial, acompañamos tu transformación digital.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="py-24 bg-background">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Por qué Dyxersoft</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {differentiators.map((diff, index) => (
                <DifferentiatorCard key={index} {...diff} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Target Industries */}
        <section className="py-24 bg-muted/30">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Industrias que atendemos</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <IndustryCard key={index} {...industry} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Strong CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto space-y-8"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
                ¿Tu empresa sigue gestionando incidencias en WhatsApp, correos o planillas?
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
                Es momento de centralizar, automatizar y tomar decisiones basadas en datos reales. PIGIM te da el control que necesitas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => {
                    const element = document.querySelector('#contacto');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-background text-foreground hover:bg-background/90 active:scale-[0.98] transition-all duration-200"
                >
                  Solicitar demo ahora
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    const element = document.querySelector('#nosotros');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 active:scale-[0.98] transition-all duration-200"
                >
                  Conocer más sobre nosotros
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Us */}
        <section id="nosotros" className="py-24 bg-background">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Sobre Dyxersoft</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Somos un equipo multidisciplinario de desarrolladores, ingenieros de datos, diseñadores y consultores tecnológicos con base en Santa Cruz de la Sierra, Bolivia.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nuestra visión es clara: ayudar a empresas latinoamericanas a escalar con tecnología de clase mundial. Combinamos experiencia local con estándares globales para entregar soluciones que realmente funcionan.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Desde plataformas SaaS hasta proyectos de inteligencia artificial, trabajamos con metodologías ágiles, soporte continuo y un compromiso real con el éxito de nuestros clientes.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  { value: '50+', label: 'Proyectos entregados' },
                  { value: '30+', label: 'Clientes activos' },
                  { value: '5+', label: 'Años de experiencia' },
                  { value: '100%', label: 'Compromiso con calidad' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="bg-primary text-primary-foreground border-0">
                      <CardContent className="p-6 text-center">
                        <p className="text-4xl font-bold mb-2">{stat.value}</p>
                        <p className="text-sm text-primary-foreground/80">{stat.label}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contacto" className="py-24 bg-muted/30">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Hablemos de tu proyecto</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Cuéntanos qué necesitas y te mostraremos cómo podemos ayudarte a escalar con tecnología.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-3xl mx-auto"
            >
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <ContactForm />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;