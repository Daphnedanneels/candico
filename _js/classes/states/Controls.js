export default class Controls extends Phaser.State{
	create(){
		this.background = this.game.add.sprite(25, 0, 'instructies');
		this.titel = this.game.add.text(this.game.width/2, 100, "Hoe kun je winnen?", { font: '24px CharlemagneStd-Bold', fill: '#DCB975' });
		this.titel.anchor.set(0.5);

		this.playButton = this.game.add.button(this.game.width/2, this.game.height - 100, 'button01', this.play, this);
		this.playButton.anchor.setTo(0.5);

		this.leftButton = this.game.add.sprite(this.game.width/2 - 15, 270, 'buttons', 0);
		this.leftButton.inputEnabled = true;
		this.leftButton.angle = 90;
		this.rightButton = this.game.add.sprite(this.game.width/2 + 10, 270, 'buttons', 0);
		this.rightButton.scale.setTo(-1, 1);
		this.rightButton.angle = -90;
		this.rightButton.inputEnabled = true;

		this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		this.leftButton.events.onInputDown.add(this.leftHandler, this);
    	this.rightButton.events.onInputDown.add(this.rightHandler, this);
    	this.leftKey.onDown.add(this.leftHandler, this);
    	this.rightKey.onDown.add(this.rightHandler, this);

    	this.right = false;
    	this.left = false;

		this.frame = this.game.add.sprite(0,0, 'frame');
	}
	
	update(){

	}
	play(){
		this.game.state.start('Main');
	}
	leftHandler(){
		if(this.left == false){
			this.left = true;
			this.leftButton.frame = 1;
		} else {
			this.left = false;
			this.leftButton.frame = 0;
		}
		this.right = false;
		this.rightButton.frame = 0;
	}


	rightHandler(){
		if(this.right == false){
			this.right = true;
			this.rightButton.frame = 1;
		} else {
			this.right = false;
			this.rightButton.frame = 0;
		}
		this.left = false;
		this.leftButton.frame = 0;		
	}
}