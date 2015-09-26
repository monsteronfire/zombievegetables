Quintus.ZombiesPlants = function(Q) {
  Q.Sprite.extend("Sun", {
    init: function(p) {
      this._super(p, {
        asset: "sun.png",
        type: Q.SPRITE_SUN,
        x: 300 + Math.random()*(1080 - 360),
        y: -120,
        vy: 80,
        finalY: 60 + Math.random()*(720 - 60),
        expirationTime: 3
      });
      this.add('2d');
      this.on("touch");
    },

    step: function(dt) {
      if(this.p.y >= this.p.finalY) {
        this.p.vy = 0;
        this.p.expirationTime -= dt;

        if(this.p.expirationTime <= 0) {
          this.destroy();
        }
      }
    },

    touch: function(touch) {
      console.log(touch);
      console.log("Sun Grarbt");
      Q.state.inc("sun", 100);
      this.destroy();
    }
  });
};