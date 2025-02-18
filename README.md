# Program for practicing the REST APIs 
#  First program 
Learn to enhance code organization and maintainability in a Node.js web application by refactoring feature-specific routes into a separate file using the express Router module. This practice improves the modular structure of the application, promoting better readability and scalability. 
### Objectives: 
- Refactor the code to move all route handlers from index.js to tweet.routes.js.
- Following this refactoring, the middleware for accessing these routes in index.js should be set as 'app.use("/api/tweets", tweetRoutes)', and the route paths for 'getTweets' and 'createTweet' should be set to ('/') inside 'tweet.routes.js'.
- Ensure the GET /api/tweets endpoint lists all tweets.
- Ensure the POST /api/tweets endpoint creates a new tweet.
- Notes: Pay attention to the file structure and directory location for the tweet.routes.js file. Ensure the route handlers are correctly moved and mapped to the appropriate endpoints.
- Expected Output: The index.js file should only contain middleware and server configurations. All route handlers should be moved to tweet.routes.js.
