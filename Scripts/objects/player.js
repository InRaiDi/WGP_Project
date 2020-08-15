var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        // Constructor
        function Player() {
            var _this = _super.call(this, "player") || this;
            _this.bulletCount = 0;
            _this.Start();
            return _this;
        }
        Player.prototype.Start = function () {
            this.x = 320;
            this.y = 570;
            this.isDead = false;
            this.Bullets = new Array();
        };
        Player.prototype.Update = function () {
            this.Move();
            this.CheckBound();
            this.BulletFire();
            this.Bullets.forEach(function (bullet) {
                bullet.Update();
            });
        };
        Player.prototype.Reset = function () { };
        Player.prototype.Move = function () {
            //this.x = objects.Game.stage.mouseX;
            if (objects.Game.keyboardManager.moveLeft) {
                this.x -= 7.5;
            }
            if (objects.Game.keyboardManager.moveRight) {
                this.x += 7.5;
            }
        };
        Player.prototype.CheckBound = function () {
            if (this.x >= 640 - this.halfW) {
                this.x = 640 - this.halfW;
            }
            // Left boundary
            if (this.x <= this.halfW) {
                this.x = this.halfW;
            }
        };
        Player.prototype.BulletFire = function () {
            var ticker = createjs.Ticker.getTicks();
            if (!this.isDead && objects.Game.keyboardManager.shoot && (ticker % 10 == 0)) {
                this.bulletSpawn = new math.Vec2(this.x, this.y - this.halfH);
                var bullet = new objects.Bullet();
                bullet.x = this.bulletSpawn.x;
                bullet.y = this.bulletSpawn.y;
                this.Bullets[this.bulletCount] = bullet;
                objects.Game.currentSceneObject.addChild(bullet);
                this.bulletCount++;
            }
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map