window.addEventListener("load", function() {
  var Q = window.Q = Quintus({development: true})
    .include("Sprites, Scenes")
    .setup({
      width: 1080,
      height: 720,
      scaleToFit: true
    });

  Q.scene("level", function(stage) {
    var sprite1 = new Q.Sprite({
      x: 1080/2,
      y: 720/2,
      asset: "background.png"
    });

    stage.insert(sprite1);
  });

  Q.load("background.png, sun.png, zombie1.png", function() {
    Q.stageScene("level");
  })
});