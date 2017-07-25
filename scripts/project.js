'use strict';

//view object, to hold all our functions for dynamic updates and project-related event handlers
// var projectView = [];

function Project (rawDataObj) { //mimicking lab, which used Article
  this.author = rawDataObj.author;
  this.authorUrl = rawDataObj.authorUrl;
  this.title = rawDataObj.title;
  this.category = rawDataObj.category;
  this.body = rawDataObj.body;
  this.publishedOn = rawDataObj.publishedOn;
}


Project.prototype.toHtml = function(){
  let template = Handlebars.compile($('#article-template').text());
.......



Project.loadAll = function (rawData) {
  rawData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Data(a.publishedOn));
  });
  rawData.forEach(function(ele){
    Project.all.push(new Article(ele));
  })
}

const successCallBack = function(data){
  console.log(data)
  localStorage.setItem('rawData', JSON.stringify(data))//JSON.stringify is what looks at each object's key/value pair and puts quotes around them

  Project.loadAll(data)
  articleView.initIndexPage();//this need to go here in portfolio instead of within the else statement
}

const errorCallBack = function(err){
  console.log(err)
}

Project.fetchAll = function () {
  if (localStorage.rawData){
    Project.loadAll(JSON.parse(localStorage.rawData));//JSON.parse is what looks for the key/value pairs? 
    projectView.initIndexPage();
  } else {
    $.getJSON('rawData')
      .then(successCallBack, errorCallBack)
  }
}
