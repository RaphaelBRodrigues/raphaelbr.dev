import React from 'react';
import { NavigationProvider } from '@Contexts/NavigationContext';

import { ThemeProvider } from '@Styles/index';
import Header from '@Containers/Header/';
import { GeneralProvider } from '@Contexts/GeneralContext/Provider';
import FloatingCommits from '@Containers/FloatingCommits';
import Navigation from './Navigation';

function App() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <GeneralProvider>
          <Header />
          <FloatingCommits />
          <Navigation />
        </GeneralProvider>
      </NavigationProvider>
    </ThemeProvider>
  );
}

export default App;
