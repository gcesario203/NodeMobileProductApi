"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoRoutes = void 0;
var GlobalRouter_1 = require("../config/GlobalRouter");
var ProdutoController_1 = require("../controllers/ProdutoController");
var ProdutoRoutes = /** @class */ (function () {
    function ProdutoRoutes() {
        this.produtoController = new ProdutoController_1.ProdutoController();
        this.init();
    }
    ProdutoRoutes.prototype.init = function () {
        GlobalRouter_1.RouterInstance.router.get("/produtos", this.produtoController.get);
        GlobalRouter_1.RouterInstance.router.get("/produtos/:id", this.produtoController.get);
        GlobalRouter_1.RouterInstance.router.post("/produtos", this.produtoController.create);
        GlobalRouter_1.RouterInstance.router.delete("/produtos/:id", this.produtoController.delete);
        GlobalRouter_1.RouterInstance.router.put("/produtos/:id", this.produtoController.create);
    };
    return ProdutoRoutes;
}());
exports.ProdutoRoutes = ProdutoRoutes;
