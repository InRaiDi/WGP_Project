module scenes {
    export class GameOverScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private gameOverLabel: objects.Label;
        private backButton: objects.Button;
        private backgroundMusic:createjs.AbstractSoundInstance;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }

        // Method
        public Start():void {
            // Initialize our variables
             this.background = new objects.Background(this.assetManager, "background");
            this.gameOverLabel = new objects.Label(
                "Game Over!", "20px", "Arial", "#fff", 320, 240, true);
                console.log("GAME OVER Scene Start");
            this.backButton = new objects.Button(this.assetManager, "backButton", 250, 340);
            this.backButton.scaleX -= 0.5;
            this.backButton.scaleY -= 0.5;

                // Instantiate Sound
            createjs.Sound.stop();
            this.backgroundMusic = createjs.Sound.play("gameover_music");
            this.backgroundMusic.loop = -1; // Loop infinitely
            this.backgroundMusic.volume = 0.2;

            this.Main();
        }

        public Update():void {}

        public Main():void {
            this.background.scaleX *= 1.8;
            this.background.scaleY *= 1.8;
            this.addChild(this.background);
            this.addChild(this.gameOverLabel);
          
            this.addChild(this.backButton);

            this.backButton.on("click", this.backButtonClick);
        }

        private backButtonClick():void {
            objects.Game.currentScene = config.Scene.GAME;
        }
    }
}