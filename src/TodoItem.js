import { Checklist } from "./Checklist";

export class TodoItem {
  #key;
  #title;
  #description;
  #dateCreated;
  #dueDate;
  #priority;
  #checklist;
  #notes;

  constructor(
    title,
    desc,
    created = new Date(),
    due,
    priority = false,
    notes = ""
  ) {
    //make a key that is the title with all non-alphnumeric characters removed
    this.#key = title.replace(/[^a-zA-Z0-9]/g, "");
    this.#title = title;
    this.#description = desc;
    this.#dateCreated = created;
    this.#dueDate = due;
    this.#priority = priority;
    this.#checklist = new Checklist();
    this.#notes = notes;
  }

  /**
   *
   * @param {string} item The description of the Checklist Item
   * @param {boolean} status The checked status of the Checklist Item
   */
  addCheckListItem(item, status) {
    this.checklist.addItem(item, status);
  }

  //remove checklist item
  //TODO: Add remove checklist item method

  toString() {
    return `'key': ${this.key},
      'title': ${this.title},
      'description': ${this.description},
      'dateCreated': ${this.dateCreated.toJSON()},
      'dueDate': ${this.dueDate.toJSON()},
      'priority': ${this.priority},
      'checklist': ${this.checklist.toString()},
      'notes': ${this.notes}`;
  }

  // ACCESSORS
  get item() {
    return {
      key: this.key,
      title: this.title,
      description: this.description,
      dateCreated: this.dateCreated.toJSON(),
      dueDate: this.dueDate.toJSON(),
      priority: this.priority,
      checklist: this.checklist,
      notes: this.notes,
    };
  }
  get key() {
    return this.#key;
  }

  get title() {
    return this.#title;
  }

  get description() {
    return this.#description;
  }

  get dateCreated() {
    return this.#dateCreated;
  }

  get dueDate() {
    return this.#dueDate;
  }

  get priority() {
    return this.#priority;
  }

  get checklist() {
    return this.#checklist;
  }

  get notes() {
    return this.#notes;
  }

  //Mutators
  set key(key) {
    this.#key = key;
  }

  set title(title) {
    this.#title = title;
  }

  set description(desc) {
    this.#description = desc;
  }

  set dateCreated(date) {
    this.#dateCreated = date;
  }

  set dueDate(date) {
    this.#dueDate = date;
  }

  set priority(priority) {
    this.#priority = priority;
  }

  set checklist(checklist) {
    this.#checklist = checklist;
  }

  set notes(notes) {
    this.#notes = notes;
  }
}
