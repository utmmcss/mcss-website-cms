# Setting up Development Environment

1. Clone the Repository
2. Within the project directory, run the command `yarn install` (If you haven't already, install yarn)
3. Run `yarn develop` and navigate to to the admin dashboard
4. Create an account. If you can't, navigate to the database in the `temp` folder and add yourself to the `admin_users` table
5. Go to the settings tab and create an API Key. Use this as a bearer token when making requests
6. Navigate to `http:localhost:1337/documentation` to see a list of endpoints you can interact with

**And you're done!**

Since this CMS is not in production yet, you can populate the database with random data to do your testing. In the future, there will be a script to sync the database between production and development.

