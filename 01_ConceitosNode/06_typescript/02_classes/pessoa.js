"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    Object.defineProperty(Pessoa.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        // Propriedades
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "idade", {
        get: function () {
            return this._idade;
        },
        set: function (idade) {
            if (idade < 0)
                throw new Error('A idade não pode ser negativa');
            this._idade = idade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "sexo", {
        get: function () {
            return this._sexo;
        },
        set: function (sexo) {
            this._sexo = sexo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "doc", {
        get: function () {
            return this._doc;
        },
        set: function (doc) {
            this._doc = doc;
        },
        enumerable: false,
        configurable: true
    });
    // Métodos
    Pessoa.prototype.exibir = function () {
        return "Nome: " + this.nome + "\n Idade: " + this.idade + "\n Sexo: " + this.sexo + "\n Documento: " + this.doc.exibir();
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
