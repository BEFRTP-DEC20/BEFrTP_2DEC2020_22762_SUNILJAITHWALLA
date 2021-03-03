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
var Employee_1 = require("./Employee");
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        var _this = _super.call(this, "John", 110, 345456) || this;
        _this.managerRole = "Associate";
        return _this;
    }
    Manager.prototype.show = function () {
        _super.prototype.showEmployee.call(this);
        console.log("Manager Role: " + this.managerRole);
    };
    return Manager;
}(Employee_1.Employee));
var newManager = new Manager();
newManager.show();
//# sourceMappingURL=Manager.js.map