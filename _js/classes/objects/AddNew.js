export default class AddNew extends Phaser.Sprite { 
	constructor(game, x, y, frame) {
	    super(game, x, y, frame);
	    game.add.existing(this);
	}
	update(){
		
	}
}