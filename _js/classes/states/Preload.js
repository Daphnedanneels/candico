export default class Preload extends Phaser.State{
	preload(){
		this.load.atlasJSONHash('windroos', 'assets/game/windroos.png', 'assets/data/windroos.json');
		this.load.image('wiel', 'assets/game/wiel.png');
		this.load.image('waterbackground', 'assets/game/waterbackground.png');
		this.load.image('cloudsprite', 'assets/game/clouds01.png');
		this.load.image('background', 'assets/game/background.jpg');
		this.load.image('haven', 'assets/game/haven.png');
		this.load.image('gameoverbackground', 'assets/web/docks.jpg');
		this.load.image('gameover', 'assets/game/gameover.png');
		this.load.image('frame', 'assets/game/frame.png');
		this.load.image('instructies', 'assets/game/instructies.jpg');
		this.load.image('havenbereikt', 'assets/game/havenbereikt.png');
		this.load.image('lees', 'assets/game/lees.png');
		this.load.image('button', 'assets/web/button.png');
		this.load.image('button-hover', 'assets/web/button-hover.png');
		this.load.image('water', 'assets/game/water.png');
		this.load.image('sail', 'assets/game/sail.png');
		this.load.image('ship', 'assets/game/ship2.png');
		this.load.spritesheet('buttons', 'assets/game/buttons.png', 50, 50, 2);
		this.load.image('navigatie-01', 'assets/game/navigatie-01.png');
		this.load.image('navigatie-02', 'assets/game/navigatie-02.png');
		this.load.image('navigatie-03', 'assets/game/navigatie-03.png');
		this.load.image('knopenmeter', 'assets/game/knopen.png');
		this.load.image('knopenwijzer', 'assets/game/knopenwijzer.png');
	}

	create(){
		this.game.state.start('Menu');
	}
	
	update(){

	}
}