'use strict';

var app = app || {};

(function(module) {
  const projectView = {};

  const ui = function () {
    let $about = $('#about');

    $about.find('ul').empty();
    $about.show().sibling().hide();
  };
  const render = Handlebars.compile($('#repo-template').text());

  projectView.index = function() {
    ui();
    $('#about ul').append(
      app.repos.with('name').map(render)
    );
  };

  module.projectView = projectView;
})(app);
