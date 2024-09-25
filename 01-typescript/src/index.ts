
/* Tipos primitivos: boolean, string, number */

// tipo primitivo bollean que só permite true ou false
let ligado: boolean = true; 

// tipo primitivo string só permite textos
let nome: string = "Pablo"; 

// tipo primitivo number só permite números, também aceita números decimais 
let idade: number = 30; 
let altura: number = 1.90 

/* Tipos especiais */

// tipo especiais nulo, quando você não quer que seja colocado nenhum valor ali
let nulo: null = null;

// tipo especiais undefined ou seja indefinido, o único valor que ela vai aceitar é undefined
let indefinido: undefined = undefined;

/* Tipos abrangentes */

// tipo abrangente void, que significa vazio
let retorno:void

// tipo abrangente any , quando quando você pode receber como retorno qualquer coisa, ou seja, ele aceita qualquer retorno boolean, number, string e por ai vai
let retornoView:any = false;

/* Objeto */

// objeto - sem presibilidade (não é encorajado a fazer dessa forma e sim a de baixo com pressibilidade)
let produto: object = {
    name: "Pablo",
    cidade: "Olinda",
    idade: 30,
    trabalha: false,
}

// Objeto tipado - com presibilidade
type ProdutoLoja = {
    nome: string;
    cidade: string;
    idade: number;
    trabalha: boolean;
}

let MeuProduto: ProdutoLoja ={
    nome: "Pablo",
    cidade: "Olinda",
    idade: 30,
    trabalha: false,
}

/* Arrays */

let dados: string[] = ["Pablo", "Henrique", "Tais", "Gessyca"]

//outra forma de declarar o array
let dados2: Array<string> = ["Pablo", "Henrique", "Tais", "Gessyca"]

/* Tuplas */

// Na Tupla, você tem que escrever exatamente da forma / ordem que foi definido
let boleto: [string, number, number] = ["água", 199.90, 32245]

/* Arrays Métodos */

dados.push()

/* Datas */

let aniversario:Date = new Date("2024-09-01 05:00");
console.log(aniversario.toString())

/* Funções */


function addNumber(x: number, y: number): number {
    return x + y;
}

let soma: number = addNumber(4, 7);

console.log(soma);

/* Funções multi tipos */

function callToPhone(phone: number | string):number | string{
    return phone
}

/* Funções assincronas */

async function dataBase(id:number): Promise<string> {
    return "Pablo"
}

/* Interfaces (type x interface) */

type robot = { // tipar seus objetos
    id: number,
    name: string,
};

interface robot2 { // geralmente usado quando a gente vai tipar classes
    id: number,
    name: string,
}

const bot2: robot2 ={
    id: 1, 
    name: "megaman",
}

const bot: robot ={
    id: 1, 
    name: "megaman",
}

/* Classes */

class character {
    name: string;
    stregth: number;
    skill: number;

    constructor(name:string, stregth: number, skill:number){
        this.name = name;
        this.stregth = stregth;
        this.skill = skill
    }

    attack():void{
        console.log(`Attack with ${this.stregth} points`)
    }
}

class Magician extends character {
    MagicPoints: number 
    constructor(name:string, stregth: number, skill:number, MagicPoints: number ){
        super(name,stregth, skill)
        this.MagicPoints = MagicPoints;
    }
}

const p1 = new character("ryu",10,98)
const p2 = new Magician("mago", 9, 30, 100)
p1.attack()

/* Data modifiers
    public - é o valor default, e se não for passado nada ou se colocarmos antes de algo, podemos acessar ele de qualquer local
    private - quando colocamos private antes de algo, quer dizer que apenas podemos acessar ele de dentro da classe 
    protected - aonde apenas suas classes e subclasses conseguem enxergar
*/

/* Generics ou genêrico */

function concatArray<T>(...itens:T[]):T[]{
    return new Array().concat(...itens);
}

const numArray = concatArray<Number[]>([1,5], [2,3,4])
const stgArray = concatArray<String[]>(["Pablo", "Henrique"], ["Ferreira", "de França"])
console.log(numArray)
console.log(stgArray)