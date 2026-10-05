import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:
    'Rayhan Kabir | Front End Developer, React Developer, Next.js Developer',
  description:
    'Portfolio of Rayhan Kabir, a front end developer, React developer, Next.js developer, Webflow developer, and WordPress developer building responsive websites and production web apps.',
  keywords: [
    'front end developer',
    'frontend developer',
    'React developer',
    'React.js developer',
    'Next.js developer',
    'Next JS developer',
    'Webflow developer',
    'WordPress developer',
    'portfolio',
    'web developer Bangladesh',
    'responsive website developer',
  ],
  authors: [{ name: 'Rayhan Kabir' }],
  creator: 'Rayhan Kabir',
  publisher: 'Rayhan Kabir',
  icons: {
    icon: '/fav.png',
    shortcut: '/fav.png',
    apple: '/fav.png',
  },
  openGraph: {
    title:
      'Rayhan Kabir | Front End Developer, React Developer, Next.js Developer',
    description:
      'Explore Rayhan Kabir’s portfolio: front end development, React, Next.js, Webflow, WordPress, and responsive production websites.',
    type: 'website',
    siteName: 'Rayhan Kabir Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Rayhan Kabir | Front End Developer, React Developer, Next.js Developer',
    description:
      'Front end, React, Next.js, Webflow, and WordPress development portfolio by Rayhan Kabir.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
