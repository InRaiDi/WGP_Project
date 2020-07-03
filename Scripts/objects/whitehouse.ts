module objects {
    export class WhiteHouse extends objects.GameObject {
        // Variables
        // Constructor
        constructor(assetManager:createjs.LoadQueue, x: number = 0, y:number = 0) {
            super(assetManager, "whitehouse");
            this.Start();
            
        }

        public Start():void {
            this.x = 320;
            this.y = 700;

            this.scaleX = 0.25;
            this.scaleY = 0.25;
        }
    }
}