module objects {
    export class Background extends objects.GameObject {
        // Variables
        // Constructor
        constructor(assetManager:createjs.LoadQueue, imageString:string) {
            super(assetManager, imageString);

            this.Start();
        }

        public Start():void {
            this.Reset();
        }
    }
}