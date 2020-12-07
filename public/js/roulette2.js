

const rotateWheel = function( event ) {
    
  // Generate a number between 1 and 6
  let prize = (Math.floor(Math.random() * 6)) + 1;
  // Spin to the angle of the segment based on the random number
  let segmentAngle = ((prize - 1) * -60);
  // Add on 3 full spins
  let randomSpins = 5
  let segmentAngle = segmentAngle + 360 * randomSpins;
  
  const wheel = document.getElementById("saw-wheel-bg");
  
  // The animation class is only needed for the reset button, it makes the transition smooth instead of instant
  $('.backdrop').addClass("animate");
  
  // Add a transition directly to the wheel
  wheel.style.webkitTransform = 'rotate('+segmentAngle+'deg)'; 
  wheel.style.mozTransform    = 'rotate('+segmentAngle+'deg)'; 
  wheel.style.msTransform     = 'rotate('+segmentAngle+'deg)'; 
  wheel.style.oTransform      = 'rotate('+segmentAngle+'deg)'; 
  wheel.style.transform       = 'rotate('+segmentAngle+'deg)'; 
  
  // Display the result
  document.getElementById("result").innerHTML = "Congrats you got " + prize;
}

const reset = function( event ) {  
    // Removing the animation class means we don't follow the animation duration
  $('.backdrop').removeClass("animate");
  
  // Set the wheel's CSS back to the starting position
  $(".backdrop").css({
    '-moz-transform':'rotate(0)',
    '-webkit-transform':'rotate(0)',
    '-o-transform':'rotate(0)',
    '-ms-transform':'rotate(0)',
    'transform':'rotate(0)'
  }, 10000); 
}