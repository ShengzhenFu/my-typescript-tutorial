"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
var lodash_1 = require("lodash");
var svc = new GithubApiService_1.GithubApiService();
if (process.argv.length < 3) {
    console.log('Please enter github account in parameter');
}
else {
    svc.getUserInfo(process.argv[2], function (user) {
        svc.getRepoInfo(process.argv[2], function (repos) {
            var sortedRepos = lodash_1.sortBy(repos, [function (repo) { return repo.size * -1; }]);
            user.repos = sortedRepos;
            console.log(user);
        });
    });
}
