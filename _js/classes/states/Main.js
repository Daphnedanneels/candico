import Water from '../objects/Water';
import WaterGroup from '../objects/WaterGroup';
import WaterBackground from '../objects/WaterBackground';
import ShipGroup from '../objects/ShipGroup';

export default class Main extends Phaser.State{
	preload(){

	}

	create(){
		console.log('main');
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		//TODO: onnodige waarden kuisen
		this.previousDegree = 0;
		this.previousRouteDegree = 0;
		this.windDirection = 'n';
		this.routeDegree = 80;
		this.windDegrees = 0;
		this.windSpeed = 20;
		this.shipSpeed = 0;
		this.waterMovementlala = [];
		this.waterMovement = this.game.add.group();
		this.direction = 1;
		this.snelheid = 1;
		this.directionToPull = 1;
		this.leftSail = false;
		this.rightSail = false;
		this.currentDistance = 0;
		this.sailLeftY = -160;
		this.sailRightY = -160;
		this.timeCounter = 0;
		this.timeLeft = 180;
		this.distanceLeft = 300000;
		this.totalDistance = 300000;
		this.scrollX = 100;
		this.scrollY = 30;

		this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
    	this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.X);

		this.background = this.add.sprite(0,-100, 'background');

		this.waterBackground = new WaterBackground(this.game, 0,100, 800, 400);
		this.game.add.existing(this.waterBackground);

		this.ship = new ShipGroup(this.game);

		//TODO: navigation in shipGroup steken.
		this.navigation();

		//TODO: sails in shipGroup steken
		//TODO: onInputDOWN (zolang er geklikt wordt ++)
		this.sails();
		
		this.windroos = this.game.add.sprite(20, this.game.height - 65, 'windroos');
		this.kmh = this.game.add.text(80,this.game.height - 50, "", { font: '16px helvetica', fill: '#FFFFFF' });
		this.yourSpeed = this.game.add.text(this.game.width - 200,this.game.height - 50, "", { font: '16px helvetica', fill: '#FFFFFF' });
		this.speedUpText = this.game.add.text(this.game.width - 200,this.game.height - 80, "", { font: '16px helvetica', fill: '#FFFFFF' });
		this.distanceText = this.game.add.text(20, 40, "Je hebt nog " + this.distanceLeft + " seconden", { font: '16px helvetica', fill: '#FFFFFF' });
		this.timeLeftText = this.game.add.text(20, 20, "Je hebt nog " + this.timeLeft + " seconden", { font: '16px helvetica', fill: '#FFFFFF' });

		this.changeDirection();
		//per seconde de timeCounter omhoog -> max. 180 seconden.
		this.game.time.events.loop(Phaser.Timer.SECOND, this.updateTime, this);
		this.game.time.events.loop(2000, this.changeWindVector, this);
		this.game.time.events.loop(10000, this.changeDirection, this);
		this.game.time.events.loop(15000, this.changeRouteDirection, this);
	}
	
	update(){
		this.shipSpeed = (180 - Math.abs(this.navigatie01.angle))/4.5; //km/h
		if(this.shipSpeed < 30){
			this.speedUpText.setText("please speed up!");
		} else {
			this.speedUpText.setText("going steady");
		}
		this.yourSpeed.setText("you are going " + Math.floor(this.shipSpeed) + " km/h");

		//Navigatie02 draaisysteem (n-o-z-w)
		this.navigatie02.angle = this.previousRouteDegree;
		this.difference = this.routeDegree - this.previousRouteDegree;
		this.turnSpeed = 250 - (this.shipSpeed*2);
		this.previousRouteDegree += this.difference/this.turnSpeed;

		if(this.leftKey.isDown){ 
			this.navigatie01.angle -= 0.45;
			this.ship.wheel.angle --;
			this.background.x -= 0.8;
			this.scrollX = this.turnSpeed;
		}else if(this.rightKey.isDown){ 
			this.navigatie01.angle += 0.45;
			this.ship.wheel.angle ++;
			this.background.x -= 0.8;
			this.scrollX = this.turnSpeed;
		}

		//adjust sails
		this.leftButton.events.onInputDown.add(this.leftHandler, this);
    	this.rightButton.events.onInputDown.add(this.rightHandler, this);
    	if(this.leftSail == true){
    		if(this.leftSailButton.y < -100){
    			this.leftSailButton.y ++;
    		}
    		//hoe lager zijl, hoe groter boostkracht
    		this.boostSpeed = (180 + this.leftSailButton.y)/145;
    		this.navigatie01.angle -= this.boostSpeed;
    	} else {
    		if(this.leftSailButton.y > -180){
    			this.leftSailButton.y --;
    		}
    	}
    	if(this.rightSail == true){
    		this.navigatie01.angle += 0.55;
    		if(this.rightSailButton.y < -100){
    			this.rightSailButton.y ++;
    		}
    	} else {
    		if(this.rightSailButton.y > -180){
    			this.rightSailButton.y --;
    		}
    	}

		//pull ship!
		this.currentSpeed = this.directionToPull*(this.windSpeed/2)/200;
		this.navigatie01.angle += this.currentSpeed;
		this.background.x += this.directionToPull;

		this.distanceMap();
		//scrollX is afhankelijk van de windduwendesnelheid, het manueel bewegen van het schip
		//scrollX moet links en rechts kunnen!
		//scrollX moet continue worden geupdate.
		this.scrollY = this.shipSpeed*2; // JUIST
		this.waterBackground.changeScroll(this.scrollX, this.scrollY);
		
	}

	changeWindVector(){
		this.directionLala = this.game.rnd.integerInRange(0, 1);
		switch(this.directionLala){
			case 0:
				this.directionToPull = -1;
				break;
			case 1:
				this.directionToPull = 1;
				break;
		}
	}

	changeRouteDirection(){
		this.previousRouteDegree = this.routeDegree;
		this.routeDegree = this.game.rnd.integerInRange(0, 360);
	}

	changeDirection(){
		this.previousDegree = this.windDegrees;
		this.windDegrees = this.game.rnd.integerInRange(this.previousDegree - 90, this.previousDegree + 90); //degrees
		
		this.changeWindSpeed();
		this.windDirection = this.determinDirection(this.windDegrees);
	}

	changeWindSpeed(){
		this.previousSpeed = this.windSpeed;
		this.windSpeed = this.game.rnd.integerInRange(100, 220); 
		this.kmh.setText(Math.floor((250 - this.windSpeed)/2) + " km/h");
	}

	distanceMap(){	
		this.currentDistance += this.shipSpeed;
		let mapDistance = this.currentDistance/this.totalDistance;
		if(mapDistance >= 1){
			console.log('You WON!!!');
		}
	}

	determinDirection(degree){
		let direction;

		//is dit nodig?!
		if(degree < 0){
			degree = 360 + degree;
		}
		if(degree > 360){
			degree = degree - 360;
		}
		//
		
		if(degree > 337 || degree < 22){
			direction = 'n';
			this.windroos.frameName = 'sterren-01';
		}
		if(degree > 22 && degree < 67){
			direction = 'no';
			this.windroos.frameName = 'sterren-05';
		}
		if(degree > 67 && degree < 112){
			direction = 'o';
			this.windroos.frameName = 'sterren-03';
		}
		if(degree > 122 && degree < 157){
			direction = 'zo';
			this.windroos.frameName = 'sterren-06';
		}
		if(degree > 157 && degree < 202){
			direction = 'z';
			this.windroos.frameName = 'sterren-04';
		}
		if(degree > 202 && degree < 247){
			direction = 'zw';
			this.windroos.frameName = 'sterren-08';
		}
		if(degree > 247 && degree < 292){
			direction = 'w';
			this.windroos.frameName = 'sterren-02';
		}
		if(degree > 292 && degree < 337){
			direction = 'nw';
			this.windroos.frameName = 'sterren-07';
		}
		return direction;
	}

	leftHandler(){
		if(this.leftSail == true){
			this.leftSail = false;
			this.leftButton.frame = 0;
		} else {
			this.leftSail = true;
			this.leftButton.frame = 1;
		}
		
		this.rightSail = false;
		this.rightButton.frame = 0;
	}

	rightHandler(){
		if(this.rightSail == true){
			this.rightSail = false;
			this.rightButton.frame = 0;
		} else {
			this.rightSail = true;
			this.rightButton.frame = 1;
		}

		this.leftSail = false;
		this.leftButton.frame = 0;
	}

	updateTime(){
		this.timeCounter++;
		console.log(this.timeCounter);
		this.timeLeft = 180-this.timeCounter;
		if(this.timeLeft == 0){
			this.gameOver();
		}
		this.distanceLeft = Math.floor(this.totalDistance - this.currentDistance);
		this.timeLeftText.setText('Je hebt nog ' + this.timeLeft + ' seconden');
		this.distanceText.setText('Nog ' + this.distanceLeft + ' meter te gaan');
	}

	sails(){
		this.leftSailButton = this.game.add.sprite(this.game.width/2 - 300, this.sailLeftY, 'sail', 0);
		// this.leftSailButton.inputEnabled = true;
		this.rightSailButton = this.game.add.sprite(this.game.width/2 + 300, this.sailRightY, 'sail', 0);
		this.rightSailButton.scale.setTo(-1, 1);
		// this.rightSailButton.inputEnabled = true;

		this.leftButton = this.game.add.sprite(this.game.width/2 - 100, 100, 'buttons', 0);
		this.leftButton.inputEnabled = true;
		this.rightButton = this.game.add.sprite(this.game.width/2 + 100, 100, 'buttons', 0);
		// this.rightButton.scale.setTo(-1, 1);
		this.rightButton.inputEnabled = true;
	}

	navigation(){
		this.navigatie03 = this.add.sprite(this.game.width - 80, 90, 'navigatie-03');
		this.navigatie03.anchor.set(0.5);
		this.navigatie02 = this.add.sprite(this.game.width - 80, 90, 'navigatie-02');
		this.navigatie02.anchor.set(0.5);
		this.navigatie01 = this.add.sprite(this.game.width - 80, 90, 'navigatie-01');
		this.navigatie01.anchor.set(0.5);
	}

	gameOver(){
		this.game.state.start('gameOver');
	}
}