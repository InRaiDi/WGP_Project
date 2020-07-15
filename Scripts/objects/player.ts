module objects {
    export class Player extends objects.GameObject {
        // Variables
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager, "player");
            this.Start();
        }

        public Start():void {
            this.x = 320;
            this.y = 570;
        }
        public Update():void {
            this.Move();
            this.CheckBound();
        }
        public Reset():void {}
        public Move():void {       
            this.x = objects.Game.stage.mouseX;
        }
        public CheckBound():void {
            if(this.x >= 640 - this.halfW)
            {
                this.x = 640 - this.halfW;
            }
            // Left boundary
            if(this.x <= this.halfW) {
                this.x = this.halfW;
            }
        }
    }
}