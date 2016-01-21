export default class CloudBackground extends Phaser.TileSprite { 
	constructor(game, x, y, width, height) {
		super(game, x, y, width, height, 'cloudsprite');
		this.autoScroll(-20, 0);		
	}
	changeScroll(richtingX, richtingY){
		this.autoScroll(richtingX, richtingY);
	}
}