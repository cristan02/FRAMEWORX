function changeimage(direction){    

  var currentImg = $('.active');
  var nextImg = currentImg.next();
  var prevImg = currentImg.prev();

  if ( direction == 'next'){
    if(nextImg.length){
      nextImg.addClass('active');
    }
    else{
       $('.slider img').first().addClass('active');
    }
    currentImg.removeClass('active');
  }
  else{
    if(prevImg.length){
      prevImg.addClass('active');
    }
    else{
      $('.slider img').last().addClass('active');
    }
    currentImg.removeClass('active');
  }
}

var stopslideshow = false;

function slideshow(caller){

  var status = $(caller).attr('value');

  if(status.indexOf('Start') > -1){
    stopslideshow = false;
    $(caller).attr('value' , 'Stop');
    $(caller).text("Stop Slideshow");
  }
  else{
    stopslideshow = true;
    $(caller).attr('value' , 'Start');
    $(caller).text("Start Slideshow");
  }

  if(!stopslideshow){
    var interval = setInterval( function() {
      if(!stopslideshow)
        changeimage('next');  
    },2000 );
  }
  else{
    clearInterval(interval);
  }
}