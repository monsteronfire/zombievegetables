window.addEventListener("load", function() {
  var Q = window.Q = Quintus({development: true})
    .include("Sprites, Scenes, 2D")
    .setup({
      width: 1080,
      height: 720,
      scaleToFit: true
    });

  Q.gravityY = 0;
  Q.gravityX = 0;

  Q.SPRITE_SUN = 2;
  Q.SPRITE_ZOMBIE = 4;
  Q.SPRITE_PLANT = 8;
  Q.SPRITE_BULLET = 16;
  Q.SPRITE_GROUND = 32;

  Q.Sprite.extend("Zombie", {
    init: function(p) {
      this._super(p, {
        asset: "zombie1.png",
        type: Q.SPRITE_ZOMBIE,
        collisionMask: Q.SPRITE_PLANT || Q.SPRITE_BULLET,
        vx: -40
      });
      this.add("2d");
    },

    step: function(dt) {
      if(this.p.x <= 240) {
        this.destroy();
        console.log("The ZUMBEEZ 8 URR BRAINZ!");
        Q.stageScene("level");
      }
    }
  });

  Q.scene("level", function(stage) {
    var sprite1 = new Q.Sprite({
      x: 1080/2,
      y: 720/2,
      asset: "background.png",
      type: Q.SPRITE_GROUND
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