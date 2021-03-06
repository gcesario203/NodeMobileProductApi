"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoController = void 0;
var typeorm_1 = require("typeorm");
var ProdutoRepository_1 = require("../reporitories/ProdutoRepository");
var ProdutoController = /** @class */ (function () {
    function ProdutoController() {
    }
    ProdutoController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, nome, preco, quantidade, id, pProdutoRepo, existProduto, produtoToChange, error_1, newUser;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, nome = _a.nome, preco = _a.preco, quantidade = _a.quantidade;
                        id = req.params.id;
                        preco = Number.parseFloat(preco);
                        pProdutoRepo = typeorm_1.getCustomRepository(ProdutoRepository_1.ProdutoRepository);
                        return [4 /*yield*/, pProdutoRepo.findOne({
                                where: { nome: nome }
                            })];
                    case 1:
                        existProduto = _b.sent();
                        if (!id) return [3 /*break*/, 8];
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 6, , 7]);
                        return [4 /*yield*/, pProdutoRepo.findOne(id)];
                    case 3:
                        produtoToChange = _b.sent();
                        if (!produtoToChange) return [3 /*break*/, 5];
                        return [4 /*yield*/, pProdutoRepo.update({ id: produtoToChange.id }, {
                                nome: nome,
                                preco: preco,
                                quantidade: quantidade
                            })];
                    case 4:
                        _b.sent();
                        res.status(203).send({ mensagem: "Produto alterado com sucesso" });
                        _b.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_1 = _b.sent();
                        res.status(500).send({ mensagem: "Algo deu errado, " + error_1.message });
                        return [3 /*break*/, 7];
                    case 7: return [3 /*break*/, 11];
                    case 8:
                        if (!existProduto) return [3 /*break*/, 9];
                        res.status(400).send({
                            mensagem: "Produto ja existe"
                        });
                        return [3 /*break*/, 11];
                    case 9:
                        newUser = pProdutoRepo.create({
                            nome: nome, preco: preco, quantidade: quantidade
                        });
                        return [4 /*yield*/, pProdutoRepo.save(newUser)];
                    case 10:
                        _b.sent();
                        res.status(201).send({
                            mensage: "Produto criado com sucesso:" + newUser.nome
                        });
                        _b.label = 11;
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    ProdutoController.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, pProdutoRepo, produto;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        pProdutoRepo = typeorm_1.getCustomRepository(ProdutoRepository_1.ProdutoRepository);
                        return [4 /*yield*/, pProdutoRepo.findOne(id)];
                    case 1:
                        produto = _a.sent();
                        if (!produto) return [3 /*break*/, 3];
                        return [4 /*yield*/, pProdutoRepo.delete(produto)];
                    case 2:
                        _a.sent();
                        res.status(200).send({ mensagem: "Produto deletado com sucesso" });
                        return [3 /*break*/, 4];
                    case 3:
                        res.status(500).send({
                            mensagem: "Algo aconteceu"
                        });
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProdutoController.prototype.get = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, pProdutoRepo, produto, produtos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        pProdutoRepo = typeorm_1.getCustomRepository(ProdutoRepository_1.ProdutoRepository);
                        if (!id) return [3 /*break*/, 2];
                        return [4 /*yield*/, pProdutoRepo.findOne(id)];
                    case 1:
                        produto = _a.sent();
                        if (produto) {
                            res.status(200).send({
                                produto: produto
                            });
                        }
                        else {
                            res.status(404).send({ mensagem: "Produto não encontrado" });
                        }
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, pProdutoRepo.find()];
                    case 3:
                        produtos = _a.sent();
                        res.status(200).send({
                            produtos: produtos
                        });
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ProdutoController;
}());
exports.ProdutoController = ProdutoController;
