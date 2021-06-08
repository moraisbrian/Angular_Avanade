"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Documento = void 0;
var Documento = /** @class */ (function () {
    function Documento() {
    }
    Object.defineProperty(Documento.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (numero) {
            if (numero.length !== this._digitos)
                throw new Error('Quantidade de dígitos inválida para este documento');
            this._numero = numero;
        },
        enumerable: false,
        configurable: true
    });
    return Documento;
}());
exports.Documento = Documento;
