import React from 'react';

const Theme = {
  breakpoints: {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  colors: {
    red: 'red',
  },
};

const ThemeContext = React.createContext(void 0);

const ThemeProvider = ({ children, theme }: any): any => {
  const [state, setState] = React.useState({ ...Theme, ...theme });
  return (
    <ThemeContext.Provider value={[state, setState] as any}>
      {children}
    </ThemeContext.Provider>
  );
};

function useThemeContext(): any {
  return React.useContext(ThemeContext);
}

export { Theme, ThemeProvider, useThemeContext };
