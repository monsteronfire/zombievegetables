window.addEventListener("load", function() {
  var Q = window.Q = Quintus({development: true})
    .include("Sprites, Scenes, 2D, UI, Input, Touch")
    .include("ZombiesGUI, ZombiesEnemies, ZombiesPlants")
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

  Q.touch(Q.SPRITE_SUN);

  Q.scene("level", function(stage) {
    var background = new Q.Sprite({
      x: 120 + 960/2,
      y: 720/2,
      asset: "background.png",
      type: Q.SPRITE_GROUND
    });

    var sun1 = new Q.Sun();
    var sun2 = new Q.Sun();
    var sun3 = new Q.Sun();
    var sun4 = new Q.Sun();
    var sun5 = new Q.Sun();

    var zombie1 = new Q.Zombie(
      Q._extend({x: 900, y: 300}, Q.zombieTypes['skeleton'])
    );              
    var zombie2 = new Q.Zombie(
      Q._extend({x: 900, y: 100},Q.zombieTypes['basic'])
    );              
    var zombie3 = new Q.Zombie(
      Q._extend({x: 900, y: 600},Q.zombieTypes['chicken'])
    );   

    var sidePanel = new Q.SidePanel();

    stage.insert(background);
    stage.insert(zombie1);
    stage.insert(zombie2);
    stage.insert(sun1);
    stage.insert(sun2);
    stage.insert(sun3);
    stage.insert(sun4);
    stage.insert(sun5);
    stage.insert(zombie3);
    stage.insert(sidePanel);
  });

  Q.load("background.png, sun.png, zombie1.png, zombie2.png, zombie3.png, chicken.png", function() {
    Q.stageScene("level");
  })
});