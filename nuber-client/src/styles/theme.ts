import baseStyled, { ThemedStyledInterface } from 'styled-components';

const theme = {
  borderRadius: '5px',

  colors: {
    main: 'cyan',
    secondary: 'magenta',
  },
};
export type ITheme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<ITheme>;
export default theme;
