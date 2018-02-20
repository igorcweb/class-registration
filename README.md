## Class App
Overview: Plan, design, develop, launch a realistic class inventory app.

### Database Resources
- Classes
- Students

### Classes
- Need to be pre-populated in the database, no need to create a web ui around adding classes at this time.
- Classes will need details such as; name, description, room, semesters it's offered in

### Student Features
- Students need to be able to search for classes by class name
- Students need to be able to register for an "Account"
- Students need to be able to signup for a class in a specific semester (semesters are one of spring, summer, fall, winter)
- Students need to be able to cancel registeration from classes
- Students need a dashboard where they can see all of the classes they have registered for AND ones that they have cancelled their registratior for.

### Other Requirements
- You will need to validate all data coming in on the backend

### Recommendations
- DO NOT use a React or any other js framework
- Use express
- Use Joi (for validation)
- Use MongoDb & Mongoose (ORM for mongo)
- Use Babel for ES6/ES7 features
- User nodemon (get babel working with nodemon)
	- https://babeljs.io/docs/setup/#installation

### MongoDB Connection
- The app is configured to use MongoLab connection by default. If you prefer to use local MongoDB connection, type the following command into the terminal: "env DB_URL='localhost' yarn start".