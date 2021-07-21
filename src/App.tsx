import React from 'react';
import { NavigationProvider } from '@Contexts/NavigationContext';

import Initial from '@Sections/Initial';
import { ThemeProvider } from '@Styles/index';
import Header from '@Containers/Header/';
import { GeneralProvider } from '@Contexts/GeneralContext/Provider';

function App() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <GeneralProvider>
          <Header />
          <Initial />
        </GeneralProvider>
      </NavigationProvider>
    </ThemeProvider>
  );
}

export default App;
