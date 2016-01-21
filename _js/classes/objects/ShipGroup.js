export default class ShipGroup extends Phaser.Group { 
	constructor(game) {
		super(game);

		// this.x = 12.5;
		this.game = game;
		this.enableBody = true;
		this.snelheid = 1;
	    this.direction = 1;
	    this.waterMovement = 20;
	    this.leftSail = false;
		this.rightSail = false;
		this.sailLeftY = -120;
		this.sailRightY = -120;

		this.ship = game.add.sprite(0, -25, 'ship');
		this.add(this.ship);
		this.wheel = game.add.sprite(0 + this.ship.width/2, game.height-80, 'wiel');
		this.wheel.anchor.set(0.5);
		this.add(this.wheel);
		this.sails();
		this.add(this.leftSailButton);
		this.add(this.rightSailButton);
	}
	update(){
		this.y += this.waterMove()/200;
	}
	waterMove(){
		if(this.waterMovement > 50 || this.waterMovement < -50){
	  		this.direction *= -1;
		}
		this.waterMovement += this.snelheid * this.direction;
		return this.waterMovement;
	}
	sails(){
		this.leftSailButton = this.game.add.sprite(this.game.width/2 - 300, this.sailLeftY, 'sail', 0);
		// this.leftSailButton.inputEnabled = true;
		this.rightSailButton = this.game.add.sprite(this.game.width/2 + 300, this.sailRightY, 'sail', 0);
		this.rightSailButton.scale.setTo(-1, 1);
		// this.rightSailButton.inputEnabled = true;
	}
}