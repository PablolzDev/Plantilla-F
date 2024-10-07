"use client";

import React from 'react';
import StyledComponentsRegistry from '@/components/UI/StyledComponentsRegistry';
import { Providers } from '@/redux/provider';
import './globals.css';
import { IntlProvider } from 'react-intl';
import ProviderSessionAuth from './ProviderSession';

export default function RootLayoutClient({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: string;
  messages: any;
}) {
  return (
    <html lang={locale}>
      <body>
        <StyledComponentsRegistry>
          <IntlProvider locale={locale} messages={messages}>
            <ProviderSessionAuth>
              <Providers>{children}</Providers>
            </ProviderSessionAuth>
          </IntlProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}