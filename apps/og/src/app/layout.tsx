import type { Metadata } from 'next';

import { APP_NAME, DESCRIPTION } from '@hey/data/constants';

export const metadata: Metadata = {
  description: DESCRIPTION,
  title: APP_NAME
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
