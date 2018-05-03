'use strict';

var app = app || {};

(function(module){
  const aboutController = {};

  aboutController.index = () => {
    $('#about').show().sibling().hide();
    app.repos.requestRepos(app.projectView.index);
  };
  module.aboutController = aboutController;
}) (app);
