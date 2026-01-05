import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from '@tanstack/react-router';
import { useGetAllJobRoles, useGetAllJobListings } from '../hooks/useQueries';
import { CheckCircle2, Users, Target, Award, TrendingUp, Clock, Building2, Monitor, Globe, MapPin } from 'lucide-react';
import { JobApplicationModal } from '@/components/JobApplicationModal';

// Sample job listings as fallback (same as ForCandidatesPage)
const SAMPLE_JOBS = [
  {
    id: 1,
    title: 'US Accounting Executive',
    experience: '2–5 years',
    jobType: 'Full-time',
    workMode: 'Work from Office',
    process: 'US Process',
    location: 'Ahmedabad',
  },
  {
    id: 2,
    title: 'Customer Support Executive (Voice)',
    experience: 'Fresher–2 years',
    jobType: 'Full-time',
    workMode: 'Work from Office',
    process: 'US Process',
    location: 'Ahmedabad',
  },
  {
    id: 3,
    title: 'IT Support Engineer',
    experience: '1–3 years',
    jobType: 'Full-time',
    workMode: 'Hybrid',
    process: 'US Process',
    location: 'Ahmedabad',
  },
  {
    id: 4,
    title: 'Audit Associate',
    experience: '1–4 years',
    jobType: 'Full-time',
    workMode: 'Work from Office',
    process: 'UK Process',
    location: 'Ahmedabad',
  },
  {
    id: 5,
    title: 'Back Office Executive',
    experience: 'Fresher–1 year',
    jobType: 'Full-time',
    workMode: 'Work from Office',
    process: 'AU Process',
    location: 'Ahmedabad',
  },
];

export function HomePage() {
  const navigate = useNavigate();
  const { data: jobRoles, isLoading: jobRolesLoading } = useGetAllJobRoles();
  const { data: backendJobListings, isLoading: jobListingsLoading } = useGetAllJobListings();
  const [selectedJob, setSelectedJob] = useState<{ title: string; id: string } | null>(null);

  const reasons = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced recruiters with deep industry knowledge',
      color: 'blue',
    },
    {
      icon: Target,
      title: 'Targeted Approach',
      description: 'Customized recruitment strategies for your needs',
      color: 'green',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous screening and vetting processes',
      color: 'orange',
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Track record of successful placements',
      color: 'blue',
    },
  ];

  // Use backend job listings if available, otherwise use sample jobs
  const jobListings = backendJobListings && backendJobListings.length > 0 
    ? backendJobListings.map(job => ({
        id: Number(job.id),
        title: job.title,
        experience: job.experience,
        jobType: job.jobType,
        workMode: job.workMode,
        process: job.process,
        location: job.location,
      }))
    : SAMPLE_JOBS;

  // Display only first 4 jobs on home page
  const displayedJobs = jobListings.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container relative z-10">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-8">
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                Helping companies hire and professionals get hired
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Eveneum Solutions connects exceptional talent with outstanding opportunities. We're your trusted partner
                in staffing and recruitment.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="btn-gradient-blue" onClick={() => navigate({ to: '/for-companies' })}>
                  For Companies
                </Button>
                <Button size="lg" className="btn-gradient-green" onClick={() => navigate({ to: '/for-candidates' })}>
                  For Candidates
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src="/assets/generated/team-collaboration.dim_800x600.jpg" 
                  alt="Professional team collaboration" 
                  className="h-auto w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Focus Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src="/assets/generated/office-workspace.dim_700x500.jpg" 
                  alt="Modern office workspace" 
                  className="h-auto w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="order-1 space-y-6 lg:order-2">
              <div className="flex justify-center">
                <h2 className="section-divider-center mb-8 pb-4 text-3xl font-bold tracking-tight md:text-4xl">Our Focus</h2>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                At Eveneum Solutions, we specialize in connecting the right talent with the right opportunities. Our
                comprehensive approach ensures that both companies and candidates achieve their goals through strategic
                partnerships and personalized service.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Strategic Partnerships</p>
                    <p className="text-sm text-muted-foreground">Long-term relationships built on trust</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-secondary/20 bg-secondary/5 p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <div>
                    <p className="font-semibold text-foreground">Personalized Service</p>
                    <p className="text-sm text-muted-foreground">Tailored solutions for every client</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Opportunities Section */}
      <section className="gradient-blue py-16 md:py-24">
        <div className="container">
          <div className="mb-12 flex flex-col items-center">
            <h2 className="section-divider-center mb-8 pb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Current Opportunities
            </h2>
            <p className="text-lg text-muted-foreground">Explore our current job openings</p>
          </div>

          {jobListingsLoading ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader>
                    <div className="h-6 w-3/4 rounded bg-muted"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="h-4 w-full rounded bg-muted"></div>
                      <div className="h-4 w-5/6 rounded bg-muted"></div>
                      <div className="h-4 w-full rounded bg-muted"></div>
                      <div className="h-4 w-full rounded bg-muted"></div>
                      <div className="h-10 w-full rounded bg-muted"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {displayedJobs.map((job) => (
                  <Card key={job.id} className="card-hover-lift flex flex-col">
                    <CardHeader>
                      <CardTitle className="text-lg">{job.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-grow flex-col">
                      <div className="mb-4 flex-grow space-y-3">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{job.experience}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{job.jobType}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Monitor className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{job.workMode}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{job.process}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{job.location}</span>
                        </div>
                      </div>
                      <Button 
                        className="btn-gradient-blue w-full"
                        onClick={() => setSelectedJob({ title: job.title, id: String(job.id) })}
                      >
                        Apply Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
                <a href="/for-candidates#current-opportunities">
                  <Button variant="outline" size="lg" className="min-w-[200px]">
                    View More
                  </Button>
                </a>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 flex flex-col items-center">
            <h2 className="section-divider-center mb-8 pb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Why Choose Eveneum
            </h2>
            <p className="text-lg text-muted-foreground">What sets us apart in the recruitment industry</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              const colorClass = reason.color === 'blue' ? 'bg-primary/10 text-primary' : 
                                reason.color === 'green' ? 'bg-secondary/10 text-secondary' : 
                                'bg-accent/10 text-accent';
              return (
                <Card key={index} className="card-hover-lift text-center">
                  <CardHeader>
                    <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${colorClass}`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl">{reason.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-green py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Ready to Get Started?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Whether you're looking to hire top talent or find your next career opportunity, we're here to help.
            </p>
            <Button size="lg" className="btn-gradient-orange" onClick={() => navigate({ to: '/contact' })}>
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>

      {/* Job Application Modal */}
      <JobApplicationModal
        isOpen={!!selectedJob}
        onClose={() => setSelectedJob(null)}
        jobTitle={selectedJob?.title || ''}
      />
    </div>
  );
}
