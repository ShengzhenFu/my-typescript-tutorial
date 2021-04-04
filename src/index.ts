import { GithubApiService } from './GithubApiService';
import { Repo } from './Repo';
import { User } from './User';
import { sortBy } from 'lodash';

let svc:GithubApiService = new GithubApiService();
// check if input of argument exists
if (process.argv.length < 3) {
    console.log('Please enter github account in argement');
} else {    // take input from npm start as argument : process.argv[2]
    svc.getUserInfo(process.argv[2], (user: User)=>{   
        svc.getRepoInfo(process.argv[2], (repos: Repo[])=>{
            let sortedRepos = sortBy(repos, [(repo:Repo) => repo.size * -1])
            user.repos = sortedRepos;
            console.log(user);
    });
});
}

