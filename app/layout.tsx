import type { Metadata } from 'next';
import './globals.css';
import { publicAsset } from '@/lib/public-asset';
import { profile } from '@/data/portfolio';
export const metadata: Metadata = { title: `${profile.name} | ${profile.headline}`, icons: { icon: publicAsset('/favicon.svg') }, description: "Denys Rosokha — Project Manager | Operations, Delivery & AI-enabled Workflows | Frankfurt am Main" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
