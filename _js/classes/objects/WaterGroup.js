import Water from '../objects/Water';

export default class WaterGroup extends Phaser.Group{ 
	constructor(game) {
		super(game);

		for (var i = 0; i < 12; i++) {
			let x = this.game.rnd.integerInRange(-1000, -50);
			let random = this.game.rnd.integerInRange(-50, 50);
			let scale = 0.05 + (i/10);
			this.water = new Water(game, x, 150 + (i*(3+(i*0.8))), random, scale);
			this.add(this.water);
		}
	}
	// update(){
	// 	//TODO: loop over added waters en hun update manueel oproepen
	// }
}