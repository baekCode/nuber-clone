import * as styledComponents from 'styled-components';
import { ITheme } from './theme';

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ITheme>;

export { css, keyframes, ThemeProvider };
export default styled;
