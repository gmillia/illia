import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import Routes from './Routes';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter basename={'/'}>
        <Routes />
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
