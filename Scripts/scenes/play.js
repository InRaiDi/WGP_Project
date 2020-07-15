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
        function PlayScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        PlayScene.prototype.Start = function () {
            console.log("Play Scene: Game");
            // Inintialize our variables
            this.background = new objects.Background(this.assetManager, "background");
            this.whitehouse = new objects.Background(this.assetManager, "whitehouse");
            this.nextButton = new objects.Button(this.assetManager, "nextButton", 600, 20);
            this.nextButton.scaleX -= 0.8;
            this.nextButton.scaleY -= 0.8;
            this.player = new objects.Player(this.assetManager);
            this.enemies = new Array();
            this.enemyNum = 5;
            for (var i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy(this.assetManager);
            }
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            this.player.Update();
            this.enemies.forEach(function (e) {
                e.Update();
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