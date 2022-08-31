"use strict";
/*
const character = 'luidgi';
let age = 30;
let isBlackBelt = false;
// age = false;
age = 32;
console.log(character);
const inputs = document.querySelectorAll('input');
console.log(inputs);

inputs.forEach((input) => {
  console.log(input);
});

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(7.5));
let names = ['luidgi', 'mario', 'yoshi'];
names.push('toad');
// names.push(3);
// names[0] = 3;

let numbers = [10, 20, 30, 40];
numbers.push(25);
// numbers.push('shaun');

let mixed = ['ken', 'chun-li', 8, true];
mixed.push('8');
mixed.push(false);
mixed[0] = 3;

let ninja = {
  name: 'mario',
  belt: 'black',
  age: 30,
};

ninja.age = 40;
// ninja.skills = ['gtregr', 'vfff'];

//explicite types
let perso: string;
let aged: number;
let isLoggedIng: boolean;

// aged = 'koko';

//array;
let ninjas: string[] = [];
ninjas.push('shaun');

//union types
let mixed2: (string | number | boolean)[] = [];
mixed2.push('hello');
mixed2.push(20);
mixed2.push(false);
console.log(mixed2);

let uid: string | number;
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };
let ninja2: {
  name: string;
  age: number;
  beltColour: string;
};

let age3: any = 25;

let mixed3: any[] = [];
mixed3.push(false);

let ninja4: { name: any; age: any };
ninja4 = { name: 'yoshi', age: 25 };
console.log(ninja4);
console.log('loooo');

let greet: Function;
greet = () => {
  console.log('hello world');
};

const add = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b);
  console.log(c);
};
add(5, 10, 20);

const minus = (a: number, b: number): number => {
  return a + b;
};

let result = minus(10, 7);

//ALIASES
type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has an uid of ${uid}`);
};

const greet2 = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};

// Function signature
let greet3: (a: string, b: string) => void;
greet3 = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};

let calc: (a: number, b: number, c: string) => number;
calc = (num1: number, num2: number, action: string) => {
  if (action === 'add') {
    return num1 + num2;
  } else {
    return num1 - num2;
  }
};

let logDetails2: (obj: { name: string; age: number }) => void;
type person = { name: string; age: number };
logDetails2 = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};
*/
//htmlanchorelement
const anchor = document.querySelector('a');
console.log(anchor === null || anchor === void 0 ? void 0 : anchor.href);
//form element
// const form = document.querySelector('form')!;
//element
const form = document.querySelector('.new-item-form');
