export default class Water extends Phaser.TileSprite { 
	constructor(game, x, y, randomMove, scale) {
	    super(game, x, y, 1800, 150, 'water');
	    game.add.existing(this);

	    this.game.physics.arcade.enableBody(this); 
	    this.enableBody = true;

	    this.x = x;
	    this.game = game;

	    this.snelheid = 1;
	    this.direction = 1;
	    this.waterMovement = randomMove;
	}
	update(){
		this.x += this.waterMove()/30;
		this.scale.setTo(1, ((this.y-120)/100));
	}
	changeScroll(richtingX){
		this.autoScroll(richtingX, 0);
	}
	waterMove(){
		if(this.waterMovement > 50 || this.waterMovement < -50){
	  		this.direction *= -1;
		}
		this.waterMovement += this.snelheid * this.direction;
		return this.waterMovement;
	}
}