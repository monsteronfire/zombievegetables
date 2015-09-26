window.addEventListener("load", function() {
  var Q = window.Q = Quintus({development: true})
    .include("Sprites, Scenes, 2D, UI, Input, Touch")
    .include("ZombiesGUI, ZombiesEnemies, ZombiesPlants, ZombiesGameplay")
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
  Q.SPRITE_UI = 64;

  Q.touch(Q.SPRITE_SUN | Q.SPRITE_GROUND | Q.SPRITE_UI);

  Q.scene("level", function(stage) {
    var level = new Q.Level();

    var zombie1 = new Q.Zombie(
      Q._extend({x: 900, y: 300}, Q.zombieTypes['skeleton'])
    );
    var zombie2 = new Q.Zombie(
      Q._extend({x: 900, y: 100},Q.zombieTypes['basic'])
    );     
    var zombie3 = new Q.Zombie(
      Q._extend({x: 900, y: 600},Q.zombieTypes['chicken'])
    );

    var plant1 = new Q.Plant(
      Q._extend({x: 600, y: 600},Q.plantTypes['carnivorous'])
    );

    var plant2 = new Q.Plant(
      Q._extend({x: 600, y: 100},Q.plantTypes['carnivorous'])
    );

    var sidePanel = new Q.SidePanel();

    stage.insert(level);
    
    stage.insert(zombie1);
    stage.insert(zombie2);
    stage.insert(zombie3);

    stage.insert(plant1);
    stage.insert(plant2);

    stage.insert(sidePanel);
  });

  Q.load("background.png, sun.png, zombie1.png, zombie2.png, zombie3.png, chicken.png, carnivorousplant.png, corn.png, chilli.png, sunflower.png", function() {
    Q.state.reset({sun: 200});
    Q.stageScene("level", 0);
    Q.stageScene("sun", 1);

  })
});