
$(function() {
  $('.tab-content').hide()
  $('.tab-content#delegation').show()
})

$('.nav-items > a').on('click', function(){
  $('.tab-content').hide()
  $('#'+ $(this).data('tab'))
})

$('button').on('click', function(event) {//.on registers an event, similar to event listeners. listen for 'click' then the function acts an an event handler. default behaviour of a button is to refresh the page, so thats why we use the preventdefault
  event.preventDefault()
  $('#'+ $(this).data('menu')).append('<li>boommmm<li>')//is essentially $(''#menu1'). This is allowing us to add boommmm to the list
})

$('.menus').on('click', 'li', function(){
  console.log(this);
})

articleView.populateFilters = function (){ //a function is being assigned to the populate property of the global object articleView
