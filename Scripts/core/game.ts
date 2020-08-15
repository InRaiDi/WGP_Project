(function() {

    // Global Game Variables
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;

    let assetManager:createjs.LoadQueue;
    let assetManifest: any[];
    let keyboardManager: managers.Keyboard;

    let textureAtlasData: any;
    let textureAtlas: createjs.SpriteSheet;

    textureAtlasData = {
        "images": [
            "./Images/Sprites/textureAtlas2.png"
        ],
        
        "framerate": 20,
        "frames": [
            [0, 0, 40, 40, 0, 0, 0],
            [40, 0, 100, 100, 0, 0, 0],
            [140, 0, 100, 100, 0, 0, 0],
            [240, 0, 100, 100, 0, 0, 0],
            [340, 0, 100, 100, 0, 0, 0],
            [440, 0, 100, 100, 0, 0, 0],
            [540, 0, 100, 100, 0, 0, 0],
            [640, 0, 100, 100, 0, 0, 0]
        ],
        
        "animations": {
            "bullet": { "frames": [0] },
            "explosion": { "frames": [1, 4] },
            "enemy": { "frames": [5] },
            "enemy2": { "frames": [6] },
            "player": { "frames": [7] }
        },
    };

    // Store current scene information
    let currentScene:objects.Scene;
    let currentState:number;

    assetManifest = [
        {id:"background", src:"./Images/background.png"},
        {id:"whitehouse", src:"./Images/WhiteHouse.png"},
        {id: "nextButton", src: "./Images/nextButton.png"},
        {id: "backButton", src: "./Images/backButton.png"},
        {id:"menu_music", src:"./Audio/MainMenu.wav"},
        {id:"play_music", src:"./Audio/PlayScene.wav"},
        {id:"gameover_music", src:"./Audio/GameOverScene.ogg"},
        {id:"collision_music", src:"./Audio/Pop.mp3"}
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
        if(currentState != objects.Game.currentScene)
        {
            console.log("Changing scenes to " + objects.Game.currentScene);
            Main();
        }

        currentScene.Update();
        stage.update();
    }


    function Main() {
       console.log("Game Start");

        // Finite State Machine
        switch(objects.Game.currentScene)
        {
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
    }

    window.onload = Init;
})();