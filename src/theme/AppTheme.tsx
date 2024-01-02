import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';
import { GlobalStyles } from './GlobalStyles';

interface Props {
  children: JSX.Element;
}

export const AppTheme: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}