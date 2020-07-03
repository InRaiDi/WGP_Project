module objects {
    export class Background extends objects.GameObject {
        // Variables
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager, "background");
            this.Start();
        }

        public Start():void {
            this.Reset();
        }
    }
}