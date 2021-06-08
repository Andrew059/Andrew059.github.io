class EndScene extends Phaser.Scene {
  constructor() {
    super({ key: 'EndScene' })
  }

  preload() {
    this.load.image('bobaend', 'bobaend.png');
  }


  create() {
    this.add.image(210, 280,'bobaend').setScale(1.2);
    this.add.text(150, 250, 'Game Over', { fontSize: '20px', fill: '#000000' });
    this.add.text(112, 270, 'Click to Restart', { fontSize: '20px', fill: '#000000' });
    
		
    this.input.on('pointerup', () =>{
      gameState.score = 0;
    	this.scene.stop('EndScene');
	    this.scene.start('StartScene');
    });
    }
  }




