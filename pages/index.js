import React, { Fragment } from 'react';
import Head from 'next/head';

// Custom components
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import BottomBanner from '../components/BottomBanner/BottomBanner';
import CardLayout from '../components/layouts/CardLayout/CardLayout';
import Hero from '../components/Hero/Hero';

// Context Providers
import { ResourceContext } from '../providers/ResourceContext';
import { config } from '../resources/main.properties';

// Global Styles
import GlobalStyles from '../styles/GlobalStyles';
import { ThemeProvider } from '@emotion/react';
import { CustomTheme } from '../themes/default';
import URLShortenLayout from '../components/layouts/URLShorten/URLShortenLayout';

export default function Home() {
  return (
    <ThemeProvider theme={CustomTheme}>
      <Fragment>
        <Head>
          <title>Shortly</title>
        </Head>
        <GlobalStyles />
        <ResourceContext.Provider value={config}>
          <Header />
          <main>
            <Hero />
            <URLShortenLayout />
            <CardLayout />
          </main>
          <BottomBanner />
          <Footer />
        </ResourceContext.Provider>
      </Fragment>
    </ThemeProvider>
  )
}
