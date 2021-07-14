import React from 'react';
import { NavigationProvider } from '@Contexts/NavigationContext';

import Initial from '@Sections/Initial';

function App() {
  return (
    <NavigationProvider>
      <Initial />
    </NavigationProvider>
  );
}

export default App;
