import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './theme/globalStyles';
import { Nav } from './components/organisms/Nav/Nav';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import { AuthProvider } from './context/AuthContext';
import { Home } from './components/pages/Home/Home';
import { SignIn } from './components/pages/SignIn/SignIn';
import { SignUp } from './components/pages/SignUp/SignUp';

export const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
};
