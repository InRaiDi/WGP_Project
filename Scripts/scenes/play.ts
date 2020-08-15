module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private whitehouse: objects.WhiteHouse;
        private player:objects.Player;
        private enemies:objects.Enemy[];
        private enemyNum:number;
        private nextButton: objects.Button;
        private backgroundMusic:createjs.AbstractSoundInstance;
        private scoreBoard:managers.Scoreboard;
        private isExploding:boolean = false;
        private explosion:objects.Explosion;
        private bullet:objects.Bullet;

        // Constructor
        constructor() {
            super();

            this.Start();
        }

        public Start():void {
            
            // Inintialize our variables
            this.background = new objects.Background("background");
            this.whitehouse = new objects.WhiteHouse();
            this.nextButton = new objects.Button("nextButton", 600, 60);
            this.nextButton.scaleX -= 0.8;
            this.nextButton.scaleY -= 0.8;
            this.player = new objects.Player();
            this.bullet = new objects.Bullet();
            this.enemies = new Array<objects.Enemy>();
            this.enemyNum = 5;
            for(let i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy();
            }
            this.scoreBoard = new managers.Scoreboard();
            this.scoreBoard.x = 10;
            this.scoreBoard.y = 10;
            // Instantiate Sound
            createjs.Sound.stop();
            this.backgroundMusic = createjs.Sound.play("play_music");
            this.backgroundMusic.loop = -1; // Loop infinitely
            this.backgroundMusic.volume = 0.2;

            this.Main();
        }

        public Update():void {
            this.player.Update();
            this.bullet.Update();
            this.enemies.forEach(e => {
                e.Update();
                this.player.isDead = managers.Collision.Check(this.player, e);

                if(this.player.isDead && !this.isExploding)
                {
                    // If the player is dead and hasn't exploded...explode!
                    // Disable music
                    this.backgroundMusic.stop();

                    // Create the explosion
                    this.explosion = new objects.Explosion(this.player.x, this.player.y);
                    this.explosion.on("animationend", this.handleExplosion);
                    this.addChild(this.explosion);
                    this.isExploding = true;
                    this.removeChild(this.player);
                }
                this.bullet.isHit = managers.Collision.Check(this.bullet, e);
                if(this.bullet.isHit){
                    console.log("Enemy hit");
                }
                
            })
            
        }

        public Main():void {
            this.background.scaleX *= 1.8;
            this.background.scaleY *= 1.8;
            this.whitehouse.x = 340; this.whitehouse.y = 660;
            this.whitehouse.scaleX = 0.25; this.whitehouse.scaleY = 0.25;
            this.addChild(this.background);
            this.addChild(this.whitehouse);
            this.addChild(this.nextButton);
            this.addChild(this.player);
            this.nextButton.on("click", this.nextButtonClick);
            this.enemies.forEach(e => {
                this.addChild(e);
            });
            this.addChild(this.scoreBoard);
        }

        private handleExplosion() {
            this.stage.removeChild(this.explosion);
            this.isExploding = false;
            objects.Game.currentScene = config.Scene.OVER;
        }

        private nextButtonClick():void {
            // Change from START to GAME scene
            objects.Game.currentScene = config.Scene.OVER;
        }

    }
}