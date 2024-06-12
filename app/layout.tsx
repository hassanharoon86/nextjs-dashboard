import '@/app/ui/global.css';
import { inter } from '@/app/ui/font.ts';
import { lusitana } from '@/app/ui/font.ts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialised`}>{children}</body>
    </html>
  );
}
