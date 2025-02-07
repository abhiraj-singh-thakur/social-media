# Social Media App

This is a full-stack social media application built with a React.js frontend and a Node.js and Express.js backend.

## Project Outline

The social media application allows users to:

- **User Authentication:**
    - Create an account
    - Log in 
    - Log out
- **Posts:**
    - Create posts with captions and images.
    - Like and unlike posts.
    - View posts from users they follow in a personalized feed.
- **User Profiles:**
    - View user profiles.
    - Follow and unfollow users.
    - Update their profile information (name, bio, profile picture).


## Client-Server Interaction

The client and server communicate using the standard HTTP protocol. Here's a breakdown:

1. **Client-Side Requests:** The React frontend makes API calls to specific endpoints on the server.
2. **Authentication:** User authentication is handled via JWT (JSON Web Tokens).  
    - Upon successful login, the server sends back an access token.
    - The client stores this token and includes it in the headers of subsequent requests to protected routes.
3. **Data Fetching/Modification:** For actions like creating posts, following users, etc., the client sends data to the server. 
    - The server processes the request, interacts with the database, and sends back a response to the client.
4. **Data Display:** The client receives data from the server (e.g., posts, user profiles) and dynamically renders it in the user interface.

## Tools & Technologies

### Frontend (Client)

- **React.js:** JavaScript library for building the user interface.
- **Redux Toolkit:** State management library for React, simplifying data flow and updates.
- **Axios:**  Promise-based HTTP client for making API requests to the backend.
- **Tailwind CSS:** Utility-first CSS framework for styling the application.
- **React Router:**  For handling navigation and routing within the application.
- **React Icons:** A library for easily using various icon sets. 

### Backend (Server)

- **Node.js:** JavaScript runtime environment to execute server-side code.
- **Express.js:** Web application framework for Node.js, used for routing and handling HTTP requests.
- **MongoDB:**  NoSQL database for storing user data, posts, and other application information.
- **Mongoose:** Object Data Modeling (ODM) library for MongoDB, providing a schema-based solution for interacting with the database.
- **bcrypt:**  Library for hashing and salting passwords before storing them securely.
- **jsonwebtoken:** Library for generating and verifying JWTs for user authentication.
- **Cloudinary:** Cloud image and video management service for storing and serving user-uploaded images.
