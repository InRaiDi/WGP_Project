module scenes {
    export class GameOverScene extends objects.Scene {
        // Variables
        private gameOverLabel: objects.Label;
        private backButton: objects.Button;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }

        // Method
        public Start():void {
            // Initialize our variables
            this.gameOverLabel = new objects.Label(
                "Game Over!", "20px", "Arial", "#00ff00", 320, 240, true);
                console.log("GAME OVER Scene Start");
            this.backButton = new objects.Button(this.assetManager, "backButton", 250, 340);
            this.backButton.scaleX -= 0.5;
            this.backButton.scaleY -= 0.5;
            this.Main();
        }

        public Update():void {}

        public Main():void {
            this.addChild(this.gameOverLabel);
            console.log("GAME OVER Scene Main");
            this.addChild(this.backButton);

            this.backButton.on("click", this.backButtonClick);
        }

        private backButtonClick():void {
            objects.Game.currentScene = config.Scene.GAME;
        }
    }
}