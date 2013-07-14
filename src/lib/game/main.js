ig.module('game.main').requires('impact.game', 'impact.font', 'game.menus.mainmenu', 'plugins.impact-splash-loader').defines(function () {

	ZombieTD = ig.Game.extend({
		init: function () {
			// Initialize your game here; bind keys etc.
		},
		update: function () {
			// Update all entities and backgroundMaps
			this.parent();
			// Add your own, additional update code here
		},
		draw: function () {
			// Draw all entities and backgroundMaps
			this.parent();
		}
	});

	
	// Start the Game with 60fps, a resolution of 320x240, scaled
	// up by a factor of 2
	ig.main('#canvas', MainMenu, 60, 960, 832, 1, ig.ImpactSplashLoader);

});