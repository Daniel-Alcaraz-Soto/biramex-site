import '@mantine/core/styles.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { AppShell, MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import { HeaderMegaMenu } from '@/components/MegaMenuHeader/HeaderMegaMenu';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Grupo Biramex</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <AppShell
        padding="md"
        header={{ height: 80 }}
        withBorder={false}
      >
        <AppShell.Header>
          <HeaderMegaMenu />
        </AppShell.Header>

        <AppShell.Main>
          <Component {...pageProps} />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}