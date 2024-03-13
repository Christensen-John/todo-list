import { ListManager } from "./ListManager";
import { format } from "date-fns";

console.log("Watch test");

function pageSetup() {
  const nav = document.querySelector("nav");
  const listNavElement = listNavigation();
  nav.appendChild(listNavElement);

  //setup listeners for navbar
  setupNavListeners();
}

function listNavigation() {
  const navEl = document.createElement("ul");
  const lists = ListManager.getAllListNames();
  lists.forEach((listName) => {
    const listEl = document.createElement("li");
    listEl.innerHTML = listName;
    listEl.data = listName;
    navEl.appendChild(listEl);
  });
  return navEl;
}

// Takes a specific list and displays it in the main content container
function todoDisplay(list) {
  const listEl = 
}

function redrawListContent() {
  //TODO: Complete the redrawing of the main window
}

function redrawNav() {
  const nav = document.querySelector("nav");
  const newListNav = listNavigation();
  nav.innerHTML = "";
  nav.appendChild(newListNav);
  setupNavListeners();
}

/**
 *
 * @param {TodoItem} item The TodoItem to display
 * @param {string} listname The name of the TodoList that contains the item
 * Creates an HTMLElement list item that will be used to display the TodoItem
 */
function createTodoItemElement(item, listname) {
  //Create a list item that will contain a todo item
  const listEl = document.createElement("li");
  listEl.classList.add("todoItem");
  listEl.id = `${item.title}`;

  //Label to know which list the item has originated
  const listLabelEl = document.createElement("p");
  listLabelEl.innerHTML = listname;
  listLabelEl.classList.add("listLabel");

  //Todo title/action item
  const itemTitle = document.createElement("h1");
  itemTitle.innerHTML = item.title;
  itemTitle.classList.add("itemTitle");

  //Todo due date
  const dueDate = document.createElement("p");
  dueDate.classList.add("item-due-date");
  dueDate.innerHTML = format(item.dueDate, "MMM d");

  //Add subElements to listEl
  listEl.append(itemTitle, listLabelEl, dueDate);
}

// /**
//  *
//  * @param {HTMLELement} todoElement The HTMLElement containing a TodoItem
//  * The priority is stored as an integer, either 0 or 1. Using some basic maths
//  * the number can be easily toggled. 0 and 1 map to false and true booleans
//  * respectively.
//  * //TODO: This might need to have a return value that replaces the old element.
//  *
//  */
// function togglePriority(todoElement) {
//   let priority = Number(todoElement.dataset.priority);
//   //Toggles 1 to 0 and 0 to 1;
//   todoElement.dataset.priority = priority * -1 + 1;
// }

// function createTodoListElement(listname) {
//   const listEl = document.createElement('ul');
//   let list = ListManager.loadList(listname);
//   list.list.forEach(listItem => {

//   });
// }

function setupNavListeners() {
  const navList = document.querySelectorAll("nav li");
  navList.forEach((liEl) => {
    liEl.addEventListener("click", (event) => {
      let listName = event.target.data;
    });
  });
}

function testSort(listName) {
  let todoList = ListManager.loadList(listName);
  console.log(todoList.sortList("title"));
  ListManager.saveList(todoList);

  //The lists have changed, redraw them;
  // redrawList();
}

//TODO: Testing purposes, fill storage randomly
if (localStorage.length === 0) {
  ListManager.createFakeFill(5);
}
pageSetup();
// localStorage.clear();

// let personalList;
// let professionalList;
// try {
//   personalList = ListManager.createNewList("private list");
// } catch {
//   personalList = ListManager.loadList("private list");
// }
// try {
//   professionalList = ListManager.createNewList("professional list");
// } catch {
//   professionalList = ListManager.loadList("professional list");
// }

// personalList.addTodoItem(
//   "TodoList Project",
//   "The TodoList project from The Odin Project",
//   new Date(),
//   new Date(2024, 2, 8),
//   true,
//   ""
// );
// personalList.addTodoItem(
//   "Cook dinner",
//   "Cook for the queen of Bratislava",
//   new Date(2025, 1, 23),
//   new Date(2024, 4, 5),
//   false,
//   "Her royal highness is allergic to shellfish."
// );
// personalList.addTodoItem(
//   "Kat's birthday gift",
//   "Buy a birthday gift for Kat",
//   new Date(),
//   new Date(2024, 4, 7),
//   true,
//   "She likes the colorful earings at --store--"
// );

// professionalList.addTodoItem(
//   "Test 1",
//   "Test description",
//   new Date(),
//   new Date(2024, 4, 2),
//   true,
//   "Test notes"
// );

// professionalList.addTodoItem(
//   "Test 2",
//   "Test description",
//   new Date(),
//   new Date(2024, 4, 2),
//   false,
//   "Test notes 2"
// );
// professionalList.addTodoItem(
//   "Test 1",
//   "Test description",
//   new Date(),
//   new Date(2024, 4, 2),
//   false,
//   "Test notes 3"
// );
// ListManager.saveList(personalList);
// ListManager.saveList(professionalList);

// console.log(Object.keys(localStorage));

// saveLists(myList);
// function saveLists(list) {
//   console.log(list);
//   if (storageAvailable("localStorage")) {
//     //Do something
//     localStorage.setItem(list.name, JSON.stringify(list.fullList));
//   } else {
//     //No local storage
//     console.log(
//       "No local storage available. Please check your settings or use a different browser."
//     );
//   }
// }

// function storageAvailable(storageType) {
//   let storage;
//   try {
//     storage = window[storageType];
//     const x = "__storage_test__";
//     storage.setItem(x, x);
//     storage.removeItem(x);
//     return true;
//   } catch (e) {
//     return (
//       e instanceof DOMException &&
//       // everything except Firefox
//       (e.code === 22 ||
//         // Firefox
//         e.code === 1024 ||
//         // Test the name field too, because code might not be present
//         // Everything except Firefox
//         e.name === "QuotaExceededError" ||
//         // Firefox
//         e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
//       // acknowledge QuotaExceededError only if there's something already stored
//       storage &&
//       storage.length !== 0
//     );
//   }
// }
