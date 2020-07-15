module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private whitehouse: objects.Background;
        private player:objects.Player;
        private enemies:objects.Enemy[];
        private enemyNum:number;
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }

        public Start():void {
            console.log("Play Scene: Game");
            // Inintialize our variables
            this.background = new objects.Background(this.assetManager, "background");
            this.whitehouse = new objects.Background(this.assetManager, "whitehouse");
            this.player = new objects.Player(this.assetManager);
            this.enemies = new Array<objects.Enemy>();
            this.enemyNum = 5;
            for(let i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy(this.assetManager);
            }

            this.Main();
        }

        public Update():void {
            this.player.Update();
            this.enemies.forEach(e => {
                e.Update();
            })
        }

        public Main():void {
            this.background.scaleX *= 1.8;
            this.background.scaleY *= 1.8;
            this.whitehouse.x = 320; this.whitehouse.y = 860;
            this.whitehouse.scaleX = 0.25; this.whitehouse.scaleY = 0.25;
            this.addChild(this.background);
            this.addChild(this.whitehouse);
            this.addChild(this.player);
            this.enemies.forEach(e => {
                this.addChild(e);
            })
        }

    }
}