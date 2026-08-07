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
  name: 'Rathan Kabir',
  headline: 'Front-End Developer · React.js Specialist',
  location: 'Bangladesh',
  email: 'rayhan.kabir29@gmail.com',
  phone: '+8801743274189',
  bio: [
    'With over three years of hands-on experience in front-end development using React.js, I build dynamic, responsive, and user-friendly interfaces. I am proficient in JavaScript, HTML, and CSS, and have practical experience with modern build tools like Webpack and Babel for efficient, scalable applications.',
    'I have integrated RESTful APIs and third-party services across various projects, collaborating closely with backend teams and UI/UX designers. I prioritize clean, maintainable code and follow best practices for performance optimization and cross-browser compatibility.',
    'My process includes thorough debugging, unit testing, and clear documentation to ensure code quality and team transparency. I stay current with the latest front-end technologies and bring a proactive mindset to every project.',
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
