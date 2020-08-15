(function () {
    // Global Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var assetManager;
    var assetManifest;
    var keyboardManager;
    var textureAtlasData;
    var textureAtlas;
    textureAtlasData = {
        "images": [
            "./Images/Sprites/textureAtlas2.png"
        ],
        "framerate": 20,
        "frames": [
            [0, 0, 300, 300, 0, 0, 0],
            [300, 0, 40, 40, 0, 0, 0],
            [340, 0, 100, 100, 0, 0, 0],
            [440, 0, 100, 100, 0, 0, 0],
            [540, 0, 100, 100, 0, 0, 0],
            [640, 0, 100, 100, 0, 0, 0],
            [740, 0, 100, 100, 0, 0, 0],
            [840, 0, 100, 100, 0, 0, 0],
            [940, 0, 300, 300, 0, 0, 0],
            [0, 300, 100, 100, 0, 0, 0],
            [100, 300, 1122, 355, 0, 0, 0]
        ],
        "animations": {
            "backButton": { "frames": [0] },
            "bullet": { "frames": [1] },
            "explosion": { "frames": [2, 5] },
            "enemy": { "frames": [6] },
            "enemy2": { "frames": [7] },
            "nextButton": { "frames": [8] },
            "player": { "frames": [9] },
            "whitehouse": { "frames": [10] }
        }
    };
    // Store current scene information
    var currentScene;
    var currentState;
    assetManifest = [
        { id: "background", src: "./Images/background.png" },
        { id: "menu_music", src: "./Audio/MainMenu.wav" },
        { id: "play_music", src: "./Audio/PlayScene.wav" },
        { id: "gameover_music", src: "./Audio/GameOverScene.ogg" },
        { id: "collision_music", src: "./Audio/Pop.mp3" }
    ];
    function Init() {
        console.log("Initializing Start");
        textureAtlas = new createjs.SpriteSheet(textureAtlasData);
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }
    function Start() {
        console.log("Starting Application...");
        // Initialize CreateJS
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        // Set up default game states -- State Machine
        objects.Game.stage = stage;
        objects.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;
        keyboardManager = new managers.Keyboard;
        objects.Game.keyboardManager = keyboardManager;
        objects.Game.assetManager = assetManager;
        objects.Game.textureAtlas = textureAtlas;
        Main();
    }
    function Update() {
        // Has my state changed since the last check?
        if (currentState != objects.Game.currentScene) {
            console.log("Changing scenes to " + objects.Game.currentScene);
            Main();
        }
        currentScene.Update();
        stage.update();
    }
    function Main() {
        console.log("Game Start");
        // Finite State Machine
        switch (objects.Game.currentScene) {
            case config.Scene.START:
                stage.removeAllChildren();
                currentScene = new scenes.StartScene();
                stage.addChild(currentScene);
                break;
            case config.Scene.GAME:
                stage.removeAllChildren();
                currentScene = new scenes.PlayScene();
                stage.addChild(currentScene);
                break;
            case config.Scene.OVER:
                console.log("GAME OVER Case");
                stage.removeAllChildren();
                currentScene = new scenes.GameOverScene();
                stage.addChild(currentScene);
                break;
        }
        currentState = objects.Game.currentScene;
        objects.Game.currentSceneObject = currentScene;
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map