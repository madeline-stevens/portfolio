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
//   // TODO: Use handlebars to render your articles.
//   //       - Get your template from the DOM.
//   //       - Now "compile" your template with Handlebars.
//
//   var newArt = {
//     title: this.title,
//     author: this.author,
//     body: this.body,
//     publishedOn: this.publishedOn,
//     category: this.category,
//   }
//
//   this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
//     this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';
//
//     // TODO: Use the function that Handlebars gave you to return your filled-in html template for THIS article.
//     var articleData = $('#articleData').html();
//     var compile = Handlebars.compile(articleData);
//     var newArticle = compile(newArt);
//     $('#articles').append(newArticle)
//   };
//
//   rawData.sort(function(a,b) {
//     return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
//   });
//
//   rawData.forEach(function(articleObject) {
//     articles.push(new Article(articleObject));
//   });
//
//   articles.forEach(function(article){
//     $('#articles').append(article.toHtml());
//   });

// var busmall = new project('busmall', 'images/Screen Shot 2017-07-10 at 11.07.03 PM.png');
