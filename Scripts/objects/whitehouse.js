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
    var WhiteHouse = /** @class */ (function (_super) {
        __extends(WhiteHouse, _super);
        // Variables
        // Constructor
        function WhiteHouse(assetManager, x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var _this = _super.call(this, assetManager, "whitehouse") || this;
            _this.x = x;
            _this.y = y;
            _this.Start();
            return _this;
        }
        WhiteHouse.prototype.Start = function () {
            this.Reset();
        };
        return WhiteHouse;
    }(objects.GameObject));
    objects.WhiteHouse = WhiteHouse;
})(objects || (objects = {}));
//# sourceMappingURL=whitehouse.js.map