var visible = "off";
$("[href]").click(
  function(){
    if (visible==="off"){
      $(".hamburger-menu").fadeIn(2000);
      visible ="on";
    }
  else {
    $(".close").fadeOut(2000);
    visible = "off";
  }
  }
);
