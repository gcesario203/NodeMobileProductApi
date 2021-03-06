"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterInstance = void 0;
var express_1 = require("express");
var RouterInstance = /** @class */ (function () {
    function RouterInstance() {
    }
    RouterInstance.router = express_1.Router();
    return RouterInstance;
}());
exports.RouterInstance = RouterInstance;
