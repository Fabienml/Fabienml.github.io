$(function() {
  $('.questions .yes, .questions .no').click(function() {
    $(this).parent().hide().next('section').addClass('show');
  })
});

function checkAnswers(checkStep) {
  switch (checkStep) {
    case 0:
      $('#status1').hide();
      $('#status2, #checklist').fadeIn(500);
      break;
    case 1:
      $('#status2,#check1').hide();
      $('#status3, #check2, #check3').fadeIn(500);
      break;
    case 2:
      $('#status3').hide();
      $('#status4, #check4').fadeIn(500);
      break;
  }
}