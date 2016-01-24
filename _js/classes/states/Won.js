export default class Won extends Phaser.State{
	create(){
		console.log('Won');
		// this.gameOverText = this.game.add.text();

		this.playButton = this.game.add.button(this.game.width/2, this.game.height/2 - 3.5, 'button', this.play, this);
		this.playButton.anchor.setTo(0.5);
		this.playButton.scale.setTo(0.5);
		this.playText = this.game.add.text(this.game.width/2, this.game.height/2, "PROBEER OPNIEUW", { font: '24px fontname', fill: '#F5E2C0' });
		this.playText.anchor.setTo(0.5);

		this.frame = this.game.add.sprite(0,0, 'frame');

	}
	
	update(){

	}

	play(){
		this.game.state.start('Main');
	}
}