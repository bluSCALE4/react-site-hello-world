import React from 'react';
import ReactDOM from 'react-dom';

function formatDate(date) {
	return date.toLocaleDateString();
}

function Avatar(props) {
	return (
		<img className="Avatar"
			src={props.user.avatarUrl}
			alt={props.user.name}
		/>
	);

}

function UserInfo(props) {
	return (
		<div className="UserInfo">
			<Avatar user={props.user} />
		</div>
	);
}

function Comment(props) {
	return (
		<div className="Comment">
			<UserInfo
				user={props.author}
			/>
			<div className="UserInfo-name">
				{props.author.name}
			</div>
			<div className="Comment-text">
				{props.text}
			</div>
			<div className="Comment-date">
				{formatDate(props.date)}
			</div>
		</div>
	);
}

const comment = {
	date: new Date(),
	text: 'I help you enjoy learning React!',
	author: {
		name: 'Luis Larrea',
		avatarUrl: 'http://placekitten.com/g/64/64'
	},
};

function Welcome(props) {
	return <h1>Hello, {props.name}</h1>;
}

function App() {
	return (
		<div>
			<Welcome name="Sara"/>
			<Welcome name="Rachel"/>
			<Welcome name="Etsuko"/>
			<Comment
				date={comment.date}
				text={comment.text}
				author={comment.author}
			/>
		</div>
	);
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
