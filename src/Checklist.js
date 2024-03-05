import { CheckListItem } from "./CheckListItem";

export class Checklist {
  list;

  constructor() {
    this.list = [];
  }

  addItem(item, status) {
    this.list.push(new CheckListItem(item, status));
  }

  //remove checklist item
  //TODO: Add remove checklist item method

  toString() {
    //Attempt #4
    return this.list.toString();

    //Attempt #3
    // let stringedItems = this.list.toString();
    // return `${stringedItems}]`;

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
    return this.list;
  }

  //Mutators
  /**
   * @param {Object} list A list of Checklist items
   */
  set list(list) {
    this.list = list;
  }
}
