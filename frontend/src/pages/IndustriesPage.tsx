import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useGetIndustries } from '../hooks/useQueries';
import { Headphones, Code, Calculator, Building2, Users, TrendingUp, Award, Shield, BookOpen, Target } from 'lucide-react';

export function IndustriesPage() {
  const { data: industries, isLoading } = useGetIndustries();

  const industryDetails = [
    {
      icon: Headphones,
      title: 'BPO & KPO',
      color: 'blue',
      description:
        'Business Process Outsourcing and Knowledge Process Outsourcing require specialized talent. We understand the unique demands of these sectors and connect you with professionals who excel in customer service, technical support, data analysis, and specialized knowledge work.',
    },
    {
      icon: Code,
      title: 'IT & Technology',
      color: 'green',
      description:
        'The technology sector moves fast, and so do we. From software developers and system architects to DevOps engineers and cybersecurity specialists, we have deep connections in the tech community and understand the evolving skill requirements.',
    },
    {
      icon: Calculator,
      title: 'Finance & Accounting',
      color: 'orange',
      description:
        'Financial roles demand precision and expertise. We specialize in placing accounting professionals, financial analysts, controllers, auditors, and CFOs who bring both technical competence and strategic thinking to your organization.',
    },
    {
      icon: Building2,
      title: 'Corporate & Operations',
      color: 'blue',
      description:
        'Strong operations and corporate functions are the backbone of successful organizations. We recruit for roles in operations management, project management, business analysis, HR, and administrative leadership.',
    },
    {
      icon: Users,
      title: 'Support & Shared Services',
      color: 'green',
      description:
        'Shared services and support functions require professionals who can work efficiently across multiple stakeholders. We find talent for IT support, facilities management, procurement, and other essential support roles.',
    },
  ];

  const expertiseCards = [
    {
      icon: TrendingUp,
      title: 'Current market trends and salary benchmarks',
      color: 'blue',
    },
    {
      icon: Award,
      title: 'Key skills and certifications required for success',
      color: 'green',
    },
    {
      icon: Shield,
      title: 'Industry-specific challenges and opportunities',
      color: 'orange',
    },
    {
      icon: BookOpen,
      title: 'Regulatory requirements and compliance considerations',
      color: 'blue',
    },
    {
      icon: Target,
      title: 'Career progression paths and development opportunities',
      color: 'green',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="gradient-multi py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">Industries We Serve</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Specialized recruitment expertise across diverse sectors
            </p>
          </div>
        </div>
      </section>

      {/* Industries List */}
      <section className="py-16 md:py-24">
        <div className="container">
          {isLoading ? (
            <div className="grid gap-8 md:grid-cols-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader>
                    <div className="h-8 w-8 rounded-full bg-muted" />
                    <div className="h-6 w-3/4 rounded bg-muted" />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="h-4 w-full rounded bg-muted" />
                      <div className="h-4 w-5/6 rounded bg-muted" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {industryDetails.map((industry, index) => {
                const Icon = industry.icon;
                const iconColorClass = industry.color === 'blue' ? 'text-primary' : 
                                      industry.color === 'green' ? 'text-secondary' : 
                                      'text-accent';
                const cardColorClass = industry.color === 'blue' ? 'card-blue' : 
                                      industry.color === 'green' ? 'card-green' : 
                                      'card-orange';
                return (
                  <Card key={index} className={`card-hover-lift ${cardColorClass}`}>
                    <CardHeader>
                      <Icon className={`mb-4 h-10 w-10 ${iconColorClass}`} />
                      <CardTitle className="text-2xl">{industry.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{industry.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Industry Expertise - Redesigned */}
      <section className="gradient-blue py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 flex justify-center">
              <h2 className="section-divider pb-4 text-center text-3xl font-bold tracking-tight">
                Our Industry Expertise
              </h2>
            </div>
            <p className="mb-12 text-center text-lg text-muted-foreground">
              Our recruiters don't just understand recruitment – they understand the industries they serve. Each member of
              our team brings specialized knowledge of their focus sectors, including:
            </p>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {expertiseCards.map((item, index) => {
                const Icon = item.icon;
                const bgColorClass = item.color === 'blue' ? 'bg-primary/10' : 
                                    item.color === 'green' ? 'bg-secondary/10' : 
                                    'bg-accent/10';
                const iconColorClass = item.color === 'blue' ? 'text-primary' : 
                                      item.color === 'green' ? 'text-secondary' : 
                                      'text-accent';
                const borderColorClass = item.color === 'blue' ? 'border-primary/20' : 
                                        item.color === 'green' ? 'border-secondary/20' : 
                                        'border-accent/20';
                
                return (
                  <Card 
                    key={index} 
                    className={`expertise-card group border-2 ${borderColorClass} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                  >
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <div className={`mb-4 rounded-full p-4 ${bgColorClass} transition-transform duration-300 group-hover:scale-110`}>
                        <Icon className={`h-8 w-8 ${iconColorClass}`} />
                      </div>
                      <p className="text-sm font-medium leading-relaxed text-foreground">
                        {item.title}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground">
                This deep industry knowledge allows us to have meaningful conversations with both clients and candidates,
                ensuring we make matches that truly work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Industry Capabilities */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex justify-center">
              <h2 className="section-divider pb-4 text-center text-3xl font-bold tracking-tight">
                Cross-Industry Capabilities
              </h2>
            </div>
            <p className="mb-6 text-lg text-muted-foreground">
              While we have deep expertise in specific industries, we also recognize that many skills and roles transcend
              sector boundaries. Our cross-industry perspective allows us to:
            </p>
            <div className="space-y-6">
              <Card className="card-blue">
                <CardHeader>
                  <CardTitle className="text-primary">Identify Transferable Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We recognize when candidates from one industry can successfully transition to another, opening up
                    opportunities that others might miss.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-green">
                <CardHeader>
                  <CardTitle className="text-secondary">Bring Fresh Perspectives</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sometimes the best hire comes from outside your industry. We help companies benefit from diverse
                    experiences and new approaches.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-orange">
                <CardHeader>
                  <CardTitle className="text-accent">Support Career Transitions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We guide professionals looking to pivot their careers, helping them leverage their existing skills in
                    new contexts.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
