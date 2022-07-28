import React, { Fragment } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import BottomBanner from './components/BottomBanner/BottomBanner';

// Context Providers
import { ResourceContext } from '../providers/ResourceContext';
import { config } from '../resources/main.properties';

// Global Styles
import GlobalStyles from '../styles/GlobalStyles';
import { ThemeProvider } from '@emotion/react';
import { CustomTheme } from '../themes/default';

export default function Home() {
  return (
    <ThemeProvider theme={CustomTheme}>
      <Fragment>
        <GlobalStyles />
        <ResourceContext.Provider value={config}>
          <Header />
          <main>

          </main>
          <BottomBanner />
          <Footer />
        </ResourceContext.Provider>
      </Fragment>
    </ThemeProvider>
  )
}
