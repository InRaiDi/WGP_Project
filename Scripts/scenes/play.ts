module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private whitehouse: objects.WhiteHouse;
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }

        public Start():void {
            console.log("Play Scene: Game");
            // Inintialize our variables
            this.background = new objects.Background(this.assetManager);
            this.whitehouse = new objects.WhiteHouse(this.assetManager, 0, 0);

            this.Main();
        }

        public Update():void {
        }

        public Main():void {
            this.background.scaleX *= 1.8;
            this.background.scaleY *= 1.8;
            this.addChild(this.background);
            this.addChild(this.whitehouse);
        }

    }
}