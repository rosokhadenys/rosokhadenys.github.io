import type { Metadata } from 'next';
import './globals.css';
import { publicAsset } from '@/lib/public-asset';
import { profile, contact } from '@/data/portfolio';
export const metadata: Metadata = { title: `${profile.name} | ${profile.role} transitioning into IT`, icons: { icon: publicAsset('/favicon.svg') }, description: `${profile.name} — ${profile.role} transitioning into IT. ${contact.location}. ${profile.introduction}` };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
