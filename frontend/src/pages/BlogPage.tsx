import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, FileText, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';

// Sample blog data with cover images and full content
const sampleBlogs = [
  {
    id: 1,
    title: 'How to Hire Faster Without Compromising Quality',
    author: 'Eveneum Team',
    date: 'March 5, 2026',
    description: 'Discover proven strategies to accelerate your hiring process while maintaining high standards. Learn how to streamline interviews, leverage technology, and build efficient recruitment pipelines.',
    coverImage: '/assets/generated/blog-hiring-faster.dim_400x250.jpg',
    content: `
      <p>In today's competitive job market, speed is essential. Companies that can identify, engage, and hire top talent quickly gain a significant advantage. However, rushing the hiring process often leads to poor decisions, costly turnover, and cultural mismatches. The key is to hire faster without compromising on quality.</p>

      <h2>1. Define Clear Job Requirements</h2>
      <p>Before posting a job, take time to clearly define what you're looking for. Work with hiring managers to identify must-have skills, nice-to-have qualifications, and cultural fit criteria. A well-defined job description attracts the right candidates and reduces time spent reviewing unsuitable applications.</p>

      <h2>2. Leverage Technology and Automation</h2>
      <p>Modern recruitment tools can significantly speed up your hiring process. Applicant Tracking Systems (ATS) help you organize candidates, automate screening, and schedule interviews efficiently. AI-powered tools can even pre-screen resumes and rank candidates based on your criteria, allowing your team to focus on the most promising applicants.</p>

      <h2>3. Streamline Your Interview Process</h2>
      <p>Long, drawn-out interview processes frustrate candidates and increase the risk of losing top talent to competitors. Consider consolidating multiple interview rounds into fewer, more comprehensive sessions. Use structured interviews with standardized questions to make fair, consistent evaluations quickly.</p>

      <h2>4. Build a Talent Pipeline</h2>
      <p>Don't wait until you have an opening to start recruiting. Maintain relationships with potential candidates through networking, industry events, and social media. When a position opens, you'll have a pool of pre-qualified candidates ready to engage, dramatically reducing time-to-hire.</p>

      <h2>5. Partner with Recruitment Experts</h2>
      <p>Working with a specialized recruitment firm like Eveneum Solutions gives you access to extensive talent networks and industry expertise. We handle the time-consuming aspects of recruitment—sourcing, screening, and initial interviews—so you can focus on making the final decision with confidence.</p>

      <p>By implementing these strategies, you can significantly reduce your time-to-hire while maintaining the high standards necessary for building a strong, successful team. Remember, hiring faster doesn't mean cutting corners—it means working smarter.</p>
    `,
  },
  {
    id: 2,
    title: 'Current Hiring Trends Every Employer Should Know',
    author: 'Eveneum Team',
    date: 'February 28, 2026',
    description: 'Stay ahead of the curve with insights into the latest hiring trends. From remote work preferences to skills-based hiring, understand what candidates expect in today\'s job market.',
    coverImage: '/assets/generated/blog-hiring-trends.dim_400x250.jpg',
    content: `
      <p>The hiring landscape is evolving rapidly, driven by technological advances, changing workforce expectations, and global economic shifts. To attract and retain top talent, employers must stay informed about current trends and adapt their recruitment strategies accordingly.</p>

      <h2>1. Remote and Hybrid Work Models</h2>
      <p>The pandemic permanently changed how we think about work. Today's candidates expect flexibility in where and when they work. Companies offering remote or hybrid options have access to a much larger talent pool and often see higher employee satisfaction and retention rates.</p>

      <h2>2. Skills-Based Hiring</h2>
      <p>Traditional degree requirements are giving way to skills-based hiring. Employers are increasingly focusing on what candidates can do rather than where they studied. This approach opens opportunities to diverse talent pools and helps address skills gaps more effectively.</p>

      <h2>3. Emphasis on Diversity, Equity, and Inclusion</h2>
      <p>DEI is no longer just a buzzword—it's a business imperative. Companies with diverse teams demonstrate better problem-solving, innovation, and financial performance. Candidates, especially younger generations, actively seek employers with strong DEI commitments.</p>

      <h2>4. Candidate Experience Matters</h2>
      <p>In a candidate-driven market, the recruitment experience can make or break your ability to attract talent. Clear communication, timely feedback, and respectful treatment throughout the hiring process are essential. Remember, every candidate is a potential customer or brand ambassador.</p>

      <h2>5. Data-Driven Recruitment</h2>
      <p>Analytics and metrics are transforming recruitment. From tracking time-to-hire and cost-per-hire to measuring quality-of-hire and source effectiveness, data helps organizations optimize their recruitment strategies and make better hiring decisions.</p>

      <h2>6. Employer Branding</h2>
      <p>Your reputation as an employer significantly impacts your ability to attract talent. Candidates research companies extensively before applying. A strong employer brand—showcased through your website, social media, and employee testimonials—can be your greatest recruitment asset.</p>

      <p>At Eveneum Solutions, we help companies navigate these trends and implement recruitment strategies that attract the right talent in today's competitive market. Understanding and adapting to these trends isn't optional—it's essential for recruitment success.</p>
    `,
  },
  {
    id: 3,
    title: 'Resume Mistakes That Cost You Interviews',
    author: 'Eveneum Team',
    date: 'February 20, 2026',
    description: 'Avoid common resume pitfalls that prevent you from landing interviews. Learn what recruiters look for and how to present your experience effectively to stand out from the competition.',
    coverImage: '/assets/generated/blog-resume-mistakes.dim_400x250.jpg',
    content: `
      <p>Your resume is often your first—and sometimes only—chance to make an impression on a potential employer. Yet many qualified candidates miss out on interviews because of easily avoidable resume mistakes. Here are the most common errors and how to fix them.</p>

      <h2>1. Generic, One-Size-Fits-All Resumes</h2>
      <p>Sending the same resume to every job is a critical mistake. Recruiters can spot generic resumes immediately. Tailor your resume to each position by highlighting relevant skills and experiences that match the job description. Use keywords from the posting to help your resume pass Applicant Tracking Systems (ATS).</p>

      <h2>2. Focusing on Duties Instead of Achievements</h2>
      <p>Don't just list what you were responsible for—showcase what you accomplished. Instead of "Managed social media accounts," write "Increased social media engagement by 150% over six months, resulting in 500+ new leads." Quantifiable achievements demonstrate your value and impact.</p>

      <h2>3. Poor Formatting and Design</h2>
      <p>A cluttered, hard-to-read resume gets rejected quickly. Use clear headings, consistent formatting, adequate white space, and a professional font. Keep it to one or two pages. Remember, many resumes are first reviewed by ATS software, so avoid complex formatting, tables, or graphics that might not parse correctly.</p>

      <h2>4. Typos and Grammatical Errors</h2>
      <p>Nothing says "I don't pay attention to detail" like spelling mistakes and grammatical errors. Proofread your resume multiple times, use spell-check tools, and ask someone else to review it. A single typo can cost you an interview opportunity.</p>

      <h2>5. Including Irrelevant Information</h2>
      <p>Your high school achievements, unrelated hobbies, or every job you've ever had don't belong on your resume. Focus on recent, relevant experience that demonstrates your qualifications for the position you're applying for. Generally, limit work history to the past 10-15 years.</p>

      <h2>6. Weak or Missing Summary Statement</h2>
      <p>Your resume summary (or professional profile) is prime real estate. Use it to immediately communicate your value proposition. A strong summary highlights your key qualifications, years of experience, and what you bring to the role—all in 2-3 compelling sentences.</p>

      <h2>7. Unexplained Employment Gaps</h2>
      <p>Gaps in employment aren't necessarily deal-breakers, but leaving them unexplained raises red flags. Briefly address gaps with honest explanations: professional development, family care, health issues, or career transition. Focus on any skills or experiences gained during these periods.</p>

      <p>Your resume is a marketing document designed to get you an interview. By avoiding these common mistakes and presenting your qualifications clearly and professionally, you'll significantly increase your chances of landing that interview. Need help? Eveneum Solutions offers resume review and career coaching services to help you put your best foot forward.</p>
    `,
  },
  {
    id: 4,
    title: 'Preparing for Interviews in Global Roles',
    author: 'Eveneum Team',
    date: 'February 15, 2026',
    description: 'Master the art of interviewing for international positions. Get expert tips on cultural awareness, virtual interview etiquette, and showcasing your global mindset to potential employers.',
    coverImage: '/assets/generated/blog-global-interviews.dim_400x250.jpg',
    content: `
      <p>Interviewing for global roles presents unique challenges and opportunities. Whether you're applying for a position with an international company, a role that involves working with global teams, or a job in another country, preparation is key to success.</p>

      <h2>1. Research the Company's Global Presence</h2>
      <p>Understand the company's international operations, markets, and cultural values. Research their global initiatives, international partnerships, and how they approach cross-cultural collaboration. This knowledge demonstrates your genuine interest and helps you ask informed questions.</p>

      <h2>2. Demonstrate Cultural Awareness</h2>
      <p>Global roles require cultural sensitivity and adaptability. Be prepared to discuss your experience working with diverse teams, navigating cultural differences, and adapting your communication style. Share specific examples that showcase your cultural intelligence and flexibility.</p>

      <h2>3. Master Virtual Interview Etiquette</h2>
      <p>Many global role interviews happen via video conference. Test your technology beforehand, ensure good lighting and a professional background, and dress as you would for an in-person interview. Be mindful of time zones and arrive (virtually) a few minutes early. Maintain eye contact by looking at the camera, not the screen.</p>

      <h2>4. Highlight Language Skills</h2>
      <p>If you speak multiple languages, make this clear on your resume and be prepared to demonstrate your proficiency. Even basic language skills can be valuable in global roles. If the position requires a specific language, be honest about your level and your willingness to improve.</p>

      <h2>5. Showcase Your Global Mindset</h2>
      <p>Employers hiring for global roles look for candidates with international experience, cross-cultural competence, and the ability to think globally. Discuss any international travel, study abroad experiences, or work with international clients. Emphasize your curiosity about other cultures and your ability to see issues from multiple perspectives.</p>

      <h2>6. Prepare for Different Interview Styles</h2>
      <p>Interview styles vary across cultures. Some cultures favor direct, assertive communication, while others value humility and indirect communication. Research the cultural norms of the country or region where the company is based and adapt your approach accordingly while remaining authentic.</p>

      <h2>7. Ask About Support for Global Employees</h2>
      <p>Don't hesitate to ask about relocation support, visa sponsorship, cultural training, or resources for international employees. These questions show you're seriously considering the role and thinking practically about the transition.</p>

      <h2>8. Be Flexible with Timing</h2>
      <p>Global roles often require flexibility with work hours to accommodate different time zones. Be prepared to discuss your availability and willingness to adjust your schedule. This flexibility is often essential for success in international positions.</p>

      <p>Interviewing for global roles is an exciting opportunity to expand your career horizons. With proper preparation, cultural awareness, and a genuine interest in international work, you can make a strong impression and land your dream global position. Eveneum Solutions specializes in placing candidates in international roles—contact us to learn how we can help you navigate the global job market.</p>
    `,
  },
];

export function BlogPage() {
  const [showAll, setShowAll] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<typeof sampleBlogs[0] | null>(null);

  const displayedBlogs = showAll ? sampleBlogs : sampleBlogs.slice(0, 3);

  const handleReadMore = (blog: typeof sampleBlogs[0]) => {
    setSelectedBlog(blog);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToBlogs = () => {
    setSelectedBlog(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If a blog is selected, show the detailed view
  if (selectedBlog) {
    return (
      <div className="flex flex-col">
        {/* Blog Detail View */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              {/* Back Button */}
              <Button
                onClick={handleBackToBlogs}
                variant="ghost"
                className="mb-8 gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blogs
              </Button>

              {/* Blog Header */}
              <div className="mb-8">
                <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                  {selectedBlog.title}
                </h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {selectedBlog.author}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {selectedBlog.date}
                  </span>
                </div>
              </div>

              {/* Cover Image */}
              <div className="mb-8 overflow-hidden rounded-lg">
                <img
                  src={selectedBlog.coverImage}
                  alt={selectedBlog.title}
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Blog Content */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
              />

              {/* Back Button at Bottom */}
              <div className="mt-12 border-t pt-8">
                <Button
                  onClick={handleBackToBlogs}
                  variant="outline"
                  size="lg"
                  className="gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to All Blogs
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Default blog list view
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="gradient-orange py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <FileText className="mx-auto mb-6 h-16 w-16 text-accent" />
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">Insights & Resources</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Expert advice on hiring, career development, and industry trends
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {displayedBlogs.map((post, index) => (
              <Card 
                key={post.id} 
                className={`card-hover-lift overflow-hidden ${
                  index % 3 === 0 ? 'card-blue' : index % 3 === 1 ? 'card-green' : 'card-orange'
                }`}
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={post.coverImage} 
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription className="flex items-center gap-3 text-xs">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {post.description}
                  </p>
                  <Button 
                    variant="link" 
                    className="h-auto p-0 text-sm font-semibold"
                    onClick={() => handleReadMore(post)}
                  >
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More/Less Button */}
          {sampleBlogs.length > 3 && (
            <div className="mt-12 flex justify-center">
              <Button
                onClick={() => setShowAll(!showAll)}
                variant="outline"
                size="lg"
                className="gap-2"
              >
                {showAll ? (
                  <>
                    View Less
                    <ChevronUp className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    View More
                    <ChevronDown className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Topics Preview */}
      <section className="gradient-multi py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex justify-center">
              <h2 className="section-divider pb-4 text-center text-3xl font-bold tracking-tight">
                Topics We Cover
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="card-blue">
                <CardHeader>
                  <CardTitle className="text-primary">For Companies</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Effective hiring strategies</li>
                    <li>• Building strong employer brands</li>
                    <li>• Interview best practices</li>
                    <li>• Retention and engagement</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-green">
                <CardHeader>
                  <CardTitle className="text-secondary">For Candidates</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Resume writing tips</li>
                    <li>• Interview preparation</li>
                    <li>• Career development advice</li>
                    <li>• Salary negotiation strategies</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
