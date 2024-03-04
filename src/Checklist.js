import { CheckListItem } from "./CheckListItem";

export class CheckList {
  #list;

  constructor() {
    this.#list = [];
  }

  addItem(item, status) {
    this.list.push(new CheckListItem(item, status));
  }

  //remove checklist item
  //TODO: Add remove checklist item method

  toString() {
    let stringedItems = this.list.toString();

    //Attempt #3
    return `[${stringedItems}]`;

    //Attempt #2
    // return stringedItems.concat('[', stringedItems, "]");

    //Attempt before realizing I could just use the Array toString functionality :facepalm:
    // ']')is.#list.forEach((item, index) => {
    //   let newItemString = item.toString();
    //   if (index !== this.list().length - 1) {
    //     newItemString.concat(newItemString, ",\n");
    //   } else {
    //     //End of the array of items. Add
    //     newItemString.concat(newItemString, "]");
    //   }
    //   stringedItems.concat(stringedItems, newItemString);
    // });
  }

  //Accessors
  get list() {
    return this.#list;
  }

  //Mutators
  set list(list) {
    this.#list = list;
  }
}
