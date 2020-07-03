module objects {
    export class WhiteHouse extends objects.GameObject {
        // Variables
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager, "whitehouse");
            this.Start();
            
        }

        public Start():void {
            this.x = 320;
            this.y = 860;

            this.scaleX = 0.25;
            this.scaleY = 0.25;
            this.Reset();
        }
    }
}