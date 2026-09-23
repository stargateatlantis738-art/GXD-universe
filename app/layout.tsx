import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GXD UNIVERSE — GOD & DEVIL',
  description: 'GXD UNIVERSE — GOD & DEVIL. THE DUALITY. BUILD. RISK. CHOOSE.',
  openGraph: {
    title: 'GXD UNIVERSE — GOD & DEVIL',
    description: 'The duality. Build. Risk. Choose.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
