import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserCircle, FileText, MessageSquare, Briefcase, CheckCircle2, Target, MapPin, Clock, Building2, Monitor, Globe } from 'lucide-react';
import { useGetAllJobListings } from '@/hooks/useQueries';
import { JobApplicationModal } from '@/components/JobApplicationModal';

// Sample job listings as fallback
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

export function ForCandidatesPage() {
  const { data: backendJobListings, isLoading: jobsLoading } = useGetAllJobListings();
  const [selectedJob, setSelectedJob] = useState<{ title: string; id: string } | null>(null);
  const [showAllJobs, setShowAllJobs] = useState(false);

  const applicationSteps = [
    {
      icon: FileText,
      title: 'Submit Your Resume',
      description: 'Share your resume and career goals with us through our contact form.',
      color: 'blue',
    },
    {
      icon: MessageSquare,
      title: 'Initial Screening',
      description: 'We review your profile and discuss potential opportunities that match your skills.',
      color: 'green',
    },
    {
      icon: Briefcase,
      title: 'Interview Process',
      description: 'We prepare you for interviews and coordinate with potential employers.',
      color: 'orange',
    },
    {
      icon: CheckCircle2,
      title: 'Offer & Placement',
      description: 'We support you through negotiations and ensure a smooth transition to your new role.',
      color: 'blue',
    },
  ];

  // Use backend jobs if available, otherwise use sample jobs
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

  const displayedJobs = showAllJobs ? jobListings : jobListings.slice(0, 4);
  const hasMoreJobs = jobListings.length > 4;

  // Scroll to Current Opportunities section if hash is present
  useEffect(() => {
    if (window.location.hash === '#current-opportunities') {
      const element = document.getElementById('current-opportunities');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="gradient-green py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <UserCircle className="mx-auto mb-6 h-16 w-16 text-secondary" />
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">Career Opportunities for Professionals</h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Let us help you find your next career opportunity and achieve your professional goals
            </p>
            <Button 
              size="lg" 
              className="btn-gradient-orange" 
              onClick={() => setSelectedJob({ title: '', id: 'general' })}
            >
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      {/* Candidate Process */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex justify-center">
              <h2 className="section-divider-center pb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
                How We Help You
              </h2>
            </div>
            <p className="mb-6 text-lg text-muted-foreground">
              At Eveneum Solutions, we're committed to helping professionals like you find roles that align with your
              skills, experience, and career aspirations. We don't just match resumes to job descriptions – we take the
              time to understand your unique strengths and goals.
            </p>
            <p className="text-lg text-muted-foreground">
              Our team works with leading companies across multiple industries, giving you access to opportunities you
              might not find elsewhere. We act as your advocate throughout the hiring process, providing guidance,
              preparation, and support every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="gradient-blue py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <div className="mb-8 flex justify-center">
              <h2 className="section-divider-center pb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Your Journey With Us
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">A simple, transparent process from application to placement</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {applicationSteps.map((step, index) => {
              const Icon = step.icon;
              const colorClass = step.color === 'blue' ? 'bg-primary/10 text-primary' : 
                                step.color === 'green' ? 'bg-secondary/10 text-secondary' : 
                                'bg-accent/10 text-accent';
              const cardClass = step.color === 'blue' ? 'card-blue' : 
                               step.color === 'green' ? 'card-green' : 
                               'card-orange';
              return (
                <Card key={index} className={`card-hover-lift ${cardClass}`}>
                  <CardHeader>
                    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${colorClass}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expectations */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <div className="mb-8 flex justify-center">
              <h2 className="section-divider-center pb-4 text-3xl font-bold tracking-tight md:text-4xl">
                What We Look For
              </h2>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="card-blue card-hover-lift">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Professional Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We seek candidates who demonstrate strong skills, relevant experience, and a commitment to
                  professional growth. Your track record of achievements and continuous learning matters to us.
                </p>
              </CardContent>
            </Card>

            <Card className="card-green card-hover-lift">
              <CardHeader>
                <CardTitle className="text-xl text-secondary">Cultural Fit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Beyond technical skills, we consider how well you'll fit with potential employers' cultures and
                  values. We want to ensure you'll thrive in your new environment.
                </p>
              </CardContent>
            </Card>

            <Card className="card-orange card-hover-lift">
              <CardHeader>
                <CardTitle className="text-xl text-accent">Career Motivation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We value candidates who have clear career goals and are motivated to make meaningful contributions.
                  Your ambition and drive are important factors in our matching process.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="gradient-orange py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex justify-center">
              <h2 className="section-divider-center pb-4 text-center text-3xl font-bold tracking-tight">
                Getting Started
              </h2>
            </div>
            <div className="space-y-6">
              <div className="rounded-lg bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-semibold text-primary">Prepare Your Resume</h3>
                <p className="text-muted-foreground">
                  Ensure your resume is up-to-date, clearly formatted, and highlights your key achievements and skills.
                  Include specific examples of your impact in previous roles.
                </p>
              </div>

              <div className="rounded-lg bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-semibold text-secondary">Define Your Goals</h3>
                <p className="text-muted-foreground">
                  Think about what you're looking for in your next role – industry, company size, role type, location
                  preferences, and salary expectations. The clearer you are, the better we can help.
                </p>
              </div>

              <div className="rounded-lg bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-semibold text-accent">Stay Engaged</h3>
                <p className="text-muted-foreground">
                  Once you submit your resume, stay responsive to our communications. The best opportunities often move
                  quickly, and your timely responses help us advocate effectively for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section id="current-opportunities" className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <div className="mb-8 flex justify-center">
              <h2 className="section-divider-center pb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Current Opportunities
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Explore our current job openings and take the next step in your career
            </p>
          </div>

          {jobsLoading ? (
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

              {hasMoreJobs && (
                <div className="mt-8 text-center">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setShowAllJobs(!showAllJobs)}
                    className="min-w-[200px]"
                  >
                    {showAllJobs ? 'View Less' : 'View More Openings'}
                  </Button>
                </div>
              )}

              <div className="mt-8 text-center">
                <p className="text-lg font-medium text-muted-foreground">
                  Apply, and we will get back to you with the detailed job description.
                </p>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Hiring Message */}
      <section className="gradient-blue py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-lg bg-card p-8 shadow-lg md:p-12">
            <div className="mb-8 flex justify-center">
              <h3 className="section-divider-center pb-4 text-center text-2xl font-bold tracking-tight md:text-3xl">
                Global Opportunities Across Multiple Domains
              </h3>
            </div>
            <p className="text-center text-lg leading-relaxed text-muted-foreground">
              We work on multiple hiring requirements across the US, UK, Canada, Australia, and New Zealand, supporting 
              roles in Finance, Business Development, and Information Technology.{' '}
              <span className="font-bold text-foreground">
                All current opportunities may not be listed on this website.
              </span>{' '}
              We invite you to apply with your details, and our team will reach out to you when 
              a suitable opportunity aligns with your profile.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Target className="mx-auto mb-6 h-16 w-16 text-primary" />
            <div className="mb-8 flex justify-center">
              <h2 className="section-divider-center pb-4 text-3xl font-bold tracking-tight">
                Ready to Take the Next Step?
              </h2>
            </div>
            <p className="mb-8 text-lg text-muted-foreground">
              Submit your resume today and let us help you find the perfect opportunity to advance your career.
            </p>
            <Button 
              size="lg" 
              className="btn-gradient-blue" 
              onClick={() => setSelectedJob({ title: '', id: 'general' })}
            >
              Apply Now
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
