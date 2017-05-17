import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.PureComponent {
	render() {
		return <h1>Hello, {this.props.name}</h1>;
	}
}

function tick() {
	const element = <Welcome
		name="Luis"
	/>;

	ReactDOM.render(
		element,
		document.getElementById('root')
	);
}

setInterval(tick, 1000);
