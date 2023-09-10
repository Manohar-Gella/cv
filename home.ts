// 21. Destructuring Objects
const user = {
    firstName: "Alice",
    lastName: "Smith",
    age: 30,
  };
  
  const { firstName, lastName } = user;
  
  // 22. Spread Operator
  const numbers = [1, 2, 3];
  const newNumbers = [...numbers, 4, 5];
  
  // 23. Rest Parameters
  function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  // 24. Class Inheritance
  class Animal {
    constructor(public name: string) {}
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  const dog = new Dog("Rover");
  dog.speak();
  
  // 25. Abstract Classes
  abstract class Shape {
    abstract area(): number;
  }
  
  class Circle extends Shape {
    constructor(private radius: number) {
      super();
    }
    area(): number {
      return Math.PI * this.radius ** 2;
    }
  }
  
  // 26. Promises with Error Handling
  function fetchDataWithErrorHandling() {
    return fetch("https://api.example.com/data")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  
  // 27. Optional Chaining
  const user = {
    profile: {
      email: "user@example.com",
    },
  };
  
  const email = user?.profile?.email;
  
  // 28. Non-null Assertion Operator
  const maybeString: string | null = null;
  const definitelyString: string = maybeString!;
  
  // 29. Type Assertion with "as" Keyword
  const value: any = "Hello, TypeScript!";
  const length: number = (value as string).length;
  
  // 30. Using Enums with Values
  enum Color {
    Red = "#FF0000",
    Green = "#00FF00",
    Blue = "#0000FF",
  }
  
  const selectedColor: Color = Color.Red;
  
  // ... (You can continue to add more code snippets or specify any specific topics you'd like to explore further)
  