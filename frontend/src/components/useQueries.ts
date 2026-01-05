import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { BlogPost, JobRole, JobListing } from '../backend';
import { ExternalBlob } from '../backend';

export function useGetAllBlogPosts() {
  const { actor, isFetching } = useActor();

  return useQuery<BlogPost[]>({
    queryKey: ['blogPosts'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllBlogPosts();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllJobRoles() {
  const { actor, isFetching } = useActor();

  return useQuery<JobRole[]>({
    queryKey: ['jobRoles'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllJobRoles();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllJobListings() {
  const { actor, isFetching } = useActor();

  return useQuery<JobListing[]>({
    queryKey: ['jobListings'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllJobListings();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetCompanyInfo() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['companyInfo'],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getCompanyInfo();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetServices() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getServices();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetIndustries() {
  const { actor, isFetching } = useActor();

  return useQuery<string[]>({
    queryKey: ['industries'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getIndustries();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ 
      name, 
      email, 
      phone, 
      message, 
      inquiryType 
    }: { 
      name: string; 
      email: string; 
      phone: string; 
      message: string; 
      inquiryType: string;
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.submitContactForm(name, email, phone, message, inquiryType);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contactSubmissions'] });
    },
  });
}

export function useSubmitJobApplication() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ 
      fullName, 
      phone, 
      email, 
      jobTitle, 
      skills, 
      totalExperience, 
      currentLocation,
      resumeFile
    }: { 
      fullName: string; 
      phone: string; 
      email: string; 
      jobTitle: string; 
      skills: string; 
      totalExperience: string; 
      currentLocation: string;
      resumeFile: File;
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      
      // Convert file to Uint8Array
      const arrayBuffer = await resumeFile.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);
      
      // Create ExternalBlob from file bytes
      const resumeBlob = ExternalBlob.fromBytes(uint8Array);
      
      return actor.submitJobApplication(
        fullName,
        phone,
        email,
        jobTitle,
        skills,
        totalExperience,
        currentLocation,
        resumeBlob
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobApplications'] });
    },
  });
}
