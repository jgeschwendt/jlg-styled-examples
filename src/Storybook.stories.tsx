import { addDecorator } from '@storybook/react';
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { reboot } from 'styled-reboot';

const Reboot = createGlobalStyle`${reboot()}`;

addDecorator((storyFn) => (
  <ThemeProvider theme={{
    breakpoints: {
      xs: 0,
      sm: 400,
      md: 600,
      lg: 900,
      xl: 1200,
      hd: 1600,
    }
  }}>
    <React.Fragment>
      <Reboot />{storyFn()}
    </React.Fragment>
  </ThemeProvider>
));
