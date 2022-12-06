// SLIDE
var splide = new Splide(".splide");
var bar = splide.root.querySelector(".my-carousel-progress-bar");

// Updates the bar width whenever the carousel moves:
splide.on("mounted move", function () {
  var end = splide.Components.Controller.getEnd() + 1;
  var rate = Math.min((splide.index + 1) / end, 1);
  bar.style.width = String(100 * rate) + "%";
});

splide.mount();

// QRCODE
var qrcode = new QRCode(document.getElementById("qrcode"), {
  text: "https://www.facebook.com/profile.php?id=100040822552329",
  width: 200,
  height: 200,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H,
});
