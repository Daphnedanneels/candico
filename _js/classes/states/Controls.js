export default class Controls extends Phaser.State{
	create(){
		console.log('Controls');
		// this.gameOverText = this.game.add.text();

		this.background = this.game.add.sprite(0, 0, 'background');
		this.titel = this.game.add.text(this.game.width/2, 120, "CONTROLS", { font: '24px fontname', fill: '#F5E2C0' });
		this.titel.anchor.setTo(0.5);

		this.playButton = this.game.add.button(this.game.width/2, this.game.height - 120, 'button', this.play, this);
		this.playButton.anchor.setTo(0.5);
		this.playButton.scale.setTo(0.3, 0.5);
		this.playText = this.game.add.text(this.game.width/2, this.game.height - 120, "play", { font: '24px fontname', fill: '#F5E2C0' });
		this.playText.anchor.setTo(0.5);

		this.frame = this.game.add.sprite(0,0, 'frame');
	}
	
	update(){

	}
	play(){
		this.game.state.start('Main');
	}
}