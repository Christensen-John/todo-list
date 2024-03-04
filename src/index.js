import { TodoList } from "./TodoList";

console.log("Today is:");
let today = new Date();
console.log(
  `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`
);

console.log(today.toString());
