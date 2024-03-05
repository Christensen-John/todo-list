import { TodoItem } from "./TodoItem";

export class TodoList {
  name;
  list;

  constructor(name) {
    this.name = name;
    this.list = [];
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
  addTodoItem(
    title,
    desc,
    dateCreated,
    dueDate,
    priority,
    // checklist,
    notes
  ) {
    this.list.push(
      new TodoItem(title, desc, dateCreated, dueDate, priority, notes)
    );
  }

  toString() {
    //Attempt #2
    return this.list.toString();
    //Attempt #1
    // let stringData = "";
    // this.items.forEach((item) => {
    //   stringData.concat(stringData, item.toString());
    // });
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
