export default class ShipGroup extends Phaser.Group { 
	constructor(game) {
		super(game);

		this.x = 0;
		this.enableBody = true;

		this.ship = game.add.sprite(this.x, 0, 'ship');
		this.add(this.ship);
		this.wheel = game.add.sprite(this.x + this.ship.width/2, game.height-50, 'wiel');
		this.wheel.anchor.set(0.5);
		this.add(this.wheel);
	}
	update(){
		// this.x++;
	}
}