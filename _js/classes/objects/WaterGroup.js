import Water from '../objects/Water';

export default class WaterGroup extends Phaser.Group{ 
	constructor(game) {
		super(game);

		this.waterGroup = this.game.add.group();

		// this.enableBody = true;

		for (var i = 0; i < 10; i++) {
			let x = this.game.rnd.integerInRange(-1000, -10);
			let random = this.game.rnd.integerInRange(-50, 50);
			this.water = new Water(game, x, 150 + i*30, random);
			this.waterGroup.add(this.water);
		}
		// this.add(this.waterGroup);
	}
	update(){
		
	}
}