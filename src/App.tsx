import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './theme/globalStyles';
import { Nav } from './components/organisms/Nav/Nav';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Home } from './components/pages/Home/Home';
import { SignIn } from './components/pages/SignIn/SignIn';
import { SignUp } from './components/pages/SignUp/SignUp';
import { Search } from './components/pages/Search/Search';
import { FoodProvider } from './context/FoodContext';
import { DietHistory } from './components/pages/DietHistory/DietHistory';
import { DateProvider } from './context/DateContext';
import { ToastsContainer } from './components/atoms/ToastsContainer/ToastsContainer';
import { DailyGoalProvider } from './context/DailyGoalContext';
import { Profile } from './components/pages/Profile/Profile';
import { PrivateRoute } from './components/atoms/PrivateRoute/PrivateRoute';

export const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <DateProvider>
            <FoodProvider>
              <DailyGoalProvider>
                <Nav />
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/search' element={<Search />} />
                  <Route path='/sign-in' element={<SignIn />} />
                  <Route path='/sign-up' element={<SignUp />} />
                  <Route element={<PrivateRoute />}>
                    <Route path='/diet-history' element={<DietHistory />} />
                    <Route path='/profile' element={<Profile />} />
                  </Route>
                </Routes>
                <ToastsContainer />
              </DailyGoalProvider>
            </FoodProvider>
          </DateProvider>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
};
