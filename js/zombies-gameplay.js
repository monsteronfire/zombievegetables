Quintus.ZombiesGameplay = function(Q) {
  Q.Sprite.extend("Level", {
    init: function(p) {
      this._super(p, {
        asset: "background.png",
        type: Q.SPRITE_GROUND,
        x: 120 + 960/2,
        y: 720/2,
        w: 960,
        h: 720,
        sunFrequency: {min: 1, max: 5}
      });

      this.timeNextSun = this.getTimeNextSun();

      this.on("touch");
    },

    touch: function(touch) {
      console.log("You Touched teh Groundz");
    },

    step: function(dt) {
      this.p.timeNextSun -= dt;

      if(this.p.timeNextSun <= 0) {
        this.p.timeNextSun = this.getTimeNextSun();
        Q.stage(1).insert(new Q.Sun());
      }
    },

    getTimeNextSun: function() {
      return this.p.sunFrequency.min + Math.random()*(this.p.sunFrequency.max - this.p.sunFrequency.min);
    }
  });
};