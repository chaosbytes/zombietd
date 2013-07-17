ig.module('game.menus.LevelSelectMenu').requires('impact.game', 'impact.font', 'plugins.Button').defines(function () {
	LevelSelectMenu = ig.Game.extend({
		bg: new ig.Image('media/mainmenu-bg.png'),
		buttons: [],
		buttonSize: {
			x: 128,
			y: 128
		},
		numButtons: 10,
		buttonBounds: {
			left: 128,
			top: 96,
		},
		init: function () {
			ig.input.bind(ig.KEY.MOUSE1, 'click');
			for (var i = 0, xCounter = 0, yCounter = 0; i < this.numButtons; i++, xCounter++) {
				if (i % 5 === 0) {
					yCounter++;
					xCounter = 0;	
				}
				var x = this.buttonBounds.left + xCounter * this.buttonSize.x + xCounter*this.buttonSize.x*.5/4;
				var y = this.buttonBounds.top + yCounter * this.buttonSize.y;
				console.log(x + ", " + y);
				var button = ig.game.spawnEntity("Button", x, y, {
					animSheet: new ig.AnimationSheet('media/level_buttons/level1.png', 128, 128),
					size: {
						x: 128,
						y: 128
					},
					pressedUp: function () {
						console.log("click");
						//ig.system.setGame("LevelSelectMenu");
					}
				});
				this.buttons.push(button);
			}
		},
		update: function () {
			// Update all entities and backgroundMaps
			this.parent();
			// Add your own, additional update code here
		},
		draw: function () {
			// Draw all entities and backgroundMaps
			this.bg.draw(0, 0);
			for (var i = 0; i < this.numButtons; i++) {
				var button = this.buttons[i];
				button.draw();
			}
		}
	});
});