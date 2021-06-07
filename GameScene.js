class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }
  
  preload() {
     
    this.load.image('boba', 'copy_321958841.png');
    this.load.image('stormtrooper', 'stormtrooper.png');
    this.load.image('scouttrooper', 'scouttrooper.png');
    this.load.image('platforms', 'terrain.png');
    this.load.image('platforms2', 'terrain2.png');
  }

  create() {
    
    gameState.player = this.physics.add.sprite(50, 500, 'boba').setScale(.6);
      
    const platforms = this.physics.add.staticGroup();
    
    platforms.create(420, 590, 'platforms').setScale(2, .6).refreshBody();
    platforms.create(380, 590, 'platforms').setScale(2, .6).refreshBody();
    platforms.create(360, 590, 'platforms').setScale(2, .6).refreshBody();
    platforms.create( 300, 590, 'platforms').setScale(2, .6).refreshBody();
    platforms.create(260, 590, 'platforms').setScale(2, .6).refreshBody();
    platforms.create(240, 590, 'platforms').setScale(2, .6).refreshBody();
    platforms.create(180, 590, 'platforms').setScale(2, .6).refreshBody();
    platforms.create(140, 590, 'platforms').setScale(2, .6).refreshBody();
    platforms.create(120, 590, 'platforms').setScale(2, .6).refreshBody();
    platforms.create(60, 590, 'platforms').setScale(2, .6).refreshBody();
    platforms.create(20, 590, 'platforms').setScale(2, .6).refreshBody();
    
    gameState.player.setCollideWorldBounds(true);

    this.physics.add.collider(gameState.player, platforms);

    gameState.cursors = this.input.keyboard.createCursorKeys();

    
    const troopers = this.physics.add.group();

    const troopersList = ['stormtrooper', 'scouttrooper'];

function setPlatforms() {
  for (let i = 0; i < 10; i++) {
    let platPositions = [];
     let randomPlatformsX = Math.random() * 420 + 1;
     let randomPlatformsY = Math.random() * 590 - 30;
     platPositions.push({ x: randomPlatformsX, y: randomPlatformsY });
     platPositions.forEach(plat => {
      platforms.create(plat.x, plat.y, 'platforms2');
     });
  
     }
}
setPlatforms();
   
}

  update() {
    if (gameState.cursors.left.isDown) {
			gameState.player.setVelocityX(-160);
		} else if (gameState.cursors.right.isDown) {
			gameState.player.setVelocityX(160);
		} else if (gameState.cursors.up.isDown){
      gameState.player.setVelocityY(-160)
    } else {
			gameState.player.setVelocityX(0);
		}
  }

  
 


  
}
