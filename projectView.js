'use strict';

//view object, to hold all our functions for dynamic updates and project-related event handlers
var projectView = {};
//

//click handlers....selector string?
projectView.handleMainNav = function() {
  $('.tab').on('click', function(){
    $('.tab-content').hide();
    $('#' + $(this).attr('data-content')).show();
  })
}

// $('.main-nav .tab:first').click();//this triggers a click on the first .tab element to set up the the page.

// DONE: Call all of the above functions, once we are sure the DOM is ready.
// $(document).ready(function() {
//
// })

projectView.handleMainNav();
