export default class GameOver extends Phaser.State{
	create(){
		this.background = this.game.add.sprite(0,0, 'gameoverbackground');
		this.gameover = this.game.add.sprite(this.game.width/2,this.game.height/2-50, 'gameover');
		this.gameover.anchor.setTo(0.5);
		this.gameover.scale.setTo(0.9);

		this.playButton = this.game.add.button(this.game.width/2, this.game.height/2 + 96.5, 'button', this.play, this);
		this.playButton.anchor.setTo(0.5);
		this.playButton.scale.setTo(0.5);
		this.playText = this.game.add.text(this.game.width/2, this.game.height/2 + 100, "Probeer opnieuw", { font: '18px CharlemagneStd-Bold', fill: '#DCB975' });
		this.playText.anchor.setTo(0.5);

		//kleinere
		this.playButton = this.game.add.button(this.game.width/2, this.game.height/2 + 146.5, 'button', this.reason, this);
		this.playButton.anchor.setTo(0.5);
		this.playButton.scale.setTo(0.4);
		this.playButton.alpha = 0;
		this.playText = this.game.add.text(this.game.width/2, this.game.height/2 + 165, "(Ontdek waarom het niet lukt)", { font: '14px CharlemagneStd-Bold', fill: '#E1C8A6' });
		this.playText.anchor.setTo(0.5);

		this.frame = this.game.add.sprite(0,0, 'frame');

	}

	play(){
		this.game.state.start('Main');
	}
	reason(){
		this.game.state.start('Won');
	}
}