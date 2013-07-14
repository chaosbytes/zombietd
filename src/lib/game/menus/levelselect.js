ig.module('game.menus.levelselect').requires('impact.game', 'impact.font').defines(function () {

	LevelSelectMenu = ig.Game.extend({
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
});