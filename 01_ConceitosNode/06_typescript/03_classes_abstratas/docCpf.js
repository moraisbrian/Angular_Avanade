"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocCpf = void 0;
var documento_1 = require("./documento");
var DocCpf = /** @class */ (function (_super) {
    __extends(DocCpf, _super);
    function DocCpf() {
        var _this = _super.call(this) || this;
        _this._digitos = 11;
        return _this;
    }
    DocCpf.prototype.exibir = function () {
        return "N\u00FAmero do CPF: " + this.numero;
    };
    return DocCpf;
}(documento_1.Documento));
exports.DocCpf = DocCpf;
