'use strict';
var app = app || {};

(function(module) {
  const repos = {};
  repos.all = [];

//requestRepos is making an API request to gather a users github repo
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
