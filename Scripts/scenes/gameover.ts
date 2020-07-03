module scenes {
    export class GameOverScene extends objects.Scene {
        // Variables

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }

        // Method
        public Start():void {
            // Initialize our variables
            this.Main();
        }

        public Update():void {}

        public Main():void {
        }
    }
}