// 11. Type Aliases
type Point = { x: number; y: number };

const point: Point = { x: 10, y: 20 };

// 12. Union Types
type Result = number | string;

function getResult(): Result {
  if (Math.random() < 0.5) {
    return "Success";
  } else {
    return 42;
  }
}

// 13. Intersection Types
type Printable = { print: () => void };
type Loggable = { log: () => void };

function mix(obj: Printable & Loggable) {
  obj.print();
  obj.log();
}

// 14. Nullable Types
let username: string | null = null;

// 15. Type Guards
function isNumber(value: any): value is number {
  return typeof value === "number";
}

function printValue(value: number | string) {
  if (isNumber(value)) {
    console.log(`Number: ${value}`);
  } else {
    console.log(`String: ${value}`);
  }
}

// 16. Asynchronous Programming with async/await
async function fetchDataAsync() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  return data;
}

// 17. Promises with Promise.all
async function fetchUserData(id: number): Promise<User> {
  // Fetch user data from an API
}

async function fetchAllUserData(userIds: number[]) {
  const promises = userIds.map(fetchUserData);
  const users = await Promise.all(promises);
  return users;
}

// 18. React Hooks
import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// 19. Express.js Middleware
import express from "express";

const app = express();

app.use((req, res, next) => {
  console.log("Request received");
  next();
});

// 20. Type-safe Routing with TypeScript and Express.js
app.get("/users/:id", (req, res) => {
  const userId: number = parseInt(req.params.id, 10);
  // Handle the request and return data
});

// ... (Feel free to add more code snippets or specify any specific topics you'd like to see)
