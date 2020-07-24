module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private whitehouse: objects.Background;
        private player:objects.Player;
        private enemies:objects.Enemy[];
        private enemyNum:number;
        private nextButton: objects.Button;
        private backgroundMusic:createjs.AbstractSoundInstance;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }

        public Start():void {
            
            // Inintialize our variables
            this.background = new objects.Background(this.assetManager, "background");
            this.whitehouse = new objects.Background(this.assetManager, "whitehouse");
            this.nextButton = new objects.Button(this.assetManager, "nextButton", 600, 20);
            this.nextButton.scaleX -= 0.8;
            this.nextButton.scaleY -= 0.8;
            this.player = new objects.Player(this.assetManager);
            this.enemies = new Array<objects.Enemy>();
            this.enemyNum = 5;
            for(let i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy(this.assetManager);
            }

            // Instantiate Sound
            createjs.Sound.stop();
            this.backgroundMusic = createjs.Sound.play("play_music");
            this.backgroundMusic.loop = -1; // Loop infinitely
            this.backgroundMusic.volume = 0.2;

            this.Main();
        }

        public Update():void {
            this.player.Update();
            this.enemies.forEach(e => {
                e.Update();
                managers.Collision.Check(this.player, e);
                managers.Collision.Check(this.whitehouse, e);
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
            })
        }

        private nextButtonClick():void {
            // Change from START to GAME scene
            objects.Game.currentScene = config.Scene.OVER;
        }

    }
}