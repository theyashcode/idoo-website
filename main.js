$(function(){

     $("body").addClass("intro-active");

$("#crack-intro").click(function(){
    $(this).addClass("cracked");
    $("body").removeClass("intro-active");
    setTimeout(function(){
        $("#crack-intro").remove();
    }, 900);
});

    $("#portfolio .btn").click( function (){

        $("#portfolio .btn").removeClass("fill");
        $(this).addClass("fill");


        if($(this).text()=="All"){
          $("#portfolio .all").fadeIn();
        }

        else if ($(this).text()=="Website"){
          $("#portfolio .all").fadeOut(0);
          $("#portfolio .website").fadeIn();
        }

      else{
        $("#portfolio .all").fadeOut(0);
        $("#portfolio .brand").fadeIn();
      }


    })


    $(".more").click(function (){
        $(this).children("span").toggleClass('fa-minus-circle')
       $("#portfolio .all:nth-child(7),#portfolio .all:nth-child(8),#portfolio .all:nth-child(9)").slideToggle()
    })

   $(".seemore").click(function (){
    $(this).children("span").toggleClass('fa-minus-circle')
    $("#about .all:nth-child(4),#about .all:nth-child(5),#about .all:nth-child(6)").slideToggle()
   })

   $(".accordion a").click(function(e){
    e.preventDefault();

     if(!$(this).hasClass("active")){
      $(".accordion a").removeClass("active")
      $(this).addClass("active")
      $(".accordion p").slideUp();
      $(this).next("p").slideDown();
    }
   })

   $(".wrap-13 button").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
   })

  $(".signUp").click(function(){
    $("body").append(`<div class="overlay"></div>`)
    $("body").append(`<div class="popover"></div>`)
    $("body").css({"overflow" : "hidden"})


  $(".popover").load("form.html",function (){
    $(".close").click(function(){
     $(".popover").remove();
     $(".overlay").remove();
     $("body").css({"overflow" : "visible"})
    })
     })

    $(".overlay").click(function (){
      $(".popover").remove();
      $(".overlay").remove();
      $("body").css({"overflow" : "visible"})
    })

    $(document).on("keydown", function (e){
      if(e.which==27){
        $(".popover").remove();
        $(".overlay").remove();
        $("body").css({"overflow" : "visible"})
      }
    })
  })


   $(".menu").click(function(){
    $(this).toggleClass("active");
    $(".collapse").slideToggle()
});


if(screen.width<768){
    $("nav a").click(function(){
        $(".collapse").slideUp();
        $(".menu").removeClass("active");
    })
}

$(".banner a , .banner button").click(function (e){
  e.preventDefault();
  $(".banner video").fadeIn();
  $(".banner .flex").fadeOut(0);
  $(".banner").css({"padding" : "20px 0"})
  $(".banner video").attr("src", "techaltum.webm")
  $(".banner video")[0].play();
})

if ($.fn.bxSlider) {
  $(".reviews").bxSlider(
    {
      controls: false,
      auto : true ,
      autoHover: true,
    }
  )
}

})
