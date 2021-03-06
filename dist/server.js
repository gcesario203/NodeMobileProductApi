"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var port = process.env.PORT || 9999;
app_1.app.listen(port, function () { return console.log("Rodando na porta " + port); });
