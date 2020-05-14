Postman Collection Name: Authentication Strategy

1). Create a signup API and form(using ejs template)  for user to signup [Mandatory data: name, email, password]. Use mongodb to store user information like name, email and password(encrypt the password using bcrypt[https://www.npmjs.com/package/bcrypt]).

2). Update the  passport local authentication strategy taught in the session to use the user information stored in mongodb.

3). Setup dummy facebook app(https://developers.facebook.com/) and use it along with passport-facebook(http://www.passportjs.org/docs/facebook/) to login. To successfully use facebook login for testing purpose, the dummy app has to be in development mode.