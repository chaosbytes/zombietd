ig.module('game.menus.mainmenu').requires('impact.game', 'impact.font', 'impact.image', 'plugins.Button', 'game.menus.LevelSelectMenu').defines(function () {

	MainMenu = ig.Game.extend({
		bg: new ig.Image('media/mainmenu-bg.png'),
		font64: new ig.Font('media/fonts/zombie-ca130f-64.png'),
		font128: new ig.Font('media/fonts/zombie-ca130f-128.png'),
		title_part_one: "Z",
		title_part_two: "ombie",
		title_part_three: "TD",
		title_width: null,
		title_pos: {
			part_one_x: null,
			part_two_x: null,
			part_three_x: null,
			y: null
		},
		start_btn: null,
		init: function () {
			this.title_width = this.font128.widthForString(this.title_part_one) + this.font64.widthForString(this.title_part_two) + this.font128.widthForString(this.title_part_three);
			this.title_pos.part_one_x = ig.system.width / 2 - this.title_width / 2;
			this.title_pos.part_two_x = this.title_pos.part_one_x + this.font128.widthForString(this.title_part_one) + this.font64.letterSpacing;
			this.title_pos.part_three_x = this.title_pos.part_two_x + this.font64.widthForString(this.title_part_two) + this.font64.letterSpacing;
			this.title_pos.y = 175;
			ig.input.bind(ig.KEY.MOUSE1, 'click');
			this.start_btn = ig.game.spawnEntity("Button", ig.system.width / 2 - 144, ig.system.height / 2.25, {
				animSheet: new ig.AnimationSheet('media/start-btn-ss.png', 288, 128),
				size: {
					x: 288,
					y: 128
				},
				pressedUp: function () {
					console.log("click");
					ig.system.setGame(LevelSelectMenu);
				}
			});
		},
		update: function () {
			// Update all entities and backgroundMaps
			this.parent();
			// Add your own, additional update code here
		},
		draw: function () {
			this.bg.draw(0, 0);
			this.font128.draw(this.title_part_one, this.title_pos.part_one_x, this.title_pos.y);
			this.font64.draw(this.title_part_two, this.title_pos.part_two_x, this.title_pos.y + (this.font128.height - this.font64.height) - 24);
			this.font128.draw(this.title_part_three, this.title_pos.part_three_x, this.title_pos.y);
			this.start_btn.draw();
		}
	});
});