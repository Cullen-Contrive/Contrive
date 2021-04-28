# Heroku

### Heroku Prerequisite

1. Sign up for an account on [Heroku.com](https://www.heroku.com/)
2. Install Heroku CLI by typing `brew tap heroku/brew && brew install heroku` in your Terminal
  - [Additional installation notes and troubleshooting](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
3. Authenticate by typing `heroku login` in Terminal (this will open your browser for you to authenticate login)

> Note: Your project will need to have a git repository to deploy to Heroku, which you create when you pull the GitHub repository down to your local machine. [More information on cloning a GitHub repository here] (https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

### Heroku Setup

Before you deploy, verify that your `PORT` in your server.js file is configured correctly as:

```JavaScript
const PORT = process.env.PORT || 5000;
```

In order to control the name of your Heroku application in as few steps as possible, We recommend creating a Heroku App first, then integrate it with your git project, but you can also do this in reverse order.  We have written our recommendation, but you can find alternative solutions [here] (https://devcenter.heroku.com/articles/git#creating-a-heroku-remote). 

1. In terminal, navigate to your project folder and type `heroku create`
2. Login in if prompted
3. Type `git remote -v` to ensure it added successfully
4. In terminal, type `git push heroku master`
5. Our website is now live! However... we also have a database

### Postgresql on Heroku

1. In terminal, type `heroku addons:create heroku-postgresql:hobby-dev` to set up Postgresql on your Heroku project
2. Next, type `heroku pg:push your_database DATABASE_URL` to copy your database contents up to Heroku. `your_database` is the actual name of your database (e.g. `koala_holla_`). `DATABASE_URL` is a heroku config variable created by the Add On. Do not replace it with something else, just type: `DATABASE_URL`. For example, if you were deploying the `koala_holla` database, you should type `heroku pg:push koala_holla DATABASE_URL`
3. Update or create a module for your pg-pool configuration to the following code that will convert the heroku `DATABASE_URL` into a pool config object. The only line you should have to change is `database: process.env.DATABASE_NAME || 'your_database'`. Change `your_database` to the actual name of your database. (e.g. `database: process.env.DATABASE_NAME || 'koala_holla'`:

**modules/pool.js**

```JavaScript
/**
* You'll need to use environment variables in order to deploy your
* pg-pool configuration to Heroku.
* It will look something like this:
**/
/* the only line you likely need to change is
 database: 'prime_app',
 change `prime_app` to the name of your database, and you should be all set!
*/

const pg = require('pg');
const url = require('url');

let config = {};

// We need a different pg configuration if we're running
// on Heroku, vs if we're running locally.
//
// Heroku gives us a process.env.DATABASE_URL variable,
// so if that's set, we know we're on heroku.
if (process.env.DATABASE_URL) {
  config = {
    // We use the DATABASE_URL from Heroku to connect to our DB
    connectionString: process.env.DATABASE_URL,
    // Heroku also requires this special `ssl` config
    ssl: { rejectUnauthorized: false },
  };
} else {
  // If we're not on heroku, configure PG to use our local database
  config = {
    host: 'localhost',
    port: 5432,
    database: 'prime_app', // CHANGE THIS LINE to match your local database name!
  };
}

// this creates the pool that will be shared by all other modules
const pool = new pg.Pool(config);

// the pool will log when it connects to the database
pool.on('connect', () => {
  console.log('Postgesql connected');
});

// the pool with emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err) => {
  console.log('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = pool;
```

When you need a pool, use the following code:

```JavaScript
var pool = require('../modules/pool.js');
```

Next, commit your changes and push them to Heroku:

```
git add .
git commit -m "MESSAGE"
git push heroku master
```

> Note: You'll need to commit and push each time you make a change that you want to deploy to Heroku. Automatic deployments are covered in [a later section](#gui-and-automatic-deployment) **Keep in mind you CAN NOT pull from Heroku. This is not a replacement for GitHub!**

Lastly, open terminal and type `heroku open`, which should show you your deployed site!

> Note: It is best to fully test your code locally before deploying to Heroku. Bugs are much harder to troubleshoot on a live website.

### Miscellaneous

- `heroku logs` - Display error logs
- `heroku config` - Show basic app info
- `heroku restart` - Sometimes it helps to turn things off an on again
- `heroku open` - Opens the website for you project in the browser

## GUI and Automatic Deployment

The [Heroku](https://www.heroku.com/) website GUI can simplify several of the steps taken above especially for projects where you intend to make future changes.

1. In [your list of Heroku apps](https://dashboard.heroku.com/apps), select your application.
2. Under the `Deploy` tab, in the `Deployment Method` section, select `Github`. Connect to the `Github` repository with your application by searching for the name of your repository.
3. In the `Manual Deploy` section, click `Deploy Branch` to deploy for the first time.

## Connect Postico to your Heroku Database

If you would like to edit your database, you can connect to your Heroku database directly from Postico. 

1. In [your list of Heroku apps](https://dashboard.heroku.com/apps), select your application.
2. Under `Resources` or in the `Configure Add-Ons` section, select `Heroku Postgres`.
3. Select the `Settings` tab and click `View Credentials`
4. Open Postico and select `New Favorite`.
5. In the new Postico favorite, update the following to match Heroku:
  - Host
  - User
  - Database
  - Password
  - Port
6. Click `Connect` and you should have access to your database directly from Postico!

## Resources

More detailed instructions can be found here: 

- Deployment Videos [https://drive.google.com/drive/u/1/folders/0B9sCDSmGi72ZN2hpR1Etbl9qb2c](https://drive.google.com/drive/u/1/folders/0B9sCDSmGi72ZN2hpR1Etbl9qb2c)
- [https://devcenter.heroku.com/articles/git](https://devcenter.heroku.com/articles/git)
- [https://devcenter.heroku.com/articles/heroku-postgresql](https://devcenter.heroku.com/articles/heroku-postgresql)
