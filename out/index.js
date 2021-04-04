"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
var svc = new GithubApiService_1.GithubApiService();
svc.getUserInfo("ShengzhenFu", function (user) {
    console.log(user);
    console.log("name: ", user.login);
});
svc.getRepoInfo("ShengzhenFu", function (repos) {
    console.log(repos);
});
