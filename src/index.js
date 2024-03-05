// import { TodoList } from "./TodoList";
// import { saveList, createNewList } from "./ListManager";
import { ListManager } from "./ListManager";

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

function setupNavListeners() {
  const navList = document.querySelectorAll("nav li");
  navList.forEach((liEl) => {
    liEl.addEventListener("click", (event) => {
      let listName = event.target.data;
      console.log(ListManager.loadList(listName));
    });
  });
}

// ListManager.createFakeFill(5);
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
