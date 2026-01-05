import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Heart, Users, Award, TrendingUp, Lightbulb, Shield, Handshake, RefreshCw } from 'lucide-react';

export function AboutUsPage() {
  const values = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We operate with honesty and transparency in all our interactions.',
      color: 'blue',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest quality in every placement and partnership.',
      color: 'green',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We build lasting relationships based on trust and mutual success.',
      color: 'orange',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We continuously improve our processes and embrace new approaches.',
      color: 'blue',
    },
  ];

  const approachItems = [
    {
      icon: Lightbulb,
      title: 'Deep Understanding',
      description: 'We invest time in understanding both our clients\' needs and candidates\' aspirations. This deep understanding enables us to make matches that create lasting value.',
      color: 'blue',
    },
    {
      icon: Shield,
      title: 'Quality Focus',
      description: 'Quality always comes before quantity. We carefully vet every candidate and thoroughly assess every opportunity to ensure the best possible outcomes.',
      color: 'green',
    },
    {
      icon: Handshake,
      title: 'Long-term Partnership',
      description: 'We\'re not just filling positions – we\'re building relationships. Our success is measured by the long-term success of our placements and the ongoing partnerships we maintain.',
      color: 'orange',
    },
    {
      icon: RefreshCw,
      title: 'Continuous Improvement',
      description: 'We constantly refine our processes, expand our networks, and enhance our expertise to deliver better results for our clients and candidates.',
      color: 'blue',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="gradient-multi py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">About Eveneum Solutions</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Your trusted partner in staffing and recruitment excellence
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex justify-center">
              <h2 className="section-divider pb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
                Who We Are
              </h2>
            </div>
            <p className="mb-6 text-lg text-muted-foreground">
              Eveneum Solutions is a professional staffing and recruitment firm dedicated to connecting exceptional
              talent with outstanding opportunities. We specialize in helping companies build high-performing teams and
              assisting professionals in advancing their careers.
            </p>
            <p className="mb-6 text-lg text-muted-foreground">
              With deep expertise across multiple industries and functions, we understand the unique challenges of modern
              recruitment. Our approach combines industry knowledge, extensive networks, and personalized service to
              deliver results that exceed expectations.
            </p>
            <p className="text-lg text-muted-foreground">
              Whether you're a company looking to scale your team or a professional seeking your next opportunity, we're
              here to make the process smooth, efficient, and successful.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="gradient-blue py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="card-blue card-hover-lift">
              <CardHeader>
                <Target className="mb-4 h-12 w-12 text-primary" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To empower organizations and professionals by creating meaningful connections that drive mutual success.
                  We're committed to delivering recruitment solutions that are efficient, effective, and aligned with our
                  clients' strategic goals.
                </p>
              </CardContent>
            </Card>

            <Card className="card-green card-hover-lift">
              <CardHeader>
                <Eye className="mb-4 h-12 w-12 text-secondary" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be the most trusted recruitment partner, recognized for our integrity, expertise, and commitment to
                  excellence. We envision a future where every placement we make contributes to long-term success for both
                  companies and candidates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="section-divider mb-8 pb-4 text-3xl font-bold tracking-tight md:text-4xl">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              const colorClass = value.color === 'blue' ? 'bg-primary/10 text-primary' : 
                                value.color === 'green' ? 'bg-secondary/10 text-secondary' : 
                                'bg-accent/10 text-accent';
              return (
                <Card key={index} className="card-hover-lift text-center">
                  <CardHeader>
                    <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${colorClass}`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="gradient-green py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <div className="mb-8 flex justify-center">
              <h2 className="section-divider-center pb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Our Approach
              </h2>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {approachItems.map((item, index) => {
              const Icon = item.icon;
              const colorClass = item.color === 'blue' ? 'bg-primary/10 text-primary' : 
                                item.color === 'green' ? 'bg-secondary/10 text-secondary' : 
                                'bg-accent/10 text-accent';
              const cardClass = item.color === 'blue' ? 'card-blue' : 
                               item.color === 'green' ? 'card-green' : 
                               'card-orange';
              return (
                <Card key={index} className={`card-hover-lift ${cardClass}`}>
                  <CardHeader>
                    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${colorClass}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
