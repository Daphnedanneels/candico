export default class WaterBackground extends Phaser.TileSprite { 
	constructor(game, x, y, width, height) {
		super(game, x, y, width, height, 'watersprite');
		this.autoScroll(-20, 80);		
	}
	changeScroll(richtingX, richtingY){
		this.autoScroll(richtingX, richtingY);
	}
}