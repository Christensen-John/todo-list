import { TodoList } from "./TodoList";

console.log("Today is:");
let today = new Date();
console.log(
  `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`
);

console.log(today.toString());

let myList = new TodoList("private list");

myList.addTodoItem(
  "TodoList Project",
  "The TodoList project from The Odin Project",
  new Date(),
  new Date(2024, 2, 8),
  true,
  ""
);
myList.addTodoItem(
  "Cook dinner",
  "Cook for the queen of Bratislava",
  new Date(2025, 1, 23),
  new Date(2024, 4, 5),
  false,
  "Her royal highness is allergic to shellfish."
);
myList.addTodoItem(
  "Kat's birthday gift",
  "Buy a birthday gift for Kat",
  new Date(),
  new Date(2024, 4, 7),
  true,
  "She likes the colorful earings at --store--"
);
