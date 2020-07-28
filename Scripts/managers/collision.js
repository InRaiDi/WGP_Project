var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.Check = function (obj1, obj2) {
            // Create a temp Vec2 object for each object passed in.
            var P1 = new math.Vec2(obj1.x, obj1.y);
            var P2 = new math.Vec2(obj2.x, obj2.y);
            if (math.Vec2.Distance(P1, P2) < (obj1.halfH + obj2.halfH)) {
                if (!obj2.isColliding) {
                    // React to our collision
                    //*****/
                    var backgroundMusic = createjs.Sound.play("./Audio/Pop.mp3");
                    backgroundMusic.on("loop", handleLoop);
                    objects.Game.currentSceneObject.removeChild(obj2);
                    //*****/
                    console.log("Collision " + obj1.name + " with " + obj2.name);
                    obj2.isColliding = true;
                    //objects.Game.currentScene = config.Scene.OVER;
                }
            }
            else {
                obj2.isColliding = false;
            }
            //*****/
            function handleLoop(event) {
                backgroundMusic.volume = backgroundMusic.volume * 0.2;
            }
            //*****/
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map