(function() {

    // Global Game Variables
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;

    let assetManager:createjs.LoadQueue;
    let assetManifest: any[];

    // Store current scene information
    let currentScene:objects.Scene;
    let currentState:number;

    assetManifest = [
        {id:"background", src:"./Images/background.png"},
        {id:"whitehouse", src:"./Images/WhiteHouse.png"},
        {id: "player", src: "./Images/guard.png"},
        {id: "enemy", src: "./Images/zombie.png"},
        {id: "nextButton", src: "./Images/nextButton.png"},
        {id: "backButton", src: "./Images/backButton.png"},
        {id:"menu_music", src:"./Audio/MainMenu.wav"},
        {id:"play_music", src:"./Audio/PlayScene.wav"},
        {id:"gameover_music", src:"./Audio/GameOverScene.ogg"}
    ];

    function Init() {
        console.log("Initializing Start");

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
                currentScene = new scenes.StartScene(assetManager);
                stage.addChild(currentScene);
            break;
            case config.Scene.GAME:
                stage.removeAllChildren();
                currentScene = new scenes.PlayScene(assetManager);
                stage.addChild(currentScene);
            break;
            case config.Scene.OVER:
                console.log("GAME OVER Case");
                stage.removeAllChildren();
                currentScene = new scenes.GameOverScene(assetManager);
                stage.addChild(currentScene);
            break;
        }

        currentState = objects.Game.currentScene;
    }

    window.onload = Init;
})();