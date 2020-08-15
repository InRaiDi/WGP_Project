module objects {
    export class Player extends objects.GameObject {
        // Variables
        

        private bulletSpawn:math.Vec2;
        public Bullets:objects.Bullet[];
        public bulletCount:number = 0;

        public isDead:boolean;

        // Constructor
        constructor() {
            super("player");
            this.Start();
        }

        public Start():void {
            this.x = 320;
            this.y = 570;
            this.isDead = false;
            this.Bullets = new Array<objects.Bullet>();
        }
        public Update():void {
            this.Move();
            this.CheckBound();
            this.BulletFire();

            this.Bullets.forEach(bullet => {
                bullet.Update();
            });
        }
        public Reset():void {}
        public Move():void {       
            //this.x = objects.Game.stage.mouseX;
            if(objects.Game.keyboardManager.moveLeft)
            {
                this.x -= 7.5;
            }
            if(objects.Game.keyboardManager.moveRight)
            {
                this.x += 7.5;
            }
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
        public BulletFire():void {

            let ticker:number = createjs.Ticker.getTicks();

            if(!this.isDead && objects.Game.keyboardManager.shoot && (ticker % 10 == 0))
            {
                this.bulletSpawn = new math.Vec2(this.x, this.y - this.halfH);
                let bullet = new objects.Bullet();
                bullet.x = this.bulletSpawn.x;
                bullet.y = this.bulletSpawn.y;
                this.Bullets[this.bulletCount] = bullet;
                objects.Game.currentSceneObject.addChild(bullet);
                this.bulletCount++;
            }
        }
    }
}