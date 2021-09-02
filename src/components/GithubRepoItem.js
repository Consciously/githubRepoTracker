import './GithubRepoItem.css';

const GithubRepoItem = props => {
	return (
		<li>
			<a href={props.repoUrl} target='_blank' rel='noreferrer'>
				{props.name}
			</a>
		</li>
	);
};

export default GithubRepoItem;
