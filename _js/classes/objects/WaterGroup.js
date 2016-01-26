import Water from '../objects/Water';

export default class WaterGroup extends Phaser.Group{ 
	constructor(game) {
		super(game);

		this.game = game;
		this.ySpeed = 0.5; //max 1, afhankelijk van shipSpeed?

		for (var i = 0; i < 25; i++) {
			let x = this.game.rnd.integerInRange(-1000, -50);
			let random = this.game.rnd.integerInRange(-50, 50);
			let scale = 0.05 + (i/10);
			this.water = new Water(game, x, 150 + i*14, random, 0.5);
			this.add(this.water);
		}

		this.checkWorldBounds = true; 
		this.outOfBoundsKill = true;
	}
	update(){
		super.update();
		this.forEach(function(water) {
	    	if(water.y > 500) {
	    		this.reset(0, 150, water);
	    	}
			water.y += this.ySpeed;
		}, this);
	}
	reset(x, y, water){
		// console.log(water);
		water.y = y;
		water.sendToBack(); 
	}
}