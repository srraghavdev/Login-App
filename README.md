# LoginApp

This project is built using ReactJs,Firebase,React-Router-DOM,React-Avatar,Framer-Motion and Toastify.

Depencdies used and their functions:

## Firebase

Firebase is used for authentication and FireStore for storing the details in a document for each user inside 'user_details' collection.

## React-Router-DOM

React-Router-DOM is used to make pages like (login , signup and profile) using Routes

## React-Avatar

React-Avatar is used to create custom rounded avatar using name initials.

## Framer-Motion

Framer-Motion is used for appyling animation to each page

## Toastify

Toastify is used for adding toasts for success and errors during signing up and logging in.

# User Flow

The user will be taken to the home page where the user can go to either Login page or Signup page.

## Flow

Home=>Login OR Signup\
Login page (Enter details and login to your account with toasts for errors) = > Profile page\
Signup page (Enter all the details that are required and get registered with relevant toasts with validations ) = > Profile page\
Profile page (Custom avatar is displayed with user information and a Logout button, checking to give access to profile page only when a user is signed in) => Logout(will take user back to Home page)\

# Project Structure

The project has four pages i.e. LandingPage.js,Login.js,Profile.js and Signup.js.  
Assets folder with camera image found in profile image.  
Components folder with Input and Button compoenents both of which are styled custom components.  
firebaseConfig where all the firebaseConfig is stored.  
App.js has all the Routes for each page.  
Each component has an index.js file and a styles.css file.  
Custom favicons placed in the public folder  

# Steps to setup project locally

## Adding Firbase

To run this project locally , please add firebaseConfig object to firebaseConfig.js before running the project(left empty by default). [Reference](https://firebase.google.com/docs/web/setup).

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
