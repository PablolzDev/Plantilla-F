import { getLocale, getMessages } from 'next-intl/server';
import RootLayoutClient from './app/layout';

export default async function RootLayoutServer({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return <RootLayoutClient locale={locale} messages={messages}>{children}</RootLayoutClient>;
}