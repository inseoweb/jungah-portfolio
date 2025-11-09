// src/app/layout.tsx
import './globals.css';
import Navbar from './components/Navbar'; // 클라이언트 컴포넌트

export const metadata = {
  title: '김정아 JungAh',
  description: '김정아 작가의 작품 아카이브',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="font-sans bg-white text-gray-900">
        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
