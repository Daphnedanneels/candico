import ShipGroup from '../objects/ShipGroup';
import WaterGroup from '../objects/WaterGroup';
import CloudBackground from '../objects/CloudBackground';

export default class Menu extends Phaser.State{
	create(){
		console.log('Menu');

		this.background = this.game.add.sprite(0,0,'background');
		this.cloudBackground = new CloudBackground(this.game, 0, 0, 850, 200);
		this.game.add.existing(this.cloudBackground);
		this.water = new WaterGroup(this.game, -150, 0);
		this.ship = new ShipGroup(this.game);

		this.playButton = this.game.add.button(this.game.width/2, this.game.height/2 - 3.5, 'button', this.play, this);
		this.playButton.anchor.setTo(0.5);
		this.playButton.scale.setTo(0.5);
		this.playText = this.game.add.text(this.game.width/2, this.game.height/2, "SPEEL NU", { font: '24px fontname', fill: '#F5E2C0' });
		this.playText.anchor.setTo(0.5);

		this.frame = this.game.add.sprite(0,0, 'frame');
	}
	
	update(){

	}
	play(){
		this.game.state.start('Main');
	}
}