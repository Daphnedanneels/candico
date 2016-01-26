import Preload from './classes/states/Preload';
import Main from './classes/states/Main';
import Controls from './classes/states/Controls';
import Won from './classes/states/Won';
import Menu from './classes/states/Menu';
import TryOut from './classes/states/TryOut';
import GameOver from './classes/states/GameOver';

const init = () => {
	let game_wrapper = document.querySelector('.game-wrapper');
	let game = new Phaser.Game(850,550, Phaser.AUTO, game_wrapper);
	game.state.add('Main', Main, false);
	game.state.add('GameOver', GameOver, false);
	game.state.add('Menu', Menu, false);
	game.state.add('Controls', Controls, false);
	game.state.add('Won', Won, false);
	game.state.add('TryOut', TryOut, false);
	game.state.add('Preload', Preload, false);
	game.state.start('Preload');

	document.addEventListener('mousemove', e => {
		parallaxImages(e.x, e.y);
	})

	// document.addEventListener('scroll', e => {
	// 	console.log(window.pageYOffset);
	// 	parallaxImagesScroll(window.pageYOffset);
	// })
}

const parallaxImages = (x,y) => {
	let images = document.querySelectorAll('#parallax');

	images[0].style.left = `${-x/20 + 0}px`;
	images[0].style.top = `${-y/20 + 40}px`;

	images[1].style.right = `${x/10 + 50}px`;
	images[1].style.top = `${-y/10 + (-30)}px`;

	images[2].style.right = `${x/60 + (-150)}px`;
	images[2].style.bottom = `${y/60 + (-200)}px`;

	images[3].style.left = `${-x/60 + (0)}px`;
	images[3].style.bottom = `${y/60 + (-150)}px`;

	images[4].style.right = `${x/60 + (-30)}px`;
	images[4].style.bottom = `${y/60 + (-120)}px`;

	images[5].style.left = `${-x/40 + (-120)}px`;
	images[5].style.bottom = `${y/40 + (-100)}px`;

	images[6].style.right = `${x/20 + (-60)}px`;
	images[6].style.bottom = `${y/20 + (-180)}px`;
}

const parallaxImagesScroll = y => {
	console.log('yolo');
	let images = document.querySelectorAll('#parallax');

	// images[0].style.left = `${-x/20 + 0}px`;
	images[0].style.top = `${-y/20 + 40}px`;
	console.log(images[0].style.top);

	// images[1].style.right = `${x/10 + 50}px`;
	images[1].style.top = `${-y/10 + (-30)}px`;

	// images[2].style.right = `${x/60 + (-150)}px`;
	images[2].style.bottom = `${y/60 + (-200)}px`;

	// images[3].style.left = `${-x/30 + (-50)}px`;
	images[3].style.bottom = `${y/30 + (-130)}px`;

	console.log();
}

init();
