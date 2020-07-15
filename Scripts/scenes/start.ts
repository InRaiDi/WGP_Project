module scenes {
    export class StartScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private startButton: objects.Button;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }
        // Methods
        public Start():void {
            // Initialize our objects for this scene
            this.background = new objects.Background(this.assetManager, "background");
            
            // NOTE: PreloadJS manifest id
            this.startButton = new objects.Button(this.assetManager, "nextButton", 270, 300);
            this.startButton.scaleX -= 0.5;
            this.startButton.scaleY -= 0.5;
            this.Main();
        }

        public Update():void { }

        public Main():void {
            // Add items to the scene
            // Add items to the scene
            this.background.scaleX *= 1.8;
            this.background.scaleY *= 1.8;
            this.addChild(this.background);
            this.addChild(this.startButton);
            this.startButton.on("click", this.startButtonClick);
        }

        private startButtonClick():void {
            // Change from START to GAME scene
            objects.Game.currentScene = config.Scene.GAME;
        }
    }
}