import { Item } from "./Item";

export class TodoList {
  #name;
  #items;

  constructor(name) {
    this.#name = name;
    this.#items = [];
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
    this.items.push() = new Item(title, desc, dateCreated, dueDate, priority, notes);
  }

  toString() {
    let stringData = "";
    this.items.forEach((item) => {
      stringData.concat(stringData, item.toString());
    });
  }

  //Accessors
  get name() {
    return this.#name;
  }

  get items() {
    return this.#items;
  }

  //Mutators
  set name(name) {
    this.#name = name;
  }

  set items(items) {
    this.#items = items;
  }
}
