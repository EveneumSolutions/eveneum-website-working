import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, CheckCircle2, Upload, X } from 'lucide-react';
import { useSubmitJobApplication } from '@/hooks/useQueries';

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
}

export function JobApplicationModal({ isOpen, onClose, jobTitle }: JobApplicationModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    jobTitle: jobTitle || '',
    skills: '',
    totalExperience: '',
    currentLocation: '',
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submitJobApplication = useSubmitJobApplication();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setErrors((prev) => ({ ...prev, resume: 'Please upload a PDF or Word document' }));
        setResumeFile(null);
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, resume: 'File size must be less than 5MB' }));
        setResumeFile(null);
        return;
      }
      setResumeFile(file);
      if (errors.resume) {
        setErrors((prev) => ({ ...prev, resume: '' }));
      }
    }
  };

  const removeFile = () => {
    setResumeFile(null);
    const fileInput = document.getElementById('resume') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required';
    if (!formData.skills.trim()) newErrors.skills = 'Skills are required';
    if (!formData.totalExperience.trim()) newErrors.totalExperience = 'Total experience is required';
    if (!formData.currentLocation.trim()) newErrors.currentLocation = 'Current location is required';
    if (!resumeFile) newErrors.resume = 'Resume is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await submitJobApplication.mutateAsync({
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        jobTitle: formData.jobTitle,
        skills: formData.skills,
        totalExperience: formData.totalExperience,
        currentLocation: formData.currentLocation,
        resumeFile: resumeFile!,
      });

      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
        handleClose();
      }, 3000);
    } catch (error) {
      console.error('Error submitting application:', error);
      setErrors({ submit: 'Failed to submit application. Please try again.' });
    }
  };

  const handleClose = () => {
    if (!submitJobApplication.isPending) {
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        jobTitle: jobTitle || '',
        skills: '',
        totalExperience: '',
        currentLocation: '',
      });
      setResumeFile(null);
      setErrors({});
      setShowSuccess(false);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-h-[85vh] sm:max-w-[600px] overflow-hidden flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b">
          <DialogTitle className="text-2xl font-bold text-foreground">
            Apply Now
          </DialogTitle>
          {jobTitle && (
            <DialogDescription className="text-sm text-muted-foreground pt-1">
              Position: <span className="font-medium text-foreground">{jobTitle}</span>
            </DialogDescription>
          )}
        </DialogHeader>

        <div className="overflow-y-auto px-6 py-4 flex-1">
          {showSuccess ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <CheckCircle2 className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">
                Thank you for applying
              </h3>
              <p className="text-sm text-muted-foreground">We will get back to you.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div className="space-y-1.5">
                <Label htmlFor="fullName" className="text-sm font-medium text-foreground">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`h-10 ${errors.fullName ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                  placeholder="Enter your full name"
                  disabled={submitJobApplication.isPending}
                />
                {errors.fullName && (
                  <p className="text-xs text-destructive">{errors.fullName}</p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Phone <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`h-10 ${errors.phone ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                  placeholder="Enter your phone number"
                  disabled={submitJobApplication.isPending}
                />
                {errors.phone && (
                  <p className="text-xs text-destructive">{errors.phone}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`h-10 ${errors.email ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                  placeholder="Enter your email address"
                  disabled={submitJobApplication.isPending}
                />
                {errors.email && (
                  <p className="text-xs text-destructive">{errors.email}</p>
                )}
              </div>

              {/* Job Title */}
              <div className="space-y-1.5">
                <Label htmlFor="jobTitle" className="text-sm font-medium text-foreground">
                  Job Title <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="jobTitle"
                  name="jobTitle"
                  type="text"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  className={`h-10 ${errors.jobTitle ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                  placeholder="Enter the job title you're applying for"
                  disabled={submitJobApplication.isPending}
                />
                {errors.jobTitle && (
                  <p className="text-xs text-destructive">{errors.jobTitle}</p>
                )}
              </div>

              {/* Skills */}
              <div className="space-y-1.5">
                <Label htmlFor="skills" className="text-sm font-medium text-foreground">
                  Skills <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  className={`min-h-[80px] resize-none ${errors.skills ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                  placeholder="List your relevant skills (e.g., Communication, MS Excel, Data Analysis)"
                  disabled={submitJobApplication.isPending}
                />
                {errors.skills && (
                  <p className="text-xs text-destructive">{errors.skills}</p>
                )}
              </div>

              {/* Total Experience */}
              <div className="space-y-1.5">
                <Label htmlFor="totalExperience" className="text-sm font-medium text-foreground">
                  Total Experience <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="totalExperience"
                  name="totalExperience"
                  type="text"
                  value={formData.totalExperience}
                  onChange={handleInputChange}
                  className={`h-10 ${errors.totalExperience ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                  placeholder="e.g., 3 years or Fresher"
                  disabled={submitJobApplication.isPending}
                />
                {errors.totalExperience && (
                  <p className="text-xs text-destructive">{errors.totalExperience}</p>
                )}
              </div>

              {/* Current Location */}
              <div className="space-y-1.5">
                <Label htmlFor="currentLocation" className="text-sm font-medium text-foreground">
                  Current Location <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="currentLocation"
                  name="currentLocation"
                  type="text"
                  value={formData.currentLocation}
                  onChange={handleInputChange}
                  className={`h-10 ${errors.currentLocation ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                  placeholder="Enter your current location"
                  disabled={submitJobApplication.isPending}
                />
                {errors.currentLocation && (
                  <p className="text-xs text-destructive">{errors.currentLocation}</p>
                )}
              </div>

              {/* Resume Upload */}
              <div className="space-y-1.5">
                <Label htmlFor="resume" className="text-sm font-medium text-foreground">
                  Resume <span className="text-destructive">*</span>
                </Label>
                <div className="space-y-2">
                  <Input
                    id="resume"
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                    disabled={submitJobApplication.isPending}
                  />
                  <label
                    htmlFor="resume"
                    className={`flex h-10 w-full cursor-pointer items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm transition-colors hover:bg-muted ${
                      errors.resume ? 'border-destructive' : ''
                    } ${submitJobApplication.isPending ? 'cursor-not-allowed opacity-50' : ''}`}
                  >
                    <span className="text-muted-foreground text-sm">
                      {resumeFile ? 'Change file' : 'Choose file (PDF, DOC, DOCX)'}
                    </span>
                    <Upload className="h-4 w-4 text-muted-foreground" />
                  </label>
                  {resumeFile && (
                    <div className="flex items-center justify-between rounded-md border bg-muted/30 px-3 py-2">
                      <span className="text-sm text-foreground truncate pr-2">{resumeFile.name}</span>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="text-muted-foreground transition-colors hover:text-foreground flex-shrink-0"
                        disabled={submitJobApplication.isPending}
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
                {errors.resume && (
                  <p className="text-xs text-destructive">{errors.resume}</p>
                )}
                <p className="text-xs text-muted-foreground">Maximum file size: 5MB</p>
              </div>

              {/* Submit Error */}
              {errors.submit && (
                <div className="rounded-md border border-destructive/30 bg-destructive/5 p-3">
                  <p className="text-sm text-destructive">{errors.submit}</p>
                </div>
              )}
            </form>
          )}
        </div>

        {!showSuccess && (
          <div className="flex justify-end gap-3 px-6 py-4 border-t bg-muted/20">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={submitJobApplication.isPending}
              className="h-10 px-5"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={handleSubmit}
              disabled={submitJobApplication.isPending}
              className="h-10 px-6 bg-primary hover:bg-primary/90"
            >
              {submitJobApplication.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Application'
              )}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
