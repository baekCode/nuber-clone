import * as styledComponents from 'styled-components';

interface IThemInterface {
  blueColor: string;
}

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<IThemInterface>;

export { css, keyframes, ThemeProvider };
export default styled;
