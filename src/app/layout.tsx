import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';
import dynamic from 'next/dynamic';

const PostHogPageView = dynamic(
  () => import('@/components/posthog-page-view'),
  {
    ssr: false,
  }
);

const montserrat = Montserrat({
  weight: ['400', '100', '200', '300', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const openSans = Open_Sans({
  weight: ['400', '300', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: 'N. Nasrullah',
  description: "Noorullah Nasrullah's Portfolio Website",
  abstract: 'Noorullah Nasrullah Portfolio',
  creator: 'Noorullah Nasrullah',
  referrer: 'no-referrer-when-downgrade',
  metadataBase: new URL('https://nasnoor.dev'),
  keywords: [
    'Nasrullah',
    'Nas',
    'nasnoor',
    'Noorullah',
    'portfolio',
    'nasnoor.dev',
    'Developer',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        'h-full w-full scroll-smooth',
        montserrat.variable,
        openSans.variable
      )}
    >
      <body
        className={cn(
          'h-full w-full overflow-x-hidden scroll-smooth bg-zinc-100 font-open-sans dark:bg-background'
        )}
      >
        <Providers>
          <PostHogPageView />
          <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[150px] sm:w-[68.75rem] md:blur-[10rem] dark:bg-[#946263]"></div>
          <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[150px] sm:w-[68.75rem] md:left-[-33rem] md:blur-[10rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
