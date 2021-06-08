class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }
  
  preload() {
    this.load.audio('laser', 'laser.mp3'); 
    this.load.audio('death', 'death.mp3'); 
    this.load.image('boba', 'copy_321958841.png');
    this.load.image('stormtrooper', 'stormtrooper.png');
    this.load.image('scouttrooper', 'scouttrooper.png');
    this.load.image('platforms', 'terrain.png');
    this.load.image('platforms2', 'terrain2.png');
    this.load.image('fireball', 'fireball.png');
    this.load.image('laser', 'laser.png');
    this.load.image('deathstar', 'deathstar.png');

  }
 
  create() {
    
     this.add.image(200,300 , 'deathstar').setScale(1.6);

     gameState.player = this.physics.add.sprite(80, 500, 'boba').setScale(.5);
      
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

    const fireball = this.physics.add.staticGroup();

     fireball.create(10, 10, 'fireball').setScale(0.1, .1).refreshBody();
    fireball.create(10, 40, 'fireball').setScale(0.1, .1).refreshBody();

    fireball.create(10, 70, 'fireball').setScale(0.1, .1).refreshBody();

    fireball.create( 10, 100, 'fireball').setScale(0.1, .1).refreshBody();
    fireball.create(10, 130, 'fireball').setScale(0.1, .1).refreshBody();
    fireball.create(10, 160, 'fireball').setScale(0.1, .1).refreshBody();
    fireball.create(10, 190, 'fireball').setScale(0.1, .1).refreshBody();
    fireball.create(10, 220, 'fireball').setScale(0.1, .1).refreshBody();
    fireball.create(10, 250, 'fireball').setScale(0.1, .1).refreshBody();
    fireball.create(10, 280, 'fireball').setScale(0.1, .1).refreshBody();
    fireball.create(10, 310, 'fireball').setScale(0.1, .1).refreshBody();
    fireball.create(10, 340, 'fireball').setScale(0.1, .1).refreshBody();
    fireball.create(10, 370, 'fireball').setScale(0.1, .1).refreshBody();
    fireball.create(10, 400, 'fireball').setScale(0.1, .1).refreshBody();
    fireball.create(10, 430, 'fireball').setScale(0.1, .1).refreshBody();
    fireball.create(10, 460, 'fireball').setScale(0.1, .1).refreshBody();
    fireball.create(10, 490, 'fireball').setScale(0.1, .1).refreshBody();
    fireball.create(10, 520, 'fireball').setScale(0.1, .1).refreshBody();
    fireball.create(10, 550, 'fireball').setScale(0.1, .1).refreshBody();
   this.physics.add.collider(gameState.player, fireball, () => {
   setPlatformsLoop.destroy();
	 this.scene.stop('GameScene');
	 this.scene.start('EndScene');
   let soundSample3 = this.sound.add('death');
   soundSample3.play();
  });
   
     gameState.player.setCollideWorldBounds(true);

    this.physics.add.collider(gameState.player, platforms);

    gameState.cursors = this.input.keyboard.createCursorKeys();

    gameState.enemy = this.physics.add.sprite(400, 510, 'stormtrooper').setScale(.8);

    gameState.enemy.setCollideWorldBounds(true);
   
    
   this.physics.add.collider(gameState.enemy, platforms);

   gameState.enemy.move = this.tweens.add({
   targets: gameState.enemy,
      x: 60,
      ease: 'Linear',
      duration: 5000,
      repeat: -1,
      yoyo: true
  });
   function setShoot() {
     const laser = this.physics.add.sprite(gameState.enemy.x - 40, gameState.enemy.y, 'laser').setScale(.5);
     laser.body.allowGravity = false;
     laser.body.immovable = true;


    //to continue shooting
    //laser.body.velocity.x = 400;
    //laser.body.velocity.y = -200;
    /*
    if (gameState.player.y + 30 >= gameState.enemy.y &&  gameState.player.y - 30 <= gameState.enemy.y) {
     if (gameState.player.x >= gameState.enemy.x) {
     laser.body.velocity.x = 300;
     laser.body.velocity.y = 0;
     } else if (gameState.player.x <= gameState.enemy.x) {
     laser.body.velocity.x = -300;
     laser.body.velocity.y = 0;
      }
    } else if (gameState.player.x + 120 >= gameState.enemy.x &&  gameState.player.x - 120 <= gameState.enemy.x) {
     laser.body.velocity.x = 0;
     laser.body.velocity.y = -400;
    } else if (gameState.player.y + 70 >= gameState.enemy.y &&  gameState.player.y + 30 <= gameState.enemy.y) {
      if (gameState.player.x <= gameState.enemy.x) {
     laser.body.velocity.x = -400;
     laser.body.velocity.y = -200;
     } else if (gameState.player.x >= gameState.enemy.x) {
     laser.body.velocity.x = 400;
     laser.body.velocity.y = -200;
      }
    } else if (gameState.player.y + 140 >= gameState.enemy.y &&  gameState.player.y + 70 <= gameState.enemy.y) {
      if (gameState.player.x <= gameState.enemy.x) {
     laser.body.velocity.x = -400;
     laser.body.velocity.y = -400;
     } else if (gameState.player.x >= gameState.enemy.x) {
     laser.body.velocity.x = 400;
     laser.body.velocity.y = -400;
      }
    } else if (gameState.player.y + 400 >= gameState.enemy.y &&  gameState.player.y + 140 <= gameState.enemy.y) {
      if (gameState.player.x <= gameState.enemy.x) {
     laser.body.velocity.x = -200;
     laser.body.velocity.y = -400;
     } else if (gameState.player.x >= gameState.enemy.x) {
     laser.body.velocity.x = 200;
     laser.body.velocity.y = -400;
    }  //error here
    } else if (gameState.player.y + 450 >= gameState.enemy.y &&  gameState.player.y + 400 <= gameState.enemy.y) {
      if (gameState.player.x <= gameState.enemy.x) {
     laser.body.velocity.x = -50;
     laser.body.velocity.y = -400;
     } else if (gameState.player.x >= gameState.enemy.x) {
     laser.body.velocity.x = 50;
     laser.body.velocity.y = -400;
    }
      
    } else if (gameState.player.y + 600 >= gameState.enemy.y &&  gameState.player.y + 450 <= gameState.enemy.y) {
      if (gameState.player.x <= gameState.enemy.x) {
     laser.body.velocity.x = -95;
     laser.body.velocity.y = -400;
     } else if (gameState.player.x >= gameState.enemy.x) {
     laser.body.velocity.x = 95;
     laser.body.velocity.y = -400;
    } } else {
      if (gameState.player.x <= gameState.enemy.x) {
       const random = Math.ceil(Math.random() * 600) + 10;
       laser.body.velocity.x = -random;
       laser.body.velocity.y = -random;
     } else if (gameState.player.x >= gameState.enemy.x) {
         const random = Math.ceil(Math.random() * 600) + 10;
         laser.body.velocity.x = random;
         laser.body.velocity.y = -random;
    }
    } */
    
    const destx = gameState.player.x;
    const desty = gameState.player.y;
    const speed = 100;
    const startx = gameState.enemy.x;
    const starty = gameState.enemy.y;

    const dx = destx - startx;
    const dy = desty - starty;
    const totalDistance = Math.sqrt(dx * dx + dy + dy);
    const percent = speed / totalDistance;
    laser.body.velocity.x = percent * dx;
    laser.body.velocity.y = percent * dy;
    
    this.physics.add.collider(gameState.player, laser, () => {
    setLaserLoop.destroy();
	  this.scene.stop('GameScene');
	  this.scene.start('EndScene');
    let soundSample3 = this.sound.add('death');
   soundSample3.play();
  });
   
    let soundSample = this.sound.add('laser');
    soundSample.play();

   }
    //else if (gameState.player.x <= 150 && gameState.player.y <= 250 && gameState.enemy.x <= 250) {
   // laser.body.velocity.x = -500;
   // laser.body.velocity.y = -1000;
   // } else if (gameState.player.x <= 300 && gameState.player.y <= 250) {
   // laser.body.velocity.x = -500;
   // laser.body.velocity.y = -500;
   // }
   //to take out
  
    


   const setLaserLoop = this.time.addEvent({
    delay: 2000,
    callback: setShoot,
    callbackScope: this,
    loop: true,
  
 });
         gameState.scoreText = this.add.text(200, 10, 'Score: 0', { fontSize: '15px', fill: '#808080' });

    //const platforms2 = this.physics.add.sprite(300, 100, 'platforms2');
  //const platforms2 = this.physics.add.staticGroup();
    //const platforms2 = this.physics.add.sprite(300, 100, 'platforms2');
 function setPlatforms () {

    const yCoord = Math.random() * 580 - 130;
    const platforms2 = this.physics.add.sprite(500, yCoord, 'platforms2');
    platforms2.body.allowGravity = false;
    platforms2.body.immovable = true;
    platforms2.body.velocity.x = -100;
    //platforms2.create(440, yCoord, 'platforms2');
    //this.physics.add.sprite(300, 100, 'platforms2');
    //platforms2.setCollideWorldBounds(true);
    //reset
  this.physics.add.collider(gameState.player, platforms2, () => {
   setPlatformsLoop.destroy();
	 this.scene.stop('GameScene');
	 this.scene.start('EndScene');
   let soundSample3 = this.sound.add('death');
   soundSample3.play();
  });
  this.physics.add.collider(fireball, platforms2, () => {
   platforms2.destroy();
   //need to add scoring method
   gameState.score += 10;
    gameState.scoreText.setText(`Score: ${gameState.score}`);
  });
}
 //function setStormtrooper () {
    //const yCoord = Math.random() * 580;
    //platforms2.create(420, 550, 'stormtrooper');
 //}

  const setPlatformsLoop = this.time.addEvent({
    delay: 500,
    callback: setPlatforms,
    callbackScope: this,
    loop: true,
 });

 //const setStormtrooperLoop = this.time.addEvent({
    //delay: 900,
    //callback: setStormtrooper,
    //callbackScope: this,
   // loop: true,
 //});

//scoring method
//this.physics.add.collider(platforms2, fireball, function (platforms2) {
    //platforms2.destroy();
    //gameState.score += 10;
    //gameState.scoreText.setText(`Score: ${gameState.score}`);
//});

 // this.physics.add.collider(stormtrooper, fireball, function (stormtrooper) {
  //  stormtrooper.destroy();
    //gameState.score += 10;
    //gameState.scoreText.setText(`Score: ${gameState.score}`);
 // });
  
  

  

 this.physics.add.collider(gameState.player, gameState.enemy, () => {
   setPlatformsLoop.destroy();
	 this.scene.stop('GameScene');
	 this.scene.start('EndScene');
   let soundSample3 = this.sound.add('death');
   soundSample3.play();
  });

  //this.physics.add.collider(gameState.player, stormtrooper, () => {
  //setStormtrooper.destroy();
	// this.scene.stop('GameScene');
	// this.scene.start('EndScene');
  //});
}

update() {
	/*
    if (gameState.cursors.left.isDown) {
			gameState.player.setVelocityX(-300);
		} else if (gameState.cursors.right.isDown) {
			gameState.player.setVelocityX(300);
		} else if (gameState.cursors.up.isDown){
      gameState.player.setVelocityY(-300);
    } else if (gameState.cursors.down.isDown) {
	    gameState.player.setVelocityY(300);
    } else {
			gameState.player.setVelocityY(0);
		}
  } 
  */
	let keyA;
let keyS;
let keyD;
let keyW;
	keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
	
	if(keyA.isDown) {
gameState.player.setVelocityX(-300);
} else if(keyS.isDown) {
    gameState.player.setVelocityY(300);
} else if(keyD.isDown) {
  gameState.player.setVelocityX(300);
} else if(keyW.isDown) {
   gameState.player.setVelocityY(-300);
}
}
