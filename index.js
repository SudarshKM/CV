
var i=0;
$(".btn-theme").click(function ( ) {
  i++;
  if(i%2===1) {
    $("body").css("background-color" , "#222831");
      $("body").css("color", "#fff");
      $(".btn-dark-mode").removeClass("btn-outline-dark btn-light");
      $(".btn-dark-mode").addClass("btn-outline-light btn-dark");
      $("img.dark-mode-icon").attr("src" , "https://img.apksum.com/89/systems.maju.darkmode/1.41/icon.png");
      $(".card").addClass("bg-dark");
      $(".middle-container").css("background-color", "#30475e");
      $(".footer").css("background-color", "#30475e");
      $("nav").attr("style" , "background-color:#30475e;")


  }
  else {
    $("body").css("background-color" , "#f1f6f9");
          $("body").css("color", "black");
            $(".btn-dark-mode").removeClass("btn-outline-light btn-dark");
          $(".btn-dark-mode").addClass("btn-outline-dark btn-light");
          $("img.dark-mode-icon").attr("src", "https://andrewchallis.co.uk/img/night-mode.png");
          $(".card").removeClass("bg-dark");
          $(".middle-container").css("background-color", "#394867");
          $(".footer").css("background-color", "#394867");
          $("nav").attr("style" , "background-color:#394867;")

  }
})
