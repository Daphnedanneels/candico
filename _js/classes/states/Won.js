export default class Won extends Phaser.State{
	create(){
		this.background = this.game.add.sprite(0,0, 'gameoverbackground');
		this.gameover = this.game.add.sprite(this.game.width/2,this.game.height/2-30, 'havenbereikt');
		this.gameover.anchor.setTo(0.5);
		this.gameover.scale.setTo(0.75, 0.7);

		this.read = this.game.add.sprite(this.game.width/2+180,this.game.height/2-115, 'lees');
		this.read.anchor.setTo(0.5);
		this.read.scale.setTo(0.50);

		this.playButton = this.game.add.button(this.game.width/2, this.game.height/2+166.5, 'button', this.play, this);
		this.playButton.anchor.setTo(0.5);
		this.playButton.scale.setTo(0.45);
		this.playText = this.game.add.text(this.game.width/2, this.game.height/2+170, "Speel nogmaals", { font: '18px CharlemagneStd-Bold', fill: '#F5E2C0' });
		this.playText.anchor.setTo(0.5);

		this.frame = this.game.add.sprite(0,0, 'frame');

	}
	
	update(){

	}

	play(){
		this.game.state.start('Main');
	}
}