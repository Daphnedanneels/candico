/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _classesStatesPreload = __webpack_require__(1);

	var _classesStatesPreload2 = _interopRequireDefault(_classesStatesPreload);

	var _classesStatesMain = __webpack_require__(2);

	var _classesStatesMain2 = _interopRequireDefault(_classesStatesMain);

	var _classesStatesGameOver = __webpack_require__(8);

	var _classesStatesGameOver2 = _interopRequireDefault(_classesStatesGameOver);

	var init = function init() {
		var game = new Phaser.Game(800, 500, Phaser.AUTO);
		game.state.add('Main', _classesStatesMain2['default'], false);
		game.state.add('GameOver', _classesStatesGameOver2['default'], false);
		game.state.add('Preload', _classesStatesPreload2['default'], false);
		game.state.start('Preload');
	};

	init();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Preload = (function (_Phaser$State) {
		_inherits(Preload, _Phaser$State);

		function Preload() {
			_classCallCheck(this, Preload);

			_get(Object.getPrototypeOf(Preload.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(Preload, [{
			key: 'preload',
			value: function preload() {
				this.load.atlasJSONHash('windroos', 'assets/images/windroos.png', 'assets/data/windroos.json');
				this.load.image('wiel', 'assets/images/wiel.png');
				this.load.image('waterbackground', 'assets/images/waterbackground.png');
				this.load.image('watersprite', 'assets/images/watersprite.png');
				this.load.image('cloudsprite', 'assets/images/clouds01.png');
				this.load.image('background', 'assets/images/background.jpg');
				this.load.image('water', 'assets/images/water.png');
				this.load.image('sail', 'assets/images/sail.png');
				this.load.image('sun', 'assets/images/zon.png');
				this.load.image('ship', 'assets/images/ship.png');
				this.load.spritesheet('buttons', 'assets/images/buttons.png', 50, 50, 2);
				this.load.image('navigatie-01', 'assets/images/navigatie-01.png');
				this.load.image('navigatie-02', 'assets/images/navigatie-02.png');
				this.load.image('navigatie-03', 'assets/images/navigatie-03.png');
			}
		}, {
			key: 'create',
			value: function create() {
				console.log('preload');
				this.game.state.start('Main');
			}
		}, {
			key: 'update',
			value: function update() {}
		}]);

		return Preload;
	})(Phaser.State);

	exports['default'] = Preload;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _objectsWater = __webpack_require__(3);

	var _objectsWater2 = _interopRequireDefault(_objectsWater);

	var _objectsWaterGroup = __webpack_require__(5);

	var _objectsWaterGroup2 = _interopRequireDefault(_objectsWaterGroup);

	var _objectsWaterBackground = __webpack_require__(7);

	var _objectsWaterBackground2 = _interopRequireDefault(_objectsWaterBackground);

	var _objectsCloudBackground = __webpack_require__(9);

	var _objectsCloudBackground2 = _interopRequireDefault(_objectsCloudBackground);

	var _objectsShipGroup = __webpack_require__(4);

	var _objectsShipGroup2 = _interopRequireDefault(_objectsShipGroup);

	var Main = (function (_Phaser$State) {
		_inherits(Main, _Phaser$State);

		function Main() {
			_classCallCheck(this, Main);

			_get(Object.getPrototypeOf(Main.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(Main, [{
			key: 'preload',
			value: function preload() {}
		}, {
			key: 'create',
			value: function create() {
				console.log('main');
				this.game.physics.startSystem(Phaser.Physics.ARCADE);
				this.game.stage.backgroundColor = '#BEE2E7';

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
				// this.xPosOnScreen = -1000;

				this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
				this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.X);

				this.sun = this.game.add.sprite(-100, -200, 'sun');
				this.cloudBackground = new _objectsCloudBackground2['default'](this.game, 0, 0, 800, 200);
				this.game.add.existing(this.cloudBackground);

				this.waterBackground = new _objectsWaterBackground2['default'](this.game, 0, 200, 800, 300);
				this.game.add.existing(this.waterBackground);
				// OF
				this.waterGroup = new _objectsWaterGroup2['default'](this.game);

				this.ship = new _objectsShipGroup2['default'](this.game);

				//TODO: navigation in shipGroup steken.
				this.navigation();

				//TODO: sails in shipGroup steken.
				this.sails();

				this.windroos = this.game.add.sprite(20, this.game.height - 65, 'windroos');
				this.kmh = this.game.add.text(80, this.game.height - 50, "", { font: '16px helvetica', fill: '#FFFFFF' });
				this.yourSpeed = this.game.add.text(this.game.width - 200, this.game.height - 50, "", { font: '16px helvetica', fill: '#FFFFFF' });
				this.speedUpText = this.game.add.text(this.game.width - 200, this.game.height - 80, "", { font: '16px helvetica', fill: '#FFFFFF' });
				this.distanceText = this.game.add.text(20, 40, "Je hebt nog " + this.distanceLeft + " seconden", { font: '16px helvetica', fill: '#FFFFFF' });
				this.timeLeftText = this.game.add.text(20, 20, "Je hebt nog " + this.timeLeft + " seconden", { font: '16px helvetica', fill: '#FFFFFF' });

				this.changeDirection();
				//per seconde de timeCounter omhoog -> max. 180 seconden.
				this.game.time.events.loop(Phaser.Timer.SECOND, this.updateTime, this);
				this.game.time.events.loop(2000, this.changeWindVector, this);
				this.game.time.events.loop(10000, this.changeDirection, this);
				this.game.time.events.loop(15000, this.changeRouteDirection, this);
			}
		}, {
			key: 'update',
			value: function update() {
				this.shipSpeed = (180 - Math.abs(this.navigatie01.angle)) / 4.5; //km/h
				if (this.shipSpeed < 30) {
					this.speedUpText.setText("please speed up!");
				} else {
					this.speedUpText.setText("going steady");
				}
				this.yourSpeed.setText("you are going " + Math.floor(this.shipSpeed) + " km/h");

				//Navigatie02 draaisysteem (n-o-z-w)
				this.navigatie02.angle = this.previousRouteDegree;
				this.difference = this.routeDegree - this.previousRouteDegree;
				this.turnSpeed = 250 - this.shipSpeed * 2;
				this.previousRouteDegree += this.difference / this.turnSpeed;

				//zonsysteem
				this.angleDifference = this.navigatie02.angle - this.navigatie01.angle;
				this.xPosOnScreen = Math.floor((this.angleDifference - 150) * 16.66);
				this.sun.x = -100 + this.xPosOnScreen;

				if (this.leftKey.isDown) {

					this.navigatie01.angle -= 0.45;
					this.ship.wheel.angle--;
					// this.clouds.x -= 0.8;
					this.scrollX--;
				} else if (this.rightKey.isDown) {

					this.navigatie01.angle += 0.45;
					this.ship.wheel.angle++;
					// this.clouds.x -= 0.8;
					this.scrollX++;
				}

				//adjust sails
				this.leftButton.events.onInputDown.add(this.leftHandler, this);
				this.rightButton.events.onInputDown.add(this.rightHandler, this);
				if (this.leftSail == true) {
					if (this.leftSailButton.y < -100) {
						this.leftSailButton.y++;
					}
					//hoe lager zijl, hoe groter boostkracht
					this.boostSpeed = (180 + this.leftSailButton.y) / 145;
					this.navigatie01.angle -= this.boostSpeed;
				} else {
					if (this.leftSailButton.y > -180) {
						this.leftSailButton.y--;
					}
				}
				if (this.rightSail == true) {
					this.navigatie01.angle += 0.55;
					if (this.rightSailButton.y < -100) {
						this.rightSailButton.y++;
					}
				} else {
					if (this.rightSailButton.y > -180) {
						this.rightSailButton.y--;
					}
				}

				//pull ship!
				this.currentSpeed = this.directionToPull * (this.windSpeed / 2) / 200;
				this.navigatie01.angle += this.currentSpeed;

				this.steerSpeed = this.directionToPull * (this.windSpeed / 2) / 100;
				if (this.scrollX < 200 && this.scrollX > -200) {
					this.scrollX += this.steerSpeed;
				} else {
					this.scrollX += this.directionToPull / 100;
				}

				this.distanceMap();
				//scrollX is afhankelijk van de windduwendesnelheid, het manueel bewegen van het schip
				this.scrollY = this.shipSpeed * 4; // JUIST
				this.waterBackground.changeScroll(this.scrollX, this.scrollY);
				this.cloudBackground.changeScroll(this.scrollX / 5, 0);
			}
		}, {
			key: 'changeWindVector',
			value: function changeWindVector() {
				this.directionLala = this.game.rnd.integerInRange(0, 1);
				switch (this.directionLala) {
					case 0:
						this.directionToPull = -1;
						break;
					case 1:
						this.directionToPull = 1;
						break;
				}
			}
		}, {
			key: 'changeRouteDirection',
			value: function changeRouteDirection() {
				this.previousRouteDegree = this.routeDegree;
				this.routeDegree = this.game.rnd.integerInRange(0, 360);
			}
		}, {
			key: 'changeDirection',
			value: function changeDirection() {
				this.previousDegree = this.windDegrees;
				this.windDegrees = this.game.rnd.integerInRange(this.previousDegree - 90, this.previousDegree + 90); //degrees

				this.changeWindSpeed();
				this.windDirection = this.determinDirection(this.windDegrees);
			}
		}, {
			key: 'changeWindSpeed',
			value: function changeWindSpeed() {
				this.previousSpeed = this.windSpeed;
				this.windSpeed = this.game.rnd.integerInRange(100, 220);
				this.kmh.setText(Math.floor((250 - this.windSpeed) / 2) + " km/h");
			}
		}, {
			key: 'distanceMap',
			value: function distanceMap() {
				this.currentDistance += this.shipSpeed;
				var mapDistance = this.currentDistance / this.totalDistance;
				if (mapDistance >= 1) {
					console.log('You WON!!!');
				}
			}
		}, {
			key: 'getDirectionForDegree',
			value: function getDirectionForDegree(degree) {
				if (degree < 22) {
					direction = 'n';
					this.windroos.frameName = 'sterren-01';
				} else if (degree < 67) {
					direction = 'no';
					this.windroos.frameName = 'sterren-05';
				} else if (degree < 112) {
					direction = 'o';
					this.windroos.frameName = 'sterren-03';
				} else if (degree < 157) {
					direction = 'zo';
					this.windroos.frameName = 'sterren-06';
				} else if (degree < 202) {
					direction = 'z';
					this.windroos.frameName = 'sterren-04';
				} else if (degree < 247) {
					direction = 'zw';
					this.windroos.frameName = 'sterren-08';
				} else if (degree < 292) {
					direction = 'w';
					this.windroos.frameName = 'sterren-02';
				} else if (degree < 337) {
					direction = 'nw';
					this.windroos.frameName = 'sterren-07';
				} else {
					// degree > 337
					direction = 'n';
					this.windroos.frameName = 'sterren-01';
				}
			}
		}, {
			key: 'determinDirection',
			value: function determinDirection(degree) {
				var direction = undefined;

				if (degree > 337 || degree < 22) {
					direction = 'n';
					this.windroos.frameName = 'sterren-01';
				}
				if (degree > 22 && degree < 67) {
					direction = 'no';
					this.windroos.frameName = 'sterren-05';
				}
				if (degree > 67 && degree < 112) {
					direction = 'o';
					this.windroos.frameName = 'sterren-03';
				}
				if (degree > 122 && degree < 157) {
					direction = 'zo';
					this.windroos.frameName = 'sterren-06';
				}
				if (degree > 157 && degree < 202) {
					direction = 'z';
					this.windroos.frameName = 'sterren-04';
				}
				if (degree > 202 && degree < 247) {
					direction = 'zw';
					this.windroos.frameName = 'sterren-08';
				}
				if (degree > 247 && degree < 292) {
					direction = 'w';
					this.windroos.frameName = 'sterren-02';
				}
				if (degree > 292 && degree < 337) {
					direction = 'nw';
					this.windroos.frameName = 'sterren-07';
				}
				return direction;
			}
		}, {
			key: 'leftHandler',
			value: function leftHandler() {
				if (this.leftSail == true) {
					this.leftSail = false;
					this.leftButton.frame = 0;
				} else {
					this.leftSail = true;
					this.leftButton.frame = 1;
				}

				this.rightSail = false;
				this.rightButton.frame = 0;
			}
		}, {
			key: 'rightHandler',
			value: function rightHandler() {
				if (this.rightSail == true) {
					this.rightSail = false;
					this.rightButton.frame = 0;
				} else {
					this.rightSail = true;
					this.rightButton.frame = 1;
				}

				this.leftSail = false;
				this.leftButton.frame = 0;
			}
		}, {
			key: 'updateTime',
			value: function updateTime() {
				this.timeCounter++;
				this.timeLeft = 180 - this.timeCounter;
				if (this.timeLeft == 0) {
					this.gameOver();
				}
				this.distanceLeft = Math.floor(this.totalDistance - this.currentDistance);
				this.timeLeftText.setText('Je hebt nog ' + this.timeLeft + ' seconden');
				this.distanceText.setText('Nog ' + this.distanceLeft + ' meter te gaan');
			}
		}, {
			key: 'sails',
			value: function sails() {
				this.leftSailButton = this.game.add.sprite(this.game.width / 2 - 300, this.sailLeftY, 'sail', 0);
				// this.leftSailButton.inputEnabled = true;
				this.rightSailButton = this.game.add.sprite(this.game.width / 2 + 300, this.sailRightY, 'sail', 0);
				this.rightSailButton.scale.setTo(-1, 1);
				// this.rightSailButton.inputEnabled = true;

				this.leftButton = this.game.add.sprite(this.game.width / 2 - 150, 100, 'buttons', 0);
				this.leftButton.inputEnabled = true;
				this.rightButton = this.game.add.sprite(this.game.width / 2 + 100, 100, 'buttons', 0);
				// this.rightButton.scale.setTo(-1, 1);
				this.rightButton.inputEnabled = true;
			}
		}, {
			key: 'navigation',
			value: function navigation() {
				this.navigatie03 = this.add.sprite(this.game.width - 80, 90, 'navigatie-03');
				this.navigatie03.anchor.set(0.5);
				this.navigatie02 = this.add.sprite(this.game.width - 80, 90, 'navigatie-02');
				this.navigatie02.anchor.set(0.5);
				this.navigatie01 = this.add.sprite(this.game.width - 80, 90, 'navigatie-01');
				this.navigatie01.anchor.set(0.5);
			}
		}, {
			key: 'gameOver',
			value: function gameOver() {
				this.game.state.start('GameOver');
			}
		}]);

		return Main;
	})(Phaser.State);

	exports['default'] = Main;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Water = (function (_Phaser$Sprite) {
		_inherits(Water, _Phaser$Sprite);

		function Water(game, x, y, randomMove) {
			_classCallCheck(this, Water);

			_get(Object.getPrototypeOf(Water.prototype), 'constructor', this).call(this, game, x, y, 'water');
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

		_createClass(Water, [{
			key: 'update',
			value: function update() {
				this.x += this.waterMove() / 20; // + turnSpeed * direction;
				// this.y += 0.5;
			}
		}, {
			key: 'waterMove',
			value: function waterMove() {
				//snelheid = 0 when turning?
				if (this.waterMovement > 50 || this.waterMovement < -50) {
					this.direction *= -1;
				}
				this.waterMovement += this.snelheid * this.direction;
				return this.waterMovement;
			}
		}]);

		return Water;
	})(Phaser.Sprite);

	exports['default'] = Water;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ShipGroup = (function (_Phaser$Group) {
		_inherits(ShipGroup, _Phaser$Group);

		function ShipGroup(game) {
			_classCallCheck(this, ShipGroup);

			_get(Object.getPrototypeOf(ShipGroup.prototype), 'constructor', this).call(this, game);

			this.x = 0;
			this.enableBody = true;

			this.ship = game.add.sprite(this.x, 0, 'ship');
			this.add(this.ship);
			this.wheel = game.add.sprite(this.x + this.ship.width / 2, game.height - 50, 'wiel');
			this.wheel.anchor.set(0.5);
			this.add(this.wheel);
		}

		_createClass(ShipGroup, [{
			key: 'update',
			value: function update() {
				// this.x++;
			}
		}]);

		return ShipGroup;
	})(Phaser.Group);

	exports['default'] = ShipGroup;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _objectsWater = __webpack_require__(3);

	var _objectsWater2 = _interopRequireDefault(_objectsWater);

	var WaterGroup = (function (_Phaser$Group) {
		_inherits(WaterGroup, _Phaser$Group);

		function WaterGroup(game) {
			_classCallCheck(this, WaterGroup);

			_get(Object.getPrototypeOf(WaterGroup.prototype), 'constructor', this).call(this, game);

			// this.enableBody = true;

			for (var i = 0; i < 10; i++) {
				var x = this.game.rnd.integerInRange(-1000, -10);
				var random = this.game.rnd.integerInRange(-50, 50);
				this.water = new _objectsWater2['default'](game, x, 150 + i * 30, random);
				this.add(this.water);
			}
		}

		// update(){
		// 	//TODO: loop over added waters en hun update manueel oproepen
		// }
		return WaterGroup;
	})(Phaser.Group);

	exports['default'] = WaterGroup;
	module.exports = exports['default'];

/***/ },
/* 6 */,
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var WaterBackground = (function (_Phaser$TileSprite) {
		_inherits(WaterBackground, _Phaser$TileSprite);

		function WaterBackground(game, x, y, width, height) {
			_classCallCheck(this, WaterBackground);

			_get(Object.getPrototypeOf(WaterBackground.prototype), 'constructor', this).call(this, game, x, y, width, height, 'watersprite');
			this.autoScroll(-20, 80);
		}

		_createClass(WaterBackground, [{
			key: 'changeScroll',
			value: function changeScroll(richtingX, richtingY) {
				this.autoScroll(richtingX, richtingY);
			}
		}]);

		return WaterBackground;
	})(Phaser.TileSprite);

	exports['default'] = WaterBackground;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GameOver = (function (_Phaser$State) {
		_inherits(GameOver, _Phaser$State);

		function GameOver() {
			_classCallCheck(this, GameOver);

			_get(Object.getPrototypeOf(GameOver.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(GameOver, [{
			key: 'create',
			value: function create() {
				console.log('GameOver');
				// this.gameOverText = this.game.add.text();
			}
		}, {
			key: 'update',
			value: function update() {}
		}]);

		return GameOver;
	})(Phaser.State);

	exports['default'] = GameOver;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CloudBackground = (function (_Phaser$TileSprite) {
		_inherits(CloudBackground, _Phaser$TileSprite);

		function CloudBackground(game, x, y, width, height) {
			_classCallCheck(this, CloudBackground);

			_get(Object.getPrototypeOf(CloudBackground.prototype), 'constructor', this).call(this, game, x, y, width, height, 'cloudsprite');
			this.autoScroll(-20, 80);
		}

		_createClass(CloudBackground, [{
			key: 'changeScroll',
			value: function changeScroll(richtingX, richtingY) {
				this.autoScroll(richtingX, richtingY);
			}
		}]);

		return CloudBackground;
	})(Phaser.TileSprite);

	exports['default'] = CloudBackground;
	module.exports = exports['default'];

/***/ }
/******/ ]);