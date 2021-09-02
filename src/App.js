import React, { useState, useEffect } from 'react';
import { Ellipsis } from 'react-css-spinners';
import GithubRepoList from './components/GithubRepoList';
import GithubUserForm from './components/GithubUserForm';

const App = () => {
	const [savedUser, setSavedUser] = useState({});
	const [receivedRepo, setReceivedRepo] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const { enteredUser } = savedUser;

		(async () => {
			const options = {
				method: 'GET',
				headers: {
					'Content-Type': 'application-json',
					Authorization: process.env.REACT_APP_GITHUB_USER_TOKEN
				}
			};

			try {
				const response = await fetch(
					`https://api.github.com/users/${enteredUser}/repos`,
					options
				);
				if (!response.ok) {
					throw new Error(
						`Could not fetch any data for '${savedUser.enteredUser}' ... please try again!`
					);
				}
				const data = await response.json();
				setError(null);
				setIsLoading(false);
				setReceivedRepo(data);
			} catch (err) {
				setError(err.message);
			}
		})();
	}, [savedUser]);

	const saveUserHandler = user => {
		if (!user) {
			return;
		} else {
			setSavedUser(user);
		}
	};
	return (
		<>
			<header className='github-user__header'>
				<div className='container'>
					<h1>
						<a href='/'>Repo Tracker</a>
					</h1>
				</div>
			</header>
			<main className='github-user__content'>
				<GithubUserForm onUserSave={saveUserHandler} />
				{error ? (
					<div className='github-user__error'>
						<div className='container'>
							<p>{error}</p>
						</div>
					</div>
				) : isLoading ? (
					<Ellipsis color='#ac353d' size={50} />
				) : (
					<GithubRepoList githubRepos={receivedRepo} />
				)}
			</main>
		</>
	);
};

export default App;
