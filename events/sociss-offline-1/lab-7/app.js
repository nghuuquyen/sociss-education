$(document).ready(function(){
  // Fadeing out displayed paragraphs.
  $(".out-btn").click(function(){
    $(".fade-animate p").fadeOut();
  });

  // Fading in hidden paragraphs.
  $(".in-btn").click(function(){
    $(".fade-animate p").fadeIn();
  });

  // Slide up displayed paragraphs.
  $(".up-btn").click(function(){
    $(".slide-animate > p").slideUp();
  });

  // Slide down hidden paragraphs.
  $(".down-btn").click(function(){
    $(".slide-animate p").slideDown();
  });

  // Multiple animations.
  $("button#animate").click(function(){
    $(".box")
    .animate({ width: "600px" })
    .animate({ height: "300px" })
    .animate({ marginLeft: "150px" })
    .animate({ borderWidth: "10px" })
    .animate({ fontSize: "46px" })
    .animate({ opacity: 0.8 });
  });

  // Hard select elements.
  $("ul li").has("ul").addClass("highlight");

  // Add event handling to element.
  $("p").mouseenter(function(){
    $(this).addClass("highlight");
  });

  $("p").mouseleave(function(){
    $(this).removeClass("highlight");
  });
});
