module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }

        public Start():void {
            console.log("Play Scene: Game");
            // Inintialize our variables
            this.background = new objects.Background(this.assetManager);

            this.Main();
        }

        public Update():void {
        }

        public Main():void {
            this.addChild(this.background);
        }

    }
}