import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/components/UI/StyledComponentsRegistry';
import { Providers } from '@/redux/provider';
import './globals.css';
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import ProviderSessionAuth from './ProviderSession';


export const metadata: Metadata = {
  title: 'Next.js Base Project',
  description: 'Created with Next.js 14, TypeScript, and Styled Components',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body>
        <StyledComponentsRegistry>
          <NextIntlClientProvider messages={messages}>
            {children}
            <ProviderSessionAuth>
              <Providers>{children}</Providers>
            </ProviderSessionAuth>
          </NextIntlClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}