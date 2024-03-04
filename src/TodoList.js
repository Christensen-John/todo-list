import { Item } from "./Item";

export class List {
  #name;
  #items;

  constructor(name) {
    this.#name = name;
    this.#items = [];
  }

  //Methods
  toString() {
    let stringData = "";
    this.#items.forEach((item) => {
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
