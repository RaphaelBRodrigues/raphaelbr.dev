import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './themeConfig';

const Theme: React.FC = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
