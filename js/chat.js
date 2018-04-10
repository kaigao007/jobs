// On loading for the first time
$(document).ready(function() {
  calibrate();
});
// On every page size change
$(window).resize(function() {
  calibrate();
});
// Change layouts based on page & screen sizes
function calibrate() {
  // Change the chat window height
  $('.wc-message-groups').height($('.wc-chatview-panel').height() - 150);
  // Change the Upload and Send button margin
  $('label.wc-upload').css('margin-left',(($('.wc-chatview-panel').width() - $('input.wc-shellinput').width())/2 - 58) + 'px');
  $('button.wc-send').css('margin-right',(($('.wc-chatview-panel').width() - $('input.wc-shellinput').width())/2 - 58) + 'px');
}
