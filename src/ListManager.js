import { TodoList } from "./TodoList";

export class ListManager {
  static createNewList(name) {
    if (localStorage[name]) {
      throw new Error("List already exists");
    }
    return new TodoList(name);
  }

  static loadList(name) {
    if (!localStorage[name]) {
      throw new Error(`List: ${name} does not exist`);
    }
    let jsonList = JSON.parse(localStorage.getItem(name));
    return ListManager.listFromJSON(jsonList);
  }

  static saveList(list) {
    let jsonList = JSON.stringify(list);
    if (localStorage[list.name]) {
      localStorage.removeItem(list.name);
    }
    localStorage.setItem(list.name, jsonList);
  }

  static listFromJSON(jsonList) {
    let listName = jsonList.name;
    let listContents = jsonList.list;
    let list = new TodoList(listName);
    listContents.forEach((jsonItem) => {
      list.addTodoItem(
        jsonItem.title,
        jsonItem.description,
        jsonItem.dateCreated,
        jsonItem.dueDate,
        jsonItem.priority,
        jsonItem.notes
      );
    });
    return list;
  }

  static getAllListNames() {
    return Object.keys(localStorage);
  }

  static createFakeFill(numLists) {
    // let numLists = Math.floor(Math.random() * 4) + 2;
    let rnm = this.makeId;
    for (let a = 0; a < numLists; a++) {
      let tempList = new TodoList(this.makeId(10));
      let numItemsInList = Math.floor(Math.random() * 10) + 3;
      for (let b = 0; b < numItemsInList; b++) {
        tempList.addTodoItem(
          rnm(5),
          rnm(15),
          new Date(),
          new Date(2023, 3, 5),
          Math.random() < 0.5,
          rnm(20),
          false
        );
      }
      ListManager.saveList(tempList);
    }
  }

  static makeId(length) {
    let result = "";
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const charsLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charsLength));
      counter++;
    }
    return result;
  }
}

// export function createNewList(name) {
//   //See if list already exists: creates new list or returns existing list if possible
//   if (!localStorage[name]) {
//     return new TodoList(name);
//   } else {
//     return JSON.parse(localStorage[name]);
//   }
// }

// function loadLists() {
//   if (storageAvailable("localStorage")) {
//     let keys;
//   } else {
//     return false;
//   }
// }

// export function saveList(list) {
//   let jsonList = JSON.stringify(list.fullList);
//   if (storageAvailable("localStorage")) {
//     localStorage.setItem(list.name, list);
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

//
