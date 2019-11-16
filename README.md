## Program can be viewed here: https://triangle-problem.herokuapp.com

## Triangle definition
The sum of two sides must be greater than the length of the third side A + B > C, A + C > B, and B + C > A, where A, B, and C are triangle side lengths. I will not include degenerate triangles where one side could be equal to 0 because it will result in a straight line. All side lengths must be greater than 0.

## Discussion of design decisions and implementation choices
I created a Problem component to allow the user to input the sides of the triangle. Upon submitting, the checkForErrors function ensures the side lengths are valid, otherwise it returns an error notification alert with the corresponding message. A triangle class was created because each triangle has each side length and triangle type as class properties. In addition, the relevant functions are contained in the class because they pertain to the triangle by interacting with the class properties. These functions determine the type of triangle and retrieve the triangle type using a getter without accessing it directly. Creating a separate triangle class gives the opportunity for additional functionality in the future. Once the type is determined, the state is updated which updates the view with the answer. I wrote tests to test the corresponding functions checkForErrors and determineTriangle to ensure that they return the correct error message or triangle type.




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
