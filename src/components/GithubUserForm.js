import React, { useState } from 'react';
import './GithubUserForm.css';

const GithubUserForm = props => {
	const [enteredUser, setEnteredUser] = useState('');

	const enterUserHandler = event => {
		setEnteredUser(event.target.value);
	};

	const userHandler = event => {
		event.preventDefault();
		if (!enteredUser) {
			return;
		} else {
			const user = {
				enteredUser
			};

			props.onUserSave(user);

			setEnteredUser('');
		}
	};

	return (
		<form className='github-user__form' onSubmit={userHandler}>
			<div className='container'>
				<div className='github-user__controls'>
					<div className='github-user__control'>
						<label>Search for a user</label>
						<input
							type='text'
							value={enteredUser}
							onChange={enterUserHandler}
						/>
					</div>
					<div className='github-user__control'>
						<button type='submit'>Search</button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default GithubUserForm;
