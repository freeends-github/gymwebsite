$(document).ready(function(){
    $(".toggler").on("click", function() {
      if($("header ul").css("display") == "none") {
        $("header ul").css("display", "block");
      }
      else{
        $("header ul").css("display", "none");
      }
    });
});