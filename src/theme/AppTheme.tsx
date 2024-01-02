import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';

interface Props {
  children: JSX.Element;
}

export const AppTheme: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}