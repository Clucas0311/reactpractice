//  i mport the React and ReactDOM libraries
// import the variable name from a library
import React from 'react';
import ReactDOM from 'react-dom';
function getButtonText() {
	return 'Click on me!';
}
// Create a react component
// a function or a class
// area for event handler, showing content to the user
const App = function() {
	return (
		<div>
			<label className="label" for="name">
				Enter name:
			</label>
			<input id="name" type="text" />
			<button style={{ backgroundColor: 'blue', color: 'white' }}>{getButtonText()}</button>
		</div>
	);
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
