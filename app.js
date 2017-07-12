'use strict';

//global variables
// Projects.all=[];
// var container = document.getElementByClassName('clickableScreenshot');
var projects = [];

//constructor function for projects
function Project (rawDataObj){
  this.title = rawDataObj.title;
  this.date = rawDataObj.date;
  this.filepath = rawDataObj.filepath;//photo maybe?
  this.link= rawDataObj.link;
  // Project.all.push(this);
};

Projects.prototype.toHtml = function(){
  var $newProject = $('project.template').clone();

  $newProject.removeClass('template');

  $newProject.find('h1').html(this.title);
  $newProject.find('date').html(this.date);
  $newProject.find('a').html(this.filepath);
  $newProject.find('a').html(this.link);

  //Display time
  $newProject.find('time').html('about ' + parseInt((new Date()-new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  $newProject.append('<hr>');
  return $newProject;
};

rawData.sort(function(a,b){
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});

projects.forEach(function(project){
  $('#projects').append(project.toHtml());
});



//instances
// var busmall = new project('busmall', 'images/Screen Shot 2017-07-10 at 11.07.03 PM.png');
