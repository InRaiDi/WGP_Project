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
    var StartScene = /** @class */ (function (_super) {
        __extends(StartScene, _super);
        // Constructor
        function StartScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // Methods
        StartScene.prototype.Start = function () {
            // Initialize our objects for this scene
            this.background = new objects.Background("background");
            // NOTE: PreloadJS manifest id
            this.startButton = new objects.Button("nextButton", 340, 390);
            this.startButton.scaleX -= 0.7;
            this.startButton.scaleY -= 0.7;
            // Instantiate Sound
            this.backgroundMusic = createjs.Sound.play("menu_music");
            this.backgroundMusic.loop = -1;
            this.backgroundMusic.volume = 0.2;
            this.Main();
        };
        StartScene.prototype.Update = function () { };
        StartScene.prototype.Main = function () {
            // Add items to the scene
            // Add items to the scene
            this.background.scaleX *= 1.8;
            this.background.scaleY *= 1.8;
            this.addChild(this.background);
            this.addChild(this.startButton);
            this.startButton.on("click", this.startButtonClick);
        };
        StartScene.prototype.startButtonClick = function () {
            // Change from START to GAME scene
            objects.Game.currentScene = config.Scene.GAME;
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map