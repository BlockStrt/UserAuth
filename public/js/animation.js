//GSAP Cursor
document.body.addEventListener("mousemove", evt => {
    const mouseX = evt.clientX;
    const mouseY = evt.clientY;
  
    gsap.set(".cursor", {
      x: mouseX,
      y: mouseY });
  
  
    gsap.to(".shape", {
      x: mouseX,
      y: mouseY,
      stagger: -0.1 });
  
  });
  
  //After 6 seconds update H2 of what appears to be a laoding screen
  let loadingTitle = document.getElementById('loading-title');

  setTimeout(function(){
    loadingTitle.innerText = "Click here to proceed to login";
  }, 8000);


  // Panda Eye move

  $(document).on( "mousemove", function( event ) {
    var dw = $(document).width() / 15;
    var dh = $(document).height() / 15;
    var x = event.pageX/ dw;
    var y = event.pageY/ dh;
    $('.eye-ball').css({
      width : x,
      height : y
    });
  });

  $('.btn').click(function(){
    $('form').addClass('wrong-entry');
      setTimeout(function(){ 
         $('form').removeClass('wrong-entry');
       },3000 );
  });

  $('#password').focusin(function(){
    $('form').addClass('up')
  });
  $('#password').focusout(function(){
    $('form').removeClass('up')
  });
  
