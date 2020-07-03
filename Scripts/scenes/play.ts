module scenes {
    export class PlayScene extends objects.Scene {
        // Variables

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }

        public Start():void {
            console.log("Play scene start");
            // Inintialize our variables

            this.Main();
        }

        public Update():void {
        }

        public Main():void {

        }

    }
}