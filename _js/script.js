import Main from './classes/states/Main';

const init = () => {
	let game = new Phaser.Game(800,600, Phaser.AUTO);
	game.state.add('Main', Main, false);
	game.state.start('Main');
}

init();
