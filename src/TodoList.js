import { isThisMonth } from "date-fns";
import { TodoItem } from "./TodoItem";

export class TodoList {
  name;
  list;
  completed;

  constructor(name) {
    this.name = name;
    this.list = [];
    this.completed = [];
  }

  //Methods
  /**
   *
   * @param {string} title The title/name of the Todo Item
   * @param {string} desc A description of the Todo Item
   * @param {Date} dateCreated A date object describing when the object was created
   * @param {Date} dueDate A Date object describing when to finish the Todo Item
   * @param {boolean} priority A marker for if the item is of high priority
   * @param {string} notes A list of notes to go with the Todo Item
   */
  addTodoItem(title, desc, dateCreated, dueDate, priority, notes, completed) {
    //Check to see if the task is completed, if it is, put it in the completed list.
    if (completed) {
      return this.completed.push(
        new TodoItem(
          title,
          desc,
          dateCreated,
          dueDate,
          priority,
          notes,
          completed
        )
      );
    }
    return this.list.push(
      new TodoItem(
        title,
        desc,
        dateCreated,
        dueDate,
        priority,
        notes,
        completed
      )
    );
  }

  sortList(property = "dateCreated") {
    //Check if list has elements
    try {
      if (this.list.length === 0) {
        throw "Empty List";
      }
    } catch (err) {
      console.alert(`Sorting Error: ${err}`);
    } finally {
      //Save a new list sorted based on the chosen property
      let newList = this.#sort(this.list, property);
      //Use the setter to update the list
      this.list = newList;
      //Return the newly created list
      return this.list;
    }

    //TODO: Try the array.sort(compareFn(a, b)) function
  }

  #sort(list, property) {
    //Save the smallest item in the list and pop it from the array
    //Recursively call this.#sort with the remainder of the list
    //Return the scoped smallest combined with the rest of the array

    //base case if length of list === 1
    if (list.length === 1) {
      return list;
    }

    //Get smallest item's index
    let indexOfSmallest = this.#indexOfSmallestValue(list, property);

    //Get smallest item and list is shortened
    let item = list.splice(indexOfSmallest, 1)[0];

    //Sort the remainder of list recursively
    let sortedArray = this.#sort(list, property);

    //Combine the smallest item with the now sorted remainder
    sortedArray.unshift(item);

    //Return the now sorted array
    return sortedArray;
  }

  // Find smallest index for insertion sort algorithm
  #indexOfSmallestValue(list, prop) {
    let smallestIndex = 0;
    list.forEach((currentElement, index) => {
      if (currentElement[prop] < list[smallestIndex][prop]) {
        smallestIndex = index;
      }
    });
    return smallestIndex;
  }

  //Accessors
  get fullList() {
    return {
      name: this.name,
      items: this.list,
    };
  }

  get name() {
    return this.name;
  }

  get list() {
    return this.list;
  }

  //Mutators
  set name(name) {
    this.name = name;
  }

  set list(items) {
    this.list = items;
  }
}
