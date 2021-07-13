import React, { useContext } from 'react';
import { NavigationContext } from './contexts/NavigationContext/Context';
import NavigationProvider from './contexts/NavigationContext/Provider';

function App() {
  return <NavigationProvider>App</NavigationProvider>;
}

export default App;
