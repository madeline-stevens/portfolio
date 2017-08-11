'use strict';

var projectView = {};

function hideAll() {
  $('#projects').siblings().hide()
}

//click handlers....selector string? clicking between home and about
projectView.handleMainNav = function(){
  $('.tab').on('click', function(){
    $('.tab-content').hide();
    $('#' + $(this).attr('data-content')).show(); //this is showing about
    console.log('click?')
  });
}

 //
 $('.main-nav').on('click','li', function(e){
   e.preventDefault();
   $('.main-nav').slideToggle();

 });
 $('#home').css('display', 'block');


//where the setTeasers function would go

//
articleView.initNewProjectPage = function(){
  $('.tab-content').show();
  $('#export-field').hide();
  $('#article-json').on('focus', function(){
    this.select();
  });
  $('#new-form').on('change', 'input, textarea', articleView.create)
}

projectView. create = function() {
  let article;
  $('projects').empty();

//new blog entry stuff
//   project = new Project({
//     titleOfProject: $('#project-titleOfProject').val(),
//     dateOfProject: $('#project-dateOfProject').val(),
//     description: $('#project-description').val(),
//     // category: $('#project-title').val(),
//     // body: $('#project-title').val(),
//     // publishedOn: $('#project-title').val(),
//   });
//   $('#projects').append(project.toHtml());
//   $('pre code').each(function(i, block){
//     hljs.highlightBlock(block);
//   };
//   $('#export-field').show();
//   $('#project-json').val('$.........')
// }

projectView.initIndexPage = function(){
  Project.all.forEach(function(article){
    $('#projects').append(article.toHtml())
  }
}


projectView.handleMainNav();
