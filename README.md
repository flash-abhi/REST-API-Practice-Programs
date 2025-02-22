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

# JWT Authentication
Enhance web application security by implementing JWT (JSON Web Token) authentication for a designated route. This hands-on task provides practical insights into reinforcing web applications with JWT-based authentication, a vital aspect of building secure and robust systems.

### Objectives:
- There is a route "/api/product" that needs to be secured using JWT (JSON Web Token) authentication.
- Modify the "loginUser" controller to generate a JWT token upon successful user login.
- Store the generated JWT token in a cookie named "jwtToken".
- Implement the "jwtAuth" middleware to fetch and verify the "jwtToken" cookie.
- Grant access to the "/api/product" route if the token is valid.
- Send a response with status 401 and JSON object { success: false, msg: error } if the token is invalid or missing.

# Rating API program
You are working on an E-commerce project and have been assigned the task of implementing a product rating feature.
Users should be able to rate products using their user ID, product ID, and the desired rating as query parameters.
Invalid inputs (user ID, product ID, or rating out of range) should be handled, returning appropriate JSON responses.
The feature will enhance user engagement and help in making informed purchase decisions.

### Objectives:
- Implement the "rateProduct" controller for the route "api/product/rateproduct" that handles user ratings for products.
- Validate user input for user ID, product ID, and rating, responding with appropriate JSON objects for invalid cases.
- Pass the userId, productId, and rating as query parameters. For example: http://localhost:3000/api/product/rateproduct?userId=2&productId=3&rating=4
You can find a valid user ID in the user model, or you can register as a new user using the endpoint '/api/user/register'.
Initially, the 'products' array in the product model may not have a ratings array for each product. You can add a new field for ratings as an array, and all ratings related to the product should be pushed into it. For a user whose rating is already present, the rating should be updated.
- Sample output after rating a product: POST ("/api/product/rateproduct?userId=2&productId=3&rating=4");
Response:
{
    "success": true,
    "msg": {
        "id": 3,
        "name": "samsung",
        "price": 60000,
        "ratings": [
            {
                "rating": "4",
                "userId": "2"
            }
        ]
    }
}
- Ensure that product ratings fall within the range of 0 to 5.
- Provide a successful response containing the product details, including the updated ratings, in case of valid input.
