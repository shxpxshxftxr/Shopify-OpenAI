# Haiku AI
A simple SPA to submit themes to the OpenAI API (https://beta.openai.com/overview) to receive a special Haiku from the curie AI model.
The AI model I'm using needs fine-tuning, as it doesn't always provide a true Haiku, but it consistently gives users tiny introspective poems from its tiny virtual heart.
Built for the Shopify Internship Challenge 2022.

Check it out on haikuai.herokuapp.com


# Getting Started 
```
cd <your_directory>

git clone https://github.com/shxpxshxftxr/Shopify-OpenAI

npm install

create .env file and supply an API key from OpenAI as your process.env variable
(see .env_example)

npm start 
```

# Here is a detailed list of scripts provided by [Create React App]

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

