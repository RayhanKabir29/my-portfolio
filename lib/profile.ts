export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'twitter' | 'linkedin' | 'facebook';
}

export interface Profile {
  name: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  bio: string[];
  socials: SocialLink[];
}

export const profile: Profile = {
  name: 'Rayhan Kabir',
  headline:
    'Front End Developer · React Developer · Next.js Developer · Webflow Developer · WordPress Developer',
  location: 'Bangladesh',
  email: 'rayhan.kabir29@gmail.com',
  phone: '+8801743274189',
  bio: [
    'I am a front end developer with over three years of hands-on experience building responsive, user-friendly interfaces with React.js, Next.js, JavaScript, HTML, CSS, and modern tooling.',
    'As a React developer and Next.js developer, I have delivered production web apps, admin dashboards, public websites, API integrations, and performance-focused user experiences across multiple industries.',
    'I also work as a Webflow developer and WordPress developer for marketing websites, CMS-driven pages, and business websites that need clean design, reliable editing workflows, and strong responsive behavior.',
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/RayhanKabir29', icon: 'github' },
    { label: 'Twitter', href: 'https://twitter.com/RayhanKabir29', icon: 'twitter' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rayhan-kabir29/',
      icon: 'linkedin',
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/rayhan.kabir.714',
      icon: 'facebook',
    },
  ],
};
