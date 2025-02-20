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
# Third program
Implement user registration and login functionality for an API used in a web application. Users should be able to register by providing their details and subsequently log in using their credentials. This requires completing the necessary controller functions for user registration and login, which will interact with the user model.
### Objectives:
- Implement the "registerUser" controller function, which takes user's name, email, and password from req.body. It should use the "addUser" function from the user model to add the new user to the "users" array.
- Implement the "loginUser" controller function, which takes user's email and password from req.body. It should use the "confirmLogin" function from the user model to verify the validity of the login attempt.
- Expected output:
i) For "registerUser" function: successful addition of a new user to the "users" array.
ii) For "registerUser" function: JSON response with a status code of 201 indicating success. The response should include a JSON object: { "status": "success", "user": }.
iii) For "loginUser" function: JSON response with a status code of 200 indicating success if the login is successful. The response should include a JSON object: { "status": "success", "msg": "login successful" }.
iv) If the login attempt is unsuccessful due to invalid user details: JSON response with a status code of 400. The response should include a JSON object: { "status": "failure", "msg": "invalid user details" }.

# Basic Authentication program
In this problem, your task is to implement a middleware using basic authentication to permit access only to authenticated users with valid credentials, thereby ensuring data privacy and restricting unauthorized access to an endpoint.
### Objectives:
- Implement express-basic authentication middleware inside "src/middlewares/basicAuth.js."
- Restrict access to the "/api/product" route.
- Allow only authenticated users with valid credentials to access the API.
- expected outcome:
  is to have the "/api/product" API accessible only to users who provide valid credentials. Unauthorized users should receive an authentication error or be denied access.
