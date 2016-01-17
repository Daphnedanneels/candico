export default class Water extends Phaser.Sprite { 
	constructor(game, x, y, randomMove) {
	    super(game, x, y, 'water');
	    game.add.existing(this);

	    this.checkWorldBounds = true; 
	    this.outOfBoundsKill = true;

	    this.x = x;
	    this.game = game;

	    this.scale.setTo(1, 0.4);
	    this.snelheid = 1;
	    this.direction = 1;
	    this.waterMovement = randomMove;
	}
	update(){
		this.x += this.waterMove()/20; // + turnSpeed * direction;
		// this.y += 0.5;
	}
	waterMove(){
		//snelheid = 0 when turning?
		if(this.waterMovement > 50 || this.waterMovement < -50){
	  		this.direction *= -1;
		}
		this.waterMovement += this.snelheid * this.direction;
		return this.waterMovement;
	}
}