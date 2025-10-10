
$(function(){

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
    
     if(!$(this).hasClass(".active")){
      $(".accordion a").removeClass(".active")
      $(this).addClass(".active")
      $(".accordion p").slideUp();
      $(this).next("p").slideDown();
    }
   })

   $(".wrap-13 button").click(function () {
    $(window).scrollTop(0)
   })

  $(".signUp").click(function(){
    $("body").append(`<div class = "overlay"></div>`)
    $("body").append(`<div class = "popover"></div>`)
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

    $(window).on("keydown", function (){
      if(e.which==27){
        $("popover").remove();
        $("overlay").remove();
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
        $(".collapse ").slideUp();
    })
}

$(".banner a , .banner button").click(function (e){
  e.preventDefault();
  $(".banner video").fadeIn();
  $(".banner .flex").fadeOut(0);
  $(".banner").css({"padding" : " 20px 0"})
  $(".banner video").attr("src", "techaltum.webm")
  $(".banner video").trigger("play");
})

$(".reviews").bxSlider(
  {
    controls: false,
    auto : true ,
    autoHover: true,

  }
)



})


