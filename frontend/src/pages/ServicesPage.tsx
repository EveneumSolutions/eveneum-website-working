import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useGetServices } from '../hooks/useQueries';
import { UserCheck, Clock, Users, Code, Calculator } from 'lucide-react';

export function ServicesPage() {
  const { data: services, isLoading } = useGetServices();

  const serviceDetails = [
    {
      icon: UserCheck,
      title: 'Permanent Staffing',
      key: 'permanentStaffing',
      color: 'blue',
      details:
        'Our permanent staffing solutions help you build a stable, long-term workforce. We handle the entire recruitment process from sourcing to onboarding, ensuring you find candidates who will grow with your organization.',
    },
    {
      icon: Clock,
      title: 'Contract & Temporary Staffing',
      key: 'contractStaffing',
      color: 'green',
      details:
        'Need flexible workforce solutions? Our contract and temporary staffing services provide qualified professionals for short-term projects, seasonal demands, or interim positions while you search for permanent hires.',
    },
    {
      icon: Users,
      title: 'Bulk Hiring',
      key: 'bulkHiring',
      color: 'orange',
      details:
        'Scaling your team quickly? Our bulk hiring expertise ensures you can onboard large numbers of qualified candidates efficiently without compromising on quality. Perfect for new projects, expansions, or seasonal needs.',
    },
    {
      icon: Code,
      title: 'IT Recruitment',
      key: 'itRecruitment',
      color: 'blue',
      details:
        'Technology roles require specialized knowledge. Our IT recruitment team understands the nuances of tech positions and can identify candidates with the right technical skills, from software developers to system architects.',
    },
    {
      icon: Calculator,
      title: 'Finance & Accounting Recruitment',
      key: 'financeRecruitment',
      color: 'green',
      details:
        'Financial roles demand precision and expertise. We specialize in placing accounting professionals, financial analysts, controllers, and CFOs who bring both technical competence and strategic thinking.',
    },
  ];

  const whyChooseItems = [
    {
      title: 'Industry Expertise',
      description: 'Our recruiters specialize in specific industries and functions, bringing deep knowledge of market trends, salary benchmarks, and skill requirements.',
      color: 'blue',
    },
    {
      title: 'Extensive Network',
      description: 'We\'ve built relationships with thousands of qualified professionals across various industries, giving you access to both active job seekers and passive candidates.',
      color: 'green',
    },
    {
      title: 'Quality Assurance',
      description: 'Every candidate goes through rigorous screening, including skills assessment, reference checks, and cultural fit evaluation before being presented to you.',
      color: 'orange',
    },
    {
      title: 'Flexible Solutions',
      description: 'Whether you need one specialized hire or a team of 100, we scale our services to match your requirements and timeline.',
      color: 'blue',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="gradient-multi py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">Our Services</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Comprehensive staffing and recruitment solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          {isLoading ? (
            <div className="grid gap-8 md:grid-cols-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader>
                    <div className="h-8 w-8 rounded-full bg-muted" />
                    <div className="h-6 w-3/4 rounded bg-muted" />
                    <div className="h-4 w-full rounded bg-muted" />
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
              {serviceDetails.map((service, index) => {
                const Icon = service.icon;
                const backendDescription = services?.[service.key as keyof typeof services];
                const iconColorClass = service.color === 'blue' ? 'text-primary' : 
                                      service.color === 'green' ? 'text-secondary' : 
                                      'text-accent';
                const cardColorClass = service.color === 'blue' ? 'card-blue' : 
                                      service.color === 'green' ? 'card-green' : 
                                      'card-orange';
                return (
                  <Card key={index} className={`card-hover-lift ${cardColorClass}`}>
                    <CardHeader>
                      <Icon className={`mb-4 h-10 w-10 ${iconColorClass}`} />
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      {backendDescription && (
                        <CardDescription className="text-base">{backendDescription}</CardDescription>
                      )}
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{service.details}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="gradient-blue py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 flex justify-center">
              <h2 className="section-divider-center pb-4 text-3xl font-bold tracking-tight">Why Choose Our Services</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {whyChooseItems.map((item, index) => {
                const cardColorClass = item.color === 'blue' ? 'card-blue' : 
                                      item.color === 'green' ? 'card-green' : 
                                      'card-orange';
                const titleColorClass = item.color === 'blue' ? 'text-primary' : 
                                       item.color === 'green' ? 'text-secondary' : 
                                       'text-accent';
                return (
                  <Card key={index} className={`card-hover-lift ${cardColorClass}`}>
                    <CardHeader>
                      <CardTitle className={`text-xl ${titleColorClass}`}>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
