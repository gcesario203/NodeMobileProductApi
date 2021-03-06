"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
require("reflect-metadata");
var database_1 = __importDefault(require("./database"));
var routes_1 = require("./routes");
var cors_1 = __importDefault(require("cors"));
database_1.default();
var app = express_1.default();
exports.app = app;
var routes = new routes_1.RoutesHandler();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(routes.init());
