const number = [4, 6, 8, 12, 43, 23];

const newValues = number.filter((num) => num % 2 == 0);

// console.log(newValues);

//Outro exemplo de Filter (filtrar só os desenvolvedores plenos)
const frontBeginners = [
  { name: "Carlinhos da massa", age: 25, title: "JR", test: 35 },
  { name: "Joãzinho do pastel", age: 32, title: "PL", test: 56 },
  { name: "Harry do Potter", age: 80, title: "SR", test: 90 },
  { name: "Vitinho o pequeno", age: 50, title: "JR", test: 55 },
  { name: "Juvenal", age: 80, title: "SR", test: 55 },
  { name: "Torquato", age: 32, title: "JR", test: 55 },
];

const FilterTitle = frontBeginners.filter(({title}) => title == "PL");
//console.log(FilterTitle);


//outra forma de escrever, o resultado é o mesmo
// const FilterTitle = frontBeginners.filter((person) => person.title == "PL");



//Exemplo menores de 30 anos

const LessThan30 = frontBeginners.filter((person) => person.age <= 30);

//console.log(LessThan30);

//Exemplo maiores de 30 anos e JR

const MoreThan30JR = frontBeginners.filter(
  (person) => person.age >= 30 && person.title == "JR"
);

//console.log(MoreThan30JR);

//Usando o map junto para retornar só o nome de quem tem mais de 30 anos

const MoreThan30 = frontBeginners.filter((person) => person.age >= 30).map((item)=> item.name);

console.log(MoreThan30);
