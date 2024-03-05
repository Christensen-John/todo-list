export class TodoItem {
  key;
  title;
  description;
  dateCreated;
  dueDate;
  priority;
  notes;
  completed;

  constructor(
    title,
    desc,
    created = new Date(),
    due,
    priority = false,
    notes = "",
    completed = false
  ) {
    //make a key that is the title with all non-alphnumeric characters removed
    this.key = title.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    this.title = title;
    this.description = desc;
    this.dateCreated = created;
    this.dueDate = due;
    this.priority = priority;
    this.notes = notes;
    this.completed = completed;
  }

  toString() {
    return `'key': ${this.key},
      'title': ${this.title},
      'description': ${this.description},
      'dateCreated': ${this.dateCreated.toJSON()},
      'dueDate': ${this.dueDate.toJSON()},
      'priority': ${this.priority},
      'notes': ${this.notes},
      'completed': ${this.completed}`;
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
      notes: this.notes,
      completed: this.completed,
    };
  }
  get key() {
    return this.key;
  }

  get title() {
    return this.title;
  }

  get description() {
    return this.description;
  }

  get dateCreated() {
    return this.dateCreated;
  }

  get dueDate() {
    return this.dueDate;
  }

  get priority() {
    return this.priority;
  }

  get notes() {
    return this.notes;
  }

  get completed() {
    return this.completed;
  }

  //Mutators
  set key(key) {
    this.key = key;
  }

  set title(title) {
    this.title = title;
  }

  set description(desc) {
    this.description = desc;
  }

  set dateCreated(date) {
    this.dateCreated = date;
  }

  set dueDate(date) {
    this.dueDate = date;
  }

  set priority(priority) {
    this.priority = priority;
  }

  set notes(notes) {
    this.notes = notes;
  }

  set completed(complete) {
    this.completed = complete;
  }
}
