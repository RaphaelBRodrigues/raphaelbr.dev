import { GeneralProvider } from '@Contexts/GeneralContext/Provider';
import { NavigationProvider } from '@Contexts/NavigationContext';
import themeConfig from '@Styles/themeConfig';
import { render } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

const renderWithProviders = (ComponentToRender: React.ReactNode) => {
  return render(
    <NavigationProvider>
      <GeneralProvider>
        <ThemeProvider theme={themeConfig}>{ComponentToRender}</ThemeProvider>
      </GeneralProvider>
    </NavigationProvider>,
  );
};

export default renderWithProviders;
