import Water from '../objects/Water';
import WaterGroup from '../objects/WaterGroup';
import WaterBackground from '../objects/WaterBackground';
import CloudBackground from '../objects/CloudBackground';
import ShipGroup from '../objects/ShipGroup';

export default class Main extends Phaser.State{
	preload(){

	}

	create(){
		console.log('main');
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.stage.backgroundColor = '#BEE2E7';
		this.background = this.game.add.sprite(0,0,'background');

		//TODO: onnodige waarden kuisen
		this.previousDegree = 0;
		this.previousRouteDegree = 0;
		this.windDirection = 'n';
		this.routeDegree = 80;
		this.windDegrees = 0;
		this.windSpeed = 20;
		this.shipSpeed = 0;
		this.direction = 1;
		this.snelheid = 1;
		this.directionToPull = 1;
		this.previousDirectionToPull = -1;
		this.leftSail = false;
		this.rightSail = false;
		this.currentDistance = 0;
		this.sailLeftY = -160;
		this.sailRightY = -160;
		this.timeCounter = 0;
		this.timeLeft = 60;
		this.distanceLeft = 300000;
		this.totalDistance = 300000;
		this.scrollX = 100;
		this.scrollY = 30;
		this.rightDown = false;
		this.leftDown = false;
		// this.xPosOnScreen = -1000;

		this.cursors = this.game.input.keyboard.createCursorKeys();
		this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

    	this.sun = this.game.add.sprite(-100, -50, 'sun');
    	this.cloudBackground = new CloudBackground(this.game, 0, 0, 850, 200);
		this.game.add.existing(this.cloudBackground);

		this.waterGroup = new WaterGroup(this.game, -150, 0);

		this.ship = new ShipGroup(this.game);

		//TODO: navigation in shipGroup steken.
		this.navigation();

		//TODO: sails in shipGroup steken.
		this.sailButtons();
		
		this.windroos = this.game.add.sprite(60, this.game.height - 120, 'windroos');
		this.kmh = this.game.add.text(130,this.game.height - 100, "", { font: '16px helvetica', fill: '#FFFFFF' });
		this.yourSpeed = this.game.add.text(this.game.width - 205,this.game.height - 100, "", { font: '16px helvetica', fill: '#FFFFFF' });
		this.speedUpText = this.game.add.text(this.game.width - 205,this.game.height - 95, "", { font: '16px helvetica', fill: '#FFFFFF' });
		this.distanceText = this.game.add.text(40, 60, "Je hebt nog " + this.distanceLeft + " seconden", { font: '16px helvetica', fill: '#FFFFFF' });
		this.timeLeftText = this.game.add.text(40, 40, "" + this.timeLeft + "", { font: '24px Rationale', fill: '#FFFFFF' });

		this.changeDirection();
		//per seconde de timeCounter omhoog -> max. 180 seconden.
		this.game.time.events.loop(Phaser.Timer.SECOND, this.updateTime, this);
		this.game.time.events.loop(2000, this.changeWindVector, this);
		this.game.time.events.loop(5000, this.changeDirection, this);
		this.game.time.events.loop(15000, this.changeRouteDirection, this);

		this.frame = this.game.add.sprite(0,0, 'frame');
	}
	
	update(){
		this.shipSpeed = (180 - Math.abs(this.navigatie01.angle))/4.5; //km/h
		this.yourSpeed.setText("Snelheid: " + Math.floor(this.shipSpeed*0.55) + " knopen");

		//Navigatie02 draaisysteem (n-o-z-w)
		this.navigatie02.angle = this.previousRouteDegree;
		this.difference = this.routeDegree - this.previousRouteDegree;
		this.turnSpeed = 250 - (this.shipSpeed*2);
		this.previousRouteDegree += this.difference/this.turnSpeed;

		//zonsysteem
		this.angleDifference = this.navigatie02.angle - this.navigatie01.angle;
		this.xPosOnScreen = Math.floor((this.angleDifference - 110) * 7.14);
		this.sun.x = -100 + this.xPosOnScreen;

		//adjust sails
		this.adjustSails();

		//pull ship!
		this.currentSpeed = this.directionToPull*(this.windSpeed/2)/200;
		this.navigatie01.angle += this.currentSpeed;
		this.ship.wheel.angle += this.currentSpeed*2;

		this.steerSpeed = this.directionToPull*(this.windSpeed/2)/200;

		if(this.scrollX < 200 && this.scrollX > -200){
			this.scrollX += this.steerSpeed;
		}else if(this.scrollX < -200){
			this.scrollX = -199;
		}else {
			this.scrollX = 199;
		}

		this.distanceMap();
		//scrollX is afhankelijk van de windduwendesnelheid, het manueel bewegen van het schip
		this.scrollY = this.shipSpeed*4; // JUIST
		// this.waterBackground.changeScroll(this.scrollX, this.scrollY);
		this.cloudBackground.changeScroll(this.scrollX/5, 0);
		this.waterGroup.forEach(function(water) {
	    	water.changeScroll(this.scrollX, this.scrollY);
		}, this);
		
		console.log(this.scrollX);
	}

	posOrNeg(value){
		let lala;
		if(value < 0){
			lala = true;
		} else {
			lala = false;
		}
		return lala;
	}

	changeWindVector(){
		this.previousDirectionToPull = this.directionToPull;
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
		this.windDegrees = this.game.rnd.integerInRange(this.previousDegree - 120, this.previousDegree + 120); //degrees
		
		this.changeWindSpeed();
		this.windDirection = this.determinDirection(this.windDegrees);
	}

	changeWindSpeed(){
		this.previousSpeed = this.windSpeed;
		this.windSpeed = this.game.rnd.integerInRange(100, 220); 
		this.kmh.setText(Math.floor((250 - this.windSpeed)/2) + " km/h");
	}

	distanceMap(){	
		this.currentDistance += this.shipSpeed*2.2;
		let mapDistance = this.currentDistance/this.totalDistance;
		if(mapDistance >= 1){
			this.game.state.start('Won');
		}
	}
	adjustSails(){
		this.leftButton.events.onInputDown.add(this.leftHandler, this);
    	this.rightButton.events.onInputDown.add(this.rightHandler, this);
    	this.leftKey.onDown.add(this.leftHandler, this);
    	this.rightKey.onDown.add(this.rightHandler, this);
    	if(this.ship.leftSail == true){
    		if(this.ship.leftSailButton.y < -50){
    			this.ship.leftSailButton.y ++;
    		}
    		//hoe lager zijl, hoe groter boostkracht
    		this.boostSpeed = (200 + this.ship.leftSailButton.y)/145;
    		this.navigatie01.angle -= this.boostSpeed;
    		if(this.scrollX > 0){
    			this.scrollX -= this.boostSpeed*7;
    		}else {
    			this.scrollX -= this.boostSpeed;
    		}
    	} else {
    		if(this.ship.leftSailButton.y > -120){
    			this.ship.leftSailButton.y --;
    		}
    	}
    	if(this.ship.rightSail == true){
    		if(this.ship.rightSailButton.y < -50){
    			this.ship.rightSailButton.y ++;
    		}
    		this.boostSpeed = (200 + this.ship.rightSailButton.y)/145;
    		this.navigatie01.angle += this.boostSpeed;
    		if(this.scrollX < 0){
    			this.scrollX += this.boostSpeed*7;
    		}else {
    			this.scrollX += this.boostSpeed;
    		}
    	} else {
    		if(this.ship.rightSailButton.y > -120){
    			this.ship.rightSailButton.y --;
    		}
    	}
	}

	determinDirection(degree){
		let direction;

		if(degree > 337 || degree < 22){
			direction = 'n';
			this.windroos.frameName = 'windroos-01';
		}
		if(degree > 22 && degree < 67){
			direction = 'no';
			this.windroos.frameName = 'windroos-05';
		}
		if(degree > 67 && degree < 112){
			direction = 'o';
			this.windroos.frameName = 'windroos-03';
		}
		if(degree > 122 && degree < 157){
			direction = 'zo';
			this.windroos.frameName = 'windroos-06';
		}
		if(degree > 157 && degree < 202){
			direction = 'z';
			this.windroos.frameName = 'windroos-04';
		}
		if(degree > 202 && degree < 247){
			direction = 'zw';
			this.windroos.frameName = 'windroos-08';
		}
		if(degree > 247 && degree < 292){
			direction = 'w';
			this.windroos.frameName = 'windroos-02';
		}
		if(degree > 292 && degree < 337){
			direction = 'nw';
			this.windroos.frameName = 'windroos-07';
		}
		return direction;
	}

	leftHandler(){
		if(this.ship.leftSail == true){
			this.ship.leftSail = false;
			this.leftButton.frame = 0;
		} else {
			this.ship.leftSail = true;
			this.leftButton.frame = 1;
		}
		
		this.ship.rightSail = false;
		this.rightButton.frame = 0;
	}

	rightHandler(){
		if(this.ship.rightSail == true){
			this.ship.rightSail = false;
			this.rightButton.frame = 0;
		} else {
			this.ship.rightSail = true;
			this.rightButton.frame = 1;
		}

		this.ship.leftSail = false;
		this.leftButton.frame = 0;
	}
	updateTime(){
		this.timeCounter++;
		this.timeLeft = 60-this.timeCounter;
		if(this.timeLeft == 0){
			this.gameOver();
		}
		this.distanceLeft = Math.floor(this.totalDistance - this.currentDistance);
		this.timeLeftText.setText("" + this.timeLeft + "");
		this.distanceText.setText('Nog ' + this.distanceLeft + ' meter te gaan');
	}
	sailButtons(){
		this.leftButton = this.game.add.sprite(this.game.width/2 - 150, 150, 'buttons', 0);
		this.leftButton.inputEnabled = true;
		this.rightButton = this.game.add.sprite(this.game.width/2 + 100, 150, 'buttons', 0);
		// this.rightButton.scale.setTo(-1, 1);
		this.rightButton.inputEnabled = true;
	}

	navigation(){
		this.navigatie03 = this.add.sprite(this.game.width - 115, 120, 'navigatie-03');
		this.navigatie03.anchor.set(0.5);
		this.navigatie02 = this.add.sprite(this.game.width - 115, 120, 'navigatie-02');
		this.navigatie02.anchor.set(0.5);
		this.navigatie01 = this.add.sprite(this.game.width - 115, 120, 'navigatie-01');
		this.navigatie01.anchor.set(0.5);
	}

	gameOver(){
		this.game.state.start('GameOver');
	}
}