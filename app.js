'use strict';

//global variables
Projects.all=[];

var container = document.getElementByClassName('clickableScreenshot');

//constructor function for projects
function Project (name, filepath, link){
  this.name=name;
  this.filepath=filepath;
  this.link=link;
  Project.all.push(this);
};

//instances
// var busmall = new project('busmall', 'images/Screen Shot 2017-07-10 at 11.07.03 PM.png');
