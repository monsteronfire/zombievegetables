Quintus.ZombiesEnemies = function(Q) {
  Q.zombieTypes = {
    basic: {
      asset: "zombie1.png",
      damage: 1,
      vx: -8,
      energy: 10
    },
    skeleton: {
      asset: "zombie2.png",
      vx:-10,
      damage: 1,
      vx: -10,
      energy: 10
    },
    chicken: {
      asset: "chicken.png",
      damage: 0.5,
      vx: -20,
      energy: 3,
    },
    hatzombie: {
      asset: "zombie3.png",
      damage: 1.5,
      vx: -9,
      energy: 35
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
        } else if(collision.obj.isA("Bullet")) {
            this.p.energy -= collision.obj.p.damage;
            collision.obj.destroy();
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

      if(this.p.energy <= 0) {
        this.destroy();
      }

    }
  });
};