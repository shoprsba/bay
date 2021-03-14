$(document).ready(function(){
  $('.close', $('.block_fixed')).click(function() {
      $('.block_fixed').slideUp('fast');
  });
});




$(document).ready(function(){
  $('#countdown_dashboard').countDown({
    targetOffset: {
      'day':    0,
      'month':  0,
      'year':   0,
      'hour':   0,
      'min':    27,
      'sec':    00
    }
  });
});

$(document).ready(function(){
  $('#countdown_dashboard2').countDown({
    targetOffset: {
      'day': 		0,
      'month': 	0,
      'year': 	0,
      'hour': 	00,
      'min': 		27,
      'sec': 		00
    }
  });
});

    $(document).ready(function(){ 
        
        $('.confident-link').click(function(){$('.hidden-conf').show();if($(window).height() < 760){$('.conf-info').css({'height':  ($(window).height()-120),'overflow-y': 'scroll'});};});
        $('.close-conf').click(function(){$('.hidden-conf').hide();});
  });