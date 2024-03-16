## Description
Task Manager API is a RESTful API built with Node.js, Express, and MongoDB. It provides functionalities for user registration, login, and task management. This API is designed to be scalable leveraging the power of JavaScript and the robustness of MongoDB for data storage.

# Main Tools and Technologies Used

The Task Manager API is developed using the following primary tools and technologies:

<ul>
<li>Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine, used for building scalable network applications. It provides the foundation for the API's server-side logic.</li>

<li>Express.js: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. Express.js is used to handle HTTP requests and responses, making it easier to build RESTful APIs.</li>

<li>MongoDB: A source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is used as the database for storing user and task data, providing a flexible and scalable solution for data storage.
MongoDB Atlas: A fully-managed cloud database developed by the same people that build MongoDB. MongoDB Atlas handles all the complexity of deploying, managing, and healing deployments on the cloud service provider of your choice (AWS, Azure, and GCP). It's used in this project to provide a scalable and flexible document database as a service.</li>

<li>Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js. Mongoose provides a straightforward, schema-based solution to model your application data and includes built-in type casting, validation, query building, and business logic hooks.</li>

<li>bcrypt: A library to help you hash passwords. It's used for securing user passwords before storing them in the database.</li>

<li>jsonwebtoken: An implementation of JSON Web Tokens (JWT) for Node.js, used for creating and verifying tokens for authentication.</li>

<li>dotenv: A zero-dependency module that loads environment variables from a .env file into process.env. It's used for managing environment variables, such as database connection 
  strings and secret keys.</li>

<li>cors: A package for providing a Connect/Express middleware that can be used to enable CORS with various options. It's used to handle Cross-Origin Resource Sharing, making it possible for the API to be consumed by web applications hosted on different domains</li>
</ul>


## Prerequisites
Before you begin, ensure you have the following installed on your system:
<ul>
<li>Node.js (v14.x or higher): Node.js is a JavaScript runtime that allows you to run JavaScript on your server. You can download it from the official Node.js website.</li>
<li></li>MongoDB (v4.x or higher): MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. You can download it from the official MongoDB website.</li>
</ul>

##Setting Up Your Environment
<ul>
<li>Clone the Repository: Use `git clone` to clone the repository.</li>
<li>Navigate to Server Directory: Use `cd server` server to navigate to the project directory.</li>
<li>Install Dependencies: Run `npm install` to install all necessary dependencies.</li>
<li>Configure Environment Variables: Create a `config.env` file in the `src`  directory and set the following environment variables:</li>
  <ul>
<li>MONGO_URI: Your MongoDB database URL</li>
<li>PORT: The port number on which your application will run</li>
<li>TOKEN_SECRET_KEY: Your JSON Web Token (JWT) secret key</li>
    </ul>
<li>Start the Server: Run `npm start` to start the server.</li>
<li>Verify the Application is Running: Open your web browser and navigate to http://localhost:<PORT>, replacing <PORT> with the port number you specified in the `.env` file.</li>
</ul>
