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
  

  // Register animation

  $(".email").on("change keyup paste", function () {
    if ($(this).val()) {
      $(".icon-paper-plane").addClass("next");
    } else {
      $(".icon-paper-plane").removeClass("next");
    }
  });
  
  $(".next-button").hover(function () {
    $(this).css("cursor", "pointer");
  });
  
  $(".next-button.email").click(function () {
    console.log("Something");
    $(".email-section").addClass("fold-up");
    $(".password-section").removeClass("folded");
  });
  
  $(".password").on("change keyup paste", function () {
    if ($(this).val()) {
      $(".icon-lock").addClass("next");
    } else {
      $(".icon-lock").removeClass("next");
    }
  });
  
  $(".next-button").hover(function () {
    $(this).css("cursor", "pointer");
  });
  
  $(".next-button.password").click(function () {
    console.log("Something");
    $(".password-section").addClass("fold-up");
    $(".repeat-password-section").removeClass("folded");
  });
  
  
  $(".next-button.password").click(function () {
    console.log("Something");
    $(".password-section").addClass("fold-up");
    $(".success").css("marginTop", 0);
    // setTimeout(function(){
    //   $(window).attr('location','/login');
    // }, 2000);
  });
  
