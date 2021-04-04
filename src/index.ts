import { GithubApiService } from './GithubApiService';
import { Repo } from './Repo';
import { User } from './User';

let svc:GithubApiService = new GithubApiService();
svc.getUserInfo("ShengzhenFu", (user: User)=>{
    console.log(user);
    console.log("name: ", user.login)
});
svc.getRepoInfo("ShengzhenFu", (repos: Repo[])=>{
    console.log(repos);
});