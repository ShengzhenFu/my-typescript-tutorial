import * as request from 'request';
import { Repo } from './Repo';
import { User } from './User';

const options = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
}
export class GithubApiService {
    
    getUserInfo(userName:string, cb: (user: User)=>any) {
        request.get("https://api.github.com/users/"+userName, options, (error:any, response:any, body:any) =>{
            let user = new User(body);
            cb(user);
        })
    }

    getRepoInfo(userName:string, cb: (repos: Repo[])=>any) {
        request.get("https://api.github.com/users/"+userName+"/repos", options, (error:any, response:any, body:any) =>{
            let repos: Repo[] = body.map((repo: any) => new Repo(repo));
            cb(repos);
        })
    }
}