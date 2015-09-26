Quintus.ZombiesEnemies = function(Q) {
  Q.zombieTypes = {
    basic: {
      asset: "zombie1.png",
      vx: -8
    },
    skeleton: {
      asset: "zombie2.png",
      vx:-10
    },
    chicken: {
      asset: "chicken.png",
      vx: -20
    },
    hatzombie: {
      asset: "zombie3.png"
    }
  };

  Q.Sprite.extend("Zombie", {
    init: function(p) {
      this._super(p, {
        type: Q.SPRITE_ZOMBIE,
        collisionMask: Q.SPRITE_PLANT | Q.SPRITE_BULLET
      });
      this.add("2d");

      this.p.originalVx = this.p.vx;

      this.on("bump.left", function(collision) {
        if(collision.obj.isA("Plant")) {
          collision.obj.takeDamage(this.p.damage);
        }
        this.p.vx = this.p.originalVx;
      });
    },

    step: function(dt) {
      if(this.p.x <= 240) {
        this.destroy();
        console.log("The ZUMBEEZ 8 URR BRAINZ!");
        Q.stageScene("level");
      }
    }
  });
};