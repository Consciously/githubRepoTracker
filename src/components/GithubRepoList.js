import GithubRepoItem from './GithubRepoItem';
import './GithubRepoList.css';

const GithubRepoList = ({ githubRepos }) => {
	return (
		<div className='github-user__result'>
			<div className='container'>
				{githubRepos.length > 0 && (
					<>
						<h3>
							{githubRepos.length}{' '}
							{githubRepos.length === 1 ? 'repository' : 'repositories'} found
						</h3>
						<h2>
							<a
								href={githubRepos[0].owner.html_url}
								target='_blank'
								rel='noreferrer'
							>
								Profile of {githubRepos[0].owner.login}
							</a>
						</h2>
					</>
				)}
				<ul>
					{githubRepos.map(githubRepo => (
						<GithubRepoItem
							key={githubRepo.id}
							repoUrl={githubRepo.clone_url}
							owner={githubRepo.owner.login}
							name={githubRepo.name}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};

export default GithubRepoList;
