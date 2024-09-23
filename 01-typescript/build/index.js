"use strict";
/* Tipos primitivos: boolean, string, number */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// tipo primitivo bollean que só permite true ou false
let ligado = true;
// tipo primitivo string só permite textos
let nome = "Pablo";
// tipo primitivo number só permite números, também aceita números decimais 
let idade = 30;
let altura = 1.90;
/* Tipos especiais */
// tipo especiais nulo, quando você não quer que seja colocado nenhum valor ali
let nulo = null;
// tipo especiais undefined ou seja indefinido, o único valor que ela vai aceitar é undefined
let indefinido = undefined;
/* Tipos abrangentes */
// tipo abrangente void, que significa vazio
let retorno;
// tipo abrangente any , quando quando você pode receber como retorno qualquer coisa, ou seja, ele aceita qualquer retorno boolean, number, string e por ai vai
let retornoView = false;
/* Objeto */
// objeto - sem presibilidade (não é encorajado a fazer dessa forma e sim a de baixo com pressibilidade)
let produto = {
    name: "Pablo",
    cidade: "Olinda",
    idade: 30,
    trabalha: false,
};
let MeuProduto = {
    nome: "Pablo",
    cidade: "Olinda",
    idade: 30,
    trabalha: false,
};
/* Arrays */
let dados = ["Pablo", "Henrique", "Tais", "Gessyca"];
//outra forma de declarar o array
let dados2 = ["Pablo", "Henrique", "Tais", "Gessyca"];
/* Tuplas */
// Na Tupla, você tem que escrever exatamente da forma / ordem que foi definido
let boleto = ["água", 199.90, 32245];
/* Arrays Métodos */
dados.push();
/* Datas */
let aniversario = new Date("2024-09-01 05:00");
console.log(aniversario.toString());
/* Funções */
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(4, 7);
console.log(soma);
/* Funções multi tipos */
function callToPhone(phone) {
    return phone;
}
/* Funções assincronas */
function dataBase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Pablo";
    });
}
const bot2 = {
    id: 1,
    name: "megaman",
};
const bot = {
    id: 1,
    name: "megaman",
};
/* Classes */
class character {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
class Magician extends character {
    constructor(name, stregth, skill, MagicPoints) {
        super(name, stregth, skill);
        this.MagicPoints = MagicPoints;
    }
}
const p1 = new character("ryu", 10, 98);
const p2 = new Magician("mago", 9, 30, 100);
p1.attack();
/* Data modifiers
    public - é o valor default, e se não for passado nada ou se colocarmos antes de algo, podemos acessar ele de qualquer local
    private - quando colocamos private antes de algo, quer dizer que apenas podemos acessar ele de dentro da classe
    protected - aonde apenas suas classes e subclasses conseguem enxergar
*/
