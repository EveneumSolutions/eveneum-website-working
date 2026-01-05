import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useGetCompanyInfo, useSubmitContactForm } from '../hooks/useQueries';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';

export function ContactPage() {
  const { data: companyInfo, isLoading: isLoadingInfo } = useGetCompanyInfo();
  const submitContactForm = useSubmitContactForm();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    inquiryType: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message || !formData.inquiryType) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      await submitContactForm.mutateAsync(formData);
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', phone: '', message: '', inquiryType: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      inquiryType: value,
    }));
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="gradient-multi py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Send className="mx-auto mb-6 h-16 w-16 text-primary" />
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">Get In Touch</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              We'd love to hear from you. Reach out to discuss your hiring needs or career opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex justify-center">
                <h2 className="section-divider-center mb-8 pb-4 text-3xl font-bold tracking-tight">Contact Information</h2>
              </div>

              {isLoadingInfo ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="animate-pulse">
                      <CardHeader>
                        <div className="h-6 w-3/4 rounded bg-muted" />
                      </CardHeader>
                      <CardContent>
                        <div className="h-4 w-full rounded bg-muted" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  <Card className="card-green card-hover-lift">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-secondary">
                        <Phone className="h-5 w-5" />
                        Phone
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{companyInfo?.phone}</p>
                    </CardContent>
                  </Card>

                  <Card className="card-orange card-hover-lift">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-accent">
                        <Mail className="h-5 w-5" />
                        Email
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{companyInfo?.email}</p>
                    </CardContent>
                  </Card>

                  <Card className="card-blue card-hover-lift">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-primary">
                        <MapPin className="h-5 w-5" />
                        Address
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{companyInfo?.address}</p>
                    </CardContent>
                  </Card>

                  <Card className="card-blue card-hover-lift">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-primary">
                        <Clock className="h-5 w-5" />
                        Business Hours
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>

            {/* Contact Form */}
            <div>
              <Card className="card-green">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="h-10"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="h-10"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 12345 67890"
                        className="h-10"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">I am a</Label>
                      <Select value={formData.inquiryType} onValueChange={handleSelectChange} required>
                        <SelectTrigger id="inquiryType" className="h-10">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Company looking to hire">Company looking to hire</SelectItem>
                          <SelectItem value="Candidate looking for a job">Candidate looking for a job</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your needs or questions..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="btn-gradient-blue w-full"
                      disabled={submitContactForm.isPending}
                    >
                      {submitContactForm.isPending ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
