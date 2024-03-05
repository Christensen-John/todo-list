import { isThisMonth } from "date-fns";
import { TodoItem } from "./TodoItem";

export class TodoList {
  name;
  list;

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

  //Sorting functions
  dueDateSort(list = this.list) {}

  reverseDueDateSort(list = this.list) {}

  nameSort(list = this.list) {}

  reverseNameSort(list = this.list) {}

  prioritySort(list = this.list) {}

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
