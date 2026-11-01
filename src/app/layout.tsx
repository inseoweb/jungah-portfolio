import type { Metadata, Viewport } from 'next';
import './globals.css';
import Sidebar from './components/Sidebar';
import { LanguageProvider } from '../lib/language';

export const metadata: Metadata = {
  title: '김정아 JungAh',
  description: '김정아 작가의 작품 아카이브',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    shortcut: ['/apple-touch-icon.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="font-sans bg-white text-gray-900">
        <LanguageProvider>
          <Sidebar />
          <div className="md:ml-[260px]">{children}</div>
        </LanguageProvider>
      </body>
    </html>
  );
}
