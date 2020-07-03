module scenes {
    export class StartScene extends objects.Scene {
        // Variables

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }
        // Methods
        public Start():void {
            // Initialize our objects for this scene

            this.Main();
        }

        public Update():void {
        }

        public Main():void {
            // Add items to the scene
        }
    }
}