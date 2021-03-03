"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Square = exports.Rectangle = exports.Triangle = exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(edge, points) {
        this.edge = edge;
        this.points = points;
    }
    Shape.prototype.findDistance = function (point1, point2) {
        var a = point1.x - point2.x;
        var b = point1.y - point2.y;
        var dist = Math.sqrt(a * a + b * b);
        return dist;
    };
    return Shape;
}());
exports.Shape = Shape;
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(edge, points) {
        return _super.call(this, edge, points) || this;
    }
    Triangle.prototype.Area = function () {
        var point = this.points;
        console.log("Area of Triangle");
        var area = 0.5 * (point[0].x * (point[1].y - point[2].y) + point[1].x * (point[2].y - point[0].y) + point[2].x * (point[0].y - point[1].y));
        return Math.abs(area);
    };
    Triangle.prototype.Perimeter = function () {
        var point = this.points;
        var a = this.findDistance(point[0], point[1]);
        var b = this.findDistance(point[1], point[2]);
        var c = this.findDistance(point[2], point[0]);
        return a + b + c;
    };
    return Triangle;
}(Shape));
exports.Triangle = Triangle;
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.Area = function () {
        var point = this.points;
        var a = this.findDistance(point[0], point[1]);
        var b = this.findDistance(point[1], point[2]);
        console.log("Area of Rectangle");
        return a * b;
    };
    Rectangle.prototype.Perimeter = function () {
        var point = this.points;
        var a = this.findDistance(point[0], point[1]);
        var b = this.findDistance(point[1], point[2]);
        console.log("Perimeter of Rectangle");
        return 2 * (a + b);
    };
    return Rectangle;
}(Shape));
exports.Rectangle = Rectangle;
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Square.prototype.Area = function () {
        var point = this.points;
        var a = this.findDistance(point[0], point[1]);
        console.log("Area of Square");
        return a * a;
    };
    Square.prototype.Perimeter = function () {
        var point = this.points;
        var a = this.findDistance(point[0], point[1]);
        console.log("Perimeter of Square");
        return 4 * a;
    };
    return Square;
}(Shape));
exports.Square = Square;
//# sourceMappingURL=shape.js.map