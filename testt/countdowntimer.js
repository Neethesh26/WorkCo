$step = 1;
$loops = Math.round(100 / $step);
$increment = 360 / $loops;
$half = Math.round($loops / 2);
$barColor = '#ff729b';
$backColor = '#ffedf3';

$(function(){
  clock.init();
});
clock={
  interval:null,
  init:function(){
    $('.input-btn').click(function(){
      switch($(this).data('action')){
        case'start':
          clock.stop();
          clock.start($('.input-num').val());
        break;
        case'stop':
          clock.stop();
        break;
      }
    });
  },
start:function(t){
  var pie = 0;
  var num = 0;
  var min = t?t:1;
  var sec = min*60;
  var totalSec = sec;
  var lop = sec;
  $('.count').text(min);
  if(min>0){
    $('.count').addClass('min')
  }else{
    $('.count').addClass('sec')
  }
  clock.interval = setInterval(function(){
    sec = sec-1;
    pie = (totalSec - sec) * 100 / totalSec;
    var minutes = Math.floor(sec / 60);
    var seconds = sec % 60;
    if(minutes==0){
      $('.count').removeClass('min').addClass('sec').text(seconds);
    }else{
      $('.count').removeClass('sec').addClass('min').text(minutes + ":" + (seconds < 10 ? "0" : "") + seconds);
    }
    $i = pie / 100;
    if($i < 0.5){
      $nextdeg = (90 + ( 360 * $i ))+'deg';
      $('.clock').css({'background-image':'linear-gradient(90deg,'+$backColor+' 50%,transparent 50%,transparent),linear-gradient('+$nextdeg+','+$barColor+' 50%,'+$backColor+' 50%,'+$backColor+')'});
    }else{
      $nextdeg = (270 + ( 360 * ( $i - 0.5 ) ))+'deg'; // Change this line
      $('.clock').css({'background-image':'linear-gradient('+$nextdeg+','+$barColor+' 50%,transparent 50%,transparent),linear-gradient(270deg,'+$barColor+' 50%,'+$backColor+' 50%,'+$backColor+')'});
    }
    if(sec==0){
      clearInterval(clock.interval);
      $('.count').text(0);
      $('.clock').removeAttr('style');
    }
  },1000);
},
  stop:function(){
    clearInterval(clock.interval);
    $('.count').text(0);
    $('.clock').removeAttr('style');
  }
}

// Cap timing at 180 minutes only

$(document).ready(function() {
  $('.input-num').on('input', function() {
    if (this.value > 180) {
      this.value = 180;
    }
  });
});