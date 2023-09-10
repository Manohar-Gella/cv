// 1. Basic Types
let firstName: string = "John";
let age: number = 30;
let isStudent: boolean = false;
let hobbies: string[] = ["reading", "coding"];
let person: { name: string; age: number } = { name: "Alice", age: 25 };

// 2. Functions
function add(a: number, b: number): number {
  return a + b;
}

const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

// 3. Interfaces
interface User {
  name: string;
  email: string;
}

function sendEmail(user: User, message: string): void {
  console.log(`Sending email to ${user.name} (${user.email}): ${message}`);
}

// 4. Classes
class Animal {
  constructor(public name: string) {}

  makeSound(sound: string): void {
    console.log(`${this.name} says ${sound}`);
  }
}

const dog = new Animal("Dog");
dog.makeSound("Woof!");

// 5. Generics
function identity<T>(arg: T): T {
  return arg;
}

const result = identity<number>(42);

// 6. Enums
enum Color {
  Red,
  Green,
  Blue,
}

const selectedColor: Color = Color.Red;

// 7. Modules
import { add, subtract } from "./math";
console.log(add(5, 3));
console.log(subtract(10, 7));

// 8. Promises
function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 2000);
  });
}

fetchData().then((data) => console.log(data));

// 9. Decorators
function log(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${key} with arguments: ${args}`);
    const result = originalMethod.apply(this, args);
    console.log(`Function ${key} returned: ${result}`);
    return result;
  };
  return descriptor;
}

class Calculator {
  @log
  add(a: number, b: number): number {
    return a + b;
  }
}

const calculator = new Calculator();
calculator.add(3, 5);

// 10. Type Assertions
let value: any = "Hello, TypeScript!";
let length: number = (value as string).length;

// ... (Repeat or continue with more code snippets as needed)
