// Similar to ReactDOM.render that we use in index.js
import { render, screen, waitFor, queryByAttribute, fireEvent } from '@testing-library/react';
// for click events:
import userEvent from '@testing-library/user-event';
// import component you will be testing:
import App from './App';
// We need a redux store
import { Provider } from 'react-redux'
// import store that has been refactored into its own component
import store from '../../redux/store';
// this is so we can...
import '@testing-library/jest-dom/extend-expect'
// For setting up mock server (rest as in REST api) [msw = mock service worker]
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import SearchIcon from '@material-ui/icons/Search';

// Set up ability to select App elements by ID (i.e. icons without words on DOM):
const getById = queryByAttribute.bind(null, 'id');

///////////// SET UP MOCK SERVER ///////////////////////
// Once a user is logged in, they can do a GET /api/user
// so we have to make a pretend server to receive that
// so it looks like we are logged in when we aren't
// setupServer function receives an api argument
let user = {
  "id": 1,
  "username": "Mac@gmail.com",
  "firstName": "McKynlee",
  "lastName": "Westman",
  "profilePic": "https://karaspartyideas.com/wp-content/uploads/2016/11/Bike-Themed-Birthday-Party-via-Karas-Party-Ideas-KarasPartyIdeas.com28.jpeg",
  "password": "one",
  "address": "49 Walnut St",
  "city": "Kansas City",
  "state": "MO",
  "zip": 64112,
  "type": "planner",
  "website": "https://mckynlee.github.io/",
  "bio": "Avid organizer of bike rallies - the non-motorized kind!"
}

const server = setupServer(
  rest.get('/api/user', (req, res, ctx) => {
    // send back user object in ctx.json()
    return res(ctx.json(user))
  })
);

// before you run the tests, listen
beforeAll(() => server.listen());
// after each test clean up server
afterEach(() => server.resetHandlers());
// when done, shut down the server
afterAll(() => server.close());


test('should login user', async () => {
  const dom = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Check that "Login" displays on the welcome screen
  expect(screen.getByText('Login')).toBeVisible();

  // Click on 'Login' to be routed to /discover 
  // Compensate for some React-Router bug with leftClick
  const leftClick = { button: 0 };
  userEvent.click(screen.getByText('Login'), leftClick);

  // await always precedes waitFor
  // Wait for this text to be visible on screen before testing
  await waitFor(() => {
    screen.getByText('Discover Contrive')
  });

  // Check that Welcome text is visible (redundant, but c'est la vie)
  expect(screen.getByText('Discover Contrive')).toBeVisible();

  // Find search icon and simulate clicking on it:
  const searchIcon = getById(dom.container, 'searchIcon');
  userEvent.click(searchIcon);
  expect(screen.getByText('The Network')).toBeVisible();

  // Check that /search view rendered properly:
  expect(screen.getByText('The Network')).toBeVisible();
  expect(screen.getByText('Vendor Types')).toBeVisible();
});