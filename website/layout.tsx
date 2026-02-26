import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Inspire Software | Strategy Execution + Performance Management',
  description: 'Inspire Software is the unified, AI-driven platform that connects OKRs, continuous performance management, and CFR — so leaders get real-time visibility and every employee sees how their work drives company success.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
