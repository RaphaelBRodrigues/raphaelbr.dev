import React from 'react';
import { NavigationProvider } from '@Contexts/NavigationContext';

import Initial from '@Sections/Initial';
import { ThemeProvider } from '@Styles/index';
import Header from '@Containers/Header/';

function App() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <Header />
        <Initial />
      </NavigationProvider>
    </ThemeProvider>
  );
}

export default App;
