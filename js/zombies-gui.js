Quintus.ZombiesGUI = function(Q) {
  Q.UI.Container.extend("SidePanel", {
    init: function() {
      this._super({
        fill: "#E1DEB7",
        x: 120/2,
        y: 720/2,
        radius: 0,
        border: 0,
        shadow: 0,
        w: 120,
        h: 720
      });

      this.on("inserted");

      Q.state.on('change.sun', function() {
          Q('SidePanel',0).items[0].refreshStats();
      });
    },

    inserted: function() {
      this.stage.insert(new Q.Sprite({
          asset: 'sun.png',
          x: 60,
          y: 40
      }));

      this.totalSun = this.stage.insert(new Q.UI.Text({
          x: 60,
          y: 100,
          label: '100'
      }));
      this.refreshedStats();
    },

    refreshedStats: function() {
      this.totalSun.p.label = Q.state.get("sun") + "";
    }
  });
};