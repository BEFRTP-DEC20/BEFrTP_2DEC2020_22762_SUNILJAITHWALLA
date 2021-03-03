"use strict";
exports.__esModule = true;
var shape_1 = require("../shape");
var p1 = { x: 0, y: 0 };
var p2 = { x: 6, y: 6 };
var p3 = { x: 3, y: 6 };
var tri = new shape_1.Triangle(3, [p1, p2, p3]);
console.log(tri.Area());
console.log(tri.Perimeter());
//# sourceMappingURL=index.js.map