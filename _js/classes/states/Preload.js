export default class Preload extends Phaser.State{
	preload(){
		this.load.atlasJSONHash('windroos', 'assets/images/windroos.png', 'assets/data/windroos.json');
		this.load.image('wiel', 'assets/images/wiel.png');
		this.load.image('waterbackground', 'assets/images/waterbackground.png');
		this.load.image('watersprite', 'assets/images/watersprite.png');
		this.load.image('cloudsprite', 'assets/images/clouds01.png');
		this.load.image('background', 'assets/images/background.jpg');
		this.load.image('water', 'assets/images/water.png');
		this.load.image('sail', 'assets/images/sail.png');
		this.load.image('sun', 'assets/images/zon.png');
		this.load.image('ship', 'assets/images/ship.png');
		this.load.spritesheet('buttons', 'assets/images/buttons.png', 50, 50, 2);
		this.load.image('navigatie-01', 'assets/images/navigatie-01.png');
		this.load.image('navigatie-02', 'assets/images/navigatie-02.png');
		this.load.image('navigatie-03', 'assets/images/navigatie-03.png');
	}

	create(){
		console.log('preload');
		this.game.state.start('Main');
	}
	
	update(){

	}
}