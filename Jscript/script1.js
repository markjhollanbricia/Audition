var container = document.getElementById("container");
var images = document.getElementsByClassName("floating");

container.addEventListener("mousemove", function(event) {
  var mouseX = event.clientX;
  var mouseY = event.clientY;

  for (var i = 0; i < images.length; i++) {
    var x, y;

    // Set different starting positions for each image
    switch (i) {
      case 0:
        x = 30;
        y = 20;
        break;
      case 1:
        x = 60;
        y = 40;
        break;
      case 2:
        x = 90;
        y = 60;
        break;
    }

    var xPos = x - mouseX;
    var yPos = y - mouseY;

    gsap.to(images[i], { x: xPos / 10, y: yPos / 10, duration: 2, ease: "power2.out" });
  }
});
