// Import Libraries
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

// AUTHENTICATION:
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

// CUSTOM COMPONENTS:
import AdminPage from '../Admin/AdminPage';
import Nav from '../Nav/Nav';
import EditVendorProfile from '../Profile/EditVendorProfile';
import ContriveHeader from '../Header/ContriveHeader';
import CreateEvent from '../Event/CreateEvent';
import EventCreatedConfirmation from '../Event/EventCreatedConfirmation';
import Footer from '../Footer/Footer';
import AboutPage from '../AboutPage/AboutPage';
import Message from '../MessageAll/MessageConversation';
import MessagesList from '../MessageAll/MessagesList';
import MyEvents from '../Event/MyEvents';
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
  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <ThemeProvider theme={contriveTheme}>
      <CssBaseline />
      <Router>
        <ContriveHeader />
        {user.id && <Nav />}

        <div>
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/welcome, 
            which redirects to localhost:3000/discover if user is already logged in (see below) */}
            <Redirect exact from="/" to="/welcome" />

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

            <ProtectedRoute exact path="/admin">
              <AdminPage />
            </ProtectedRoute>

            <ProtectedRoute exact path="/messages">
              <MessagesList />
            </ProtectedRoute>

            <ProtectedRoute exact path="/message/:id">
              <Message />
            </ProtectedRoute>

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
              path="/vendor/:id" // url will look like "/vendor/2"
            >
              <VendorProfile />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/vendor/edit/:id" // url will look like "/vendor/2"
            >
              <EditVendorProfile />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows Discover else shows LoginPage
              exact
              path="/discover"
            >
              <DiscoverPage />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows Discover else shows LoginPage
              exact
              path="/events/create"
            >
              <CreateEvent />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows Discover else shows LoginPage
              exact
              path="/my/events"
            >
              <MyEvents />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows Discover else shows LoginPage
              exact
              path="/events/confirmation"
            >
              <EventCreatedConfirmation />
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
              // - if logged in, redirects to "/discover"
              // - else shows LoginPage at /login
              exact
              path="/login"
              authRedirect="/discover"
            >
              <LoginPage />
            </ProtectedRoute>

            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/discover"
              // - else shows RegisterPage at "/registration"
              exact
              path="/registration"
              authRedirect="/discover"
            >
              <RegisterPage />
            </ProtectedRoute>

            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/discover"
              // - else shows RegisterPage at "/registration"
              exact
              path="/registration/vendor"
              authRedirect="/discover"
            >
              <RegisterVendorPage />
            </ProtectedRoute>

            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/discover"
              // - else shows LandingPage at "/welcome"
              exact
              path="/welcome"
              authRedirect="/discover"
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
