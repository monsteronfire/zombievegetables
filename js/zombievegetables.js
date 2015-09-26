window.addEventListener("load", function() {
  var Q = window.Q = Quintus({development: true})
    .include("Sprites, Scenes, 2D")
    .setup({
      width: 1080,
      height: 720,
      scaleToFit: true
    });

  Q.Sprite.extend("Zombie", {
    init: function(p) {
      this._super(p, {
        asset: "zombie1.png"
      })
    }
  });

  Q.scene("level", function(stage) {
    var sprite1 = new Q.Sprite({
      x: 1080/2,
      y: 720/2,
      asset: "background.png"
    });

    var sprite2 = new Q.Zombie({
      x: 500,
      y: 600,
    });

    var sprite3 = new Q.Zombie({
      x: 700,
      y: 100,
    });

    var sprite4 = new Q.Zombie({
      x: 700,
      y: 600,
    });

    stage.insert(sprite1);
    stage.insert(sprite2);
    stage.insert(sprite3);
    stage.insert(sprite4);
  });

  Q.load("background.png, sun.png, zombie1.png", function() {
    Q.stageScene("level");
  })
});