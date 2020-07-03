module objects {
    export class WhiteHouse extends objects.GameObject {
        // Variables
        // Constructor
        constructor(assetManager:createjs.LoadQueue, x: number = 0, y:number = 0) {
            super(assetManager, "whitehouse");
            this.x = x;
            this.y = y;
            this.Start();
            
        }

        public Start():void {
            this.Reset();
        }
    }
}