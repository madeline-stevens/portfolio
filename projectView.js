'use strict';

//click handlers....selector string? clicking between home and about
projectView.handleMainNav = function(){
  $('.tab').on('click', function(){
    $('.tab-content').hide();
    $('#' + $(this).attr('data-content')).show();
    console.log('click?')
  });

}

$(function() {
 $('.fa-bars').on('click',function(e) {
   e.preventDefault();
   $('.list').slideToggle();
 });

 $('#home').css('display', 'block');
});

// $('.main-nav .tab:first').click();//this triggers a click on the first .tab element to set up the the page.

// DONE: Call all of the above functions, once we are sure the DOM is ready.
// $(document).ready(function() {
//
// })

projectView.handleMainNav();
