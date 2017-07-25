'use strict';

var projectView = {};

//click handlers....selector string? clicking between home and about
projectView.handleMainNav = function(){
  $('.tab').on('click', function(){
    $('.tab-content').hide();//hide ?
    $(`#${$(this).data('content')}`).fadeIn();
  }); //this is showing about
    console.log('click?')
  });
}

//collapses the hambuger button
$(function() {
 $('.fa-bars').on('click', function(e){
   e.preventDefault();
   $('.list').slideToggle();
 });
 $('#home').css('display', 'block');
});

//where the setTeasers function would go

//mimicking the lab
articleView.initNewProjectPage = function(){
  $('.tab-content').show();
  $('#export-field').hide();
  $('#article-json').on('focus', function(){
    this.select();
  });
  $('#new-form').on('change', 'input, textarea', articleView.create)
}

// projectView.create = function() {
//   let article;
//   $('#projects').empty();
//   new blog entry stuff, commented out to test other things
//     project = new Project({
//       titleOfProject: $('#project-titleOfProject').val(),
//       dateOfProject: $('#project-dateOfProject').val(),
//       description: $('#project-description').val(),
//       // category: $('#project-title').val(),
//       // body: $('#project-title').val(),
//       // publishedOn: $('#project-title').val(),
//     });
//     $('#projects').append(project.toHtml());
//     $('pre code').each(function(i, block){
//       hljs.highlightBlock(block);
//     };
//     $('#export-field').show();
//     $('#project-json').val('$.........')
//   }


//creating new project
projectView.initIndexPage = function(){
  Project.all.forEach(function(article){
    $('#projects').append(article.toHtml())
  });

}

projectView.handleMainNav();
