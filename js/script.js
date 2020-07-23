//script.js
//jQuery
$(function() {
    /*-------------------
        Race Program
    -------------------*/
    //click GO button
    $('#go').click(function() {
      //see if car has won racecar
      function checkIfComplete(){
          if( isComplete == false){
            isComplete = true;
          } else{
            place = 'second';
          }
      }
      //get width of cars
      var carWidth = $('#car1').width();
      //get width of racetrack
      var raceTrackWidth = $(window).width() - carWidth;//so racecar stays on screen
      //generate random number between 1 and 4000 milliseconds
      var raceTime1 = Math.floor( (Math.random()* 4000)+ 1 );//gen ran num between 1-4000
      var raceTime2 = Math.floor( (Math.random()* 4000)+ 1 );
      //set flag var. to F by default
      var isComplete = false;
      //set flag var. to First by default
      var place = 'first';

      //animate car 1
      $('#car1').animate({
        //move car width of race track
        left: raceTrackWidth
      }, raceTime1, function(){
          //run callback when animation completes
          checkIfComplete();
          //give feedback on race stats
          $('#raceInfo1 span').text('Finished in ' + place + ' place and clockd in at ' + raceTime1 + ' milliseconds.')
      });

      //animate car 2
      $('#car2').animate({
        //move car width of race track
        left: raceTrackWidth
      }, raceTime2, function(){
          //run callback when animation completes
          checkIfComplete();
          //give feedback on race stats
          $('#raceInfo2 span').text('Finished in ' + place + ' place and clockd in at ' + raceTime2 + ' milliseconds.')
      });
    });

    //reset game
    $('#reset').click(function(){
      $('.car').css('left','0');
      $('.raceInfo span').text('');
    });



});
