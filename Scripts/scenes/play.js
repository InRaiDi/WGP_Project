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
var scenes;
(function (scenes) {
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        // Constructor
        function PlayScene() {
            var _this = _super.call(this) || this;
            _this.isExploding = false;
            _this.Start();
            return _this;
        }
        PlayScene.prototype.Start = function () {
            // Inintialize our variables
            this.background = new objects.Background("background");
            this.whitehouse = new objects.WhiteHouse();
            this.nextButton = new objects.Button("nextButton", 600, 60);
            this.nextButton.scaleX -= 0.8;
            this.nextButton.scaleY -= 0.8;
            this.player = new objects.Player();
            this.bullet = new objects.Bullet();
            this.enemies = new Array();
            this.enemyNum = 5;
            for (var i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy();
            }
            this.scoreBoard = new managers.Scoreboard();
            this.scoreBoard.x = 10;
            this.scoreBoard.y = 10;
            // Instantiate Sound
            createjs.Sound.stop();
            this.backgroundMusic = createjs.Sound.play("play_music");
            this.backgroundMusic.loop = -1; // Loop infinitely
            this.backgroundMusic.volume = 0.2;
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            var _this = this;
            this.player.Update();
            this.bullet.Update();
            this.enemies.forEach(function (e) {
                e.Update();
                _this.player.isDead = managers.Collision.Check(_this.player, e);
                if (_this.player.isDead && !_this.isExploding) {
                    // If the player is dead and hasn't exploded...explode!
                    // Disable music
                    _this.backgroundMusic.stop();
                    // Create the explosion
                    _this.explosion = new objects.Explosion(_this.player.x, _this.player.y);
                    _this.explosion.on("animationend", _this.handleExplosion);
                    _this.addChild(_this.explosion);
                    _this.isExploding = true;
                    _this.removeChild(_this.player);
                }
                _this.bullet.isHit = managers.Collision.Check(_this.bullet, e);
                if (_this.bullet.isHit) {
                    console.log("Enemy hit");
                }
            });
        };
        PlayScene.prototype.Main = function () {
            var _this = this;
            this.background.scaleX *= 1.8;
            this.background.scaleY *= 1.8;
            this.whitehouse.x = 340;
            this.whitehouse.y = 660;
            this.whitehouse.scaleX = 0.25;
            this.whitehouse.scaleY = 0.25;
            this.addChild(this.background);
            this.addChild(this.whitehouse);
            this.addChild(this.nextButton);
            this.addChild(this.player);
            this.nextButton.on("click", this.nextButtonClick);
            this.enemies.forEach(function (e) {
                _this.addChild(e);
            });
            this.addChild(this.scoreBoard);
        };
        PlayScene.prototype.handleExplosion = function () {
            this.stage.removeChild(this.explosion);
            this.isExploding = false;
            objects.Game.currentScene = config.Scene.OVER;
        };
        PlayScene.prototype.nextButtonClick = function () {
            // Change from START to GAME scene
            objects.Game.currentScene = config.Scene.OVER;
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map