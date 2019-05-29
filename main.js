function main(){
  var colorClass='';
  var blinking=false;
  var interval;
  $('.select-color').on('click',function(){
    var selectedColor=$(this).attr('class');
    switch (selectedColor) {
  case 'select-color cyan not-selected':
    // Set color on box div
        colorClass='cyan';
    break;
  case 'select-color yellow not-selected':
    // Set color on box div
        colorClass='yellow';
    break;
  case 'select-color magenta not-selected':
    // Set color on box div
        colorClass='magenta';
    break;
}
    $(this).removeClass('not-selected');
    $(this).siblings().addClass('not-selected');
  });
  $('.box').on('click',function(){
  $(this).toggleClass(colorClass);
});
  
$('.toggle-blink').on('click',function(){
  if (blinking){
    blinking=false;
    clearInterval(interval);
  }
  else {
    blinking=true;
     if (colorClass){
    $('.toggle-blink').toggleClass('opacity');
  interval=setInterval(function() {
  // do something here repeatedly
    $('.box.cyan,.box.yellow,.box.magenta').toggleClass('blink');
}, 350);
  }
 
  }
});  
  
}




$(document).ready(main);