import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

// AUTHENTICATION:
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

// CUSTOM COMPONENTS:
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import AboutPage from '../AboutPage/AboutPage';
import Message from '../MessageAll/MessageAll';
// import MessageDetail from '../MessageDetail/MessageDetail';
import UserPage from '../UserPage/UserPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import DiscoverPage from '../DiscoverPage/DiscoverPage';
import SearchNetwork from '../SearchNetwork/SearchNetwork';
import StyleGuide from '../StyleGuide/StyleGuide';
import VendorProfile from '../Profile/VendorProfile';
import RegisterVendorPage from '../RegisterPage/RegisterVendorPage';

import './App.css';

// Material-UI:
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

const contriveTheme = createMuiTheme({
  palette: {
    background: {
      paper: '#fff',
      default: '#fff',
      level2: '#f5f5f5',
      level1: '#fff',
    },
    secondary: {
      light: '#fffff9',
      main: '#fefcc6',
      dark: '#cac995',
      contrastText: '#000000',
    },
    primary: {
      light: '#cd7c50',
      main: '#984f26',
      dark: '#652500',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: ['Forum', 'Raleway'].join(','),
  },
});


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
    dispatch({ type: 'FETCH_VENDOR_TYPES' });
    dispatch({ type: 'FETCH_SPECIAL_FEATURES' });
  }, [dispatch]);

  return (

    <ThemeProvider theme={contriveTheme}>
      <CssBaseline />
      <Router>
        <Nav />
        <div>
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/message" />

            {/* Visiting localhost:3000/about will show the about page. */}
            <Route
              // shows AboutPage at all times (logged in or not)
              exact
              path="/about"
            >
              <AboutPage />
            </Route>

            {/* Visiting localhost:3000/styleGuide will show the styleGuide used for this page.
            This route should be removed/inaccessible by users for production.*/}
            <Route
              // shows the StyleGuide for this Project
              exact
              path="/styleGuide"
            >
              <StyleGuide />
            </Route>

            <Route exact path="/message">
              <Message />
            </Route>

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/user"
            >
              <UserPage />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/vendor"
            >
              <VendorProfile />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows Discover else shows LoginPage
              exact
              path="/discover"
            >
              <DiscoverPage />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows Search else shows LoginPage
              exact
              path="/search"
            >
              <SearchNetwork />
            </ProtectedRoute>

            {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LoginPage at /login
              exact
              path="/login"
              authRedirect="/user"
            >
              <LoginPage />
            </ProtectedRoute>

            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows RegisterPage at "/registration"
              exact
              path="/registration"
              authRedirect="/user"
            >
              <RegisterPage />
            </ProtectedRoute>

            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/vendor"
              // - else shows RegisterPage at "/registration"
              exact
              path="/registration/vendor"
              authRedirect="/vendor"
            >
              <RegisterVendorPage />
            </ProtectedRoute>

            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LandingPage at "/home"
              exact
              path="/home"
              authRedirect="/user"
            >
              <LandingPage />
            </ProtectedRoute>


            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LandingPage at "/home"
              exact
              path="/vendor"
              authRedirect="/user"
            >
              <LandingPage />
            </ProtectedRoute>

            {/* If none of the other routes matched, we will show a 404. */}
            <Route>
              <h1>404</h1>
            </Route>
          </Switch>
          <Footer />
          
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
