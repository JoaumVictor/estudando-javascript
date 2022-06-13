const admName: string = "Victor";
const admId: number = 19;
const admValidation: boolean = true;

const numbers: number[] = [1, 2, 3, 4, 5];
const names: string[] = ["Estudando", "typescript", "pra", "fazer", "projeto"];
const validations: boolean[] = [true, true, false, true, false];

// console.log(names[0].toUpperCase());

let myTuple: [string, number, string[]];
myTuple = ["Bescoito", 19, ["Opa", "Salve"]];

const user: { name: string; age: number; developer: boolean } = {
  name: "pedro",
  age: 18,
  developer: true,
};

// console.log(user.name);

let myID: string | number;

myID = "senha001";
myID = 200;

type productType = string | number;

const productName: productType = "Biscoito";
const productID: productType = 402;

enum Dificulty {
  A = "Fácil",
  B = "Médio",
  C = "Difícil",
}

const boss: { name: string; dificulty: string } = {
  name: "Viego",
  dificulty: Dificulty.B,
};

const welcome = (name: string, greet?: string): string => {
  if (greet) return `Hello ${name}, ${greet}`;
  return `Hello ${name}`;
};

// console.log(welcome("victor", "baum?"));

const information = (info: boolean | number) => {
  if (typeof info === "boolean") {
    console.log(`Sua afirmação é ${info}`);
    return;
  }
  console.log(`Seu número é ${info}`);
};

// information(10);

const showArrayInfo = <T>(array: T[]) => {
  array.forEach((info) => console.log(info));
};

// console.log(showArrayInfo(numbers));
// console.log(showArrayInfo(names));

class Person {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const newUser = new Person("Jorginho");
