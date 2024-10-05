import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/components/UI/StyledComponentsRegistry';
import { Providers } from '@/redux/provider';
import './globals.css';


export const metadata: Metadata = {
  title: 'Next.js Base Project',
  description: 'Created with Next.js 14, TypeScript, and Styled Components',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}