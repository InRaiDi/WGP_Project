module objects {
    export class Background extends createjs.Bitmap {
        // Variables
        // Constructor
        constructor(imageString: string) {
            super(objects.Game.assetManager.getResult(imageString));

            this.Start();
        }

        public Start():void {
            this.Reset();
        }

        public Reset():void {
            // Reset my background y position.
            console.log("RESET!");
        }
    }
}