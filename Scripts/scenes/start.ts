module scenes {
    export class StartScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private startButton: objects.Button;
        private backgroundMusic: createjs.AbstractSoundInstance;

        // Constructor
        constructor() {
            super();
            this.Start();
        }
        // Methods
        public Start():void {
            // Initialize our objects for this scene
            this.background = new objects.Background("background");
            
            // NOTE: PreloadJS manifest id
            this.startButton = new objects.Button("nextButton", 340, 390);
            this.startButton.scaleX -= 0.7;
            this.startButton.scaleY -= 0.7;

            // Instantiate Sound
            this.backgroundMusic = createjs.Sound.play("menu_music");
            this.backgroundMusic.loop = -1;
            this.backgroundMusic.volume = 0.2;


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