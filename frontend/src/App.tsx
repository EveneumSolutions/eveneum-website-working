import { RouterProvider, createRouter, createRoute, createRootRoute, useRouterState } from '@tanstack/react-router';
import { useEffect } from 'react';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ForCompaniesPage } from './pages/ForCompaniesPage';
import { ForCandidatesPage } from './pages/ForCandidatesPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ServicesPage } from './pages/ServicesPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsConditionsPage } from './pages/TermsConditionsPage';

// Scroll to top component that listens to route changes
function ScrollToTop() {
  const routerState = useRouterState();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [routerState.location.pathname]);
  
  return null;
}

// Layout wrapper that includes scroll restoration
function LayoutWithScrollRestoration() {
  return (
    <>
      <ScrollToTop />
      <Layout />
    </>
  );
}

const rootRoute = createRootRoute({
  component: LayoutWithScrollRestoration,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const forCompaniesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/for-companies',
  component: ForCompaniesPage,
});

const forCandidatesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/for-candidates',
  component: ForCandidatesPage,
});

const aboutUsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about-us',
  component: AboutUsPage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: ServicesPage,
});

const industriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/industries',
  component: IndustriesPage,
});

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog',
  component: BlogPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/privacy-policy',
  component: PrivacyPolicyPage,
});

const termsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/terms-conditions',
  component: TermsConditionsPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  forCompaniesRoute,
  forCandidatesRoute,
  aboutUsRoute,
  servicesRoute,
  industriesRoute,
  blogRoute,
  contactRoute,
  privacyRoute,
  termsRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
