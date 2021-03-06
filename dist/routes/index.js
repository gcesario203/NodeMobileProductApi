"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesHandler = void 0;
var GlobalRouter_1 = require("../config/GlobalRouter");
var ProdutoRoutes_1 = require("./ProdutoRoutes");
var RoutesHandler = /** @class */ (function () {
    function RoutesHandler() {
        this.ProdutoRoutes = new ProdutoRoutes_1.ProdutoRoutes();
    }
    RoutesHandler.prototype.init = function () {
        return GlobalRouter_1.RouterInstance.router;
    };
    return RoutesHandler;
}());
exports.RoutesHandler = RoutesHandler;
