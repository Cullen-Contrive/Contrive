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
import Message from '../MessageAll/MessageConversation';
import MessagesList from '../MessageAll/MessagesList';
import MyEvents from '../Event/MyEvents';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../Register/RegisterPage';
import DiscoverPage from '../DiscoverPage/DiscoverPage';
import SearchNetwork from '../SearchNetwork/SearchNetwork';
import StyleGuide from '../StyleGuide/StyleGuide';
import VendorProfile from '../Profile/VendorProfile';
import RegisterVendorPage from '../Register/RegisterVendorPage';

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
        {user.id && <ContriveHeader />}
        {user.id && <Nav />}

        <div>
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/welcome,
            which redirects to localhost:3000/discover if user is already logged in (see below) */}
            <Redirect exact from="/" to="/welcome" />

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

            <ProtectedRoute
              path="/vendor/:id" // url will look like "/vendor/2"
              exact
            >
              <VendorProfile />
            </ProtectedRoute>

            <ProtectedRoute
              path="/vendor/edit/:id" // url will look like "/vendor/edit/2"
              exact
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

            <ProtectedRoute exact path="/events/create">
              <CreateEvent />
            </ProtectedRoute>

            <ProtectedRoute exact path="/my/events">
              <MyEvents />
            </ProtectedRoute>

            <ProtectedRoute exact path="/events/confirmation">
              <EventCreatedConfirmation />
            </ProtectedRoute>

            <ProtectedRoute exact path="/search">
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
              <ContriveHeader />
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
              <ContriveHeader />
              <RegisterPage />
            </ProtectedRoute>

            <ProtectedRoute
              exact
              path="/registration/vendor"
              authRedirect="/discover"
            >
              <ContriveHeader />
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
