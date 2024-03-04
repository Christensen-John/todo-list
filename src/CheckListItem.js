export class CheckListItem {
  #item;
  #checkStatus;

  constructor(item, status = false) {
    this.#item = item;
    this.#checkStatus = status;
  }

  toString() {
    return `{
      'item': ${this.item},
      'checkStatus': ${this.checkStatus}
    }`;
  }

  //Accessors
  get item() {
    return this.#item;
  }

  get checkStatus() {
    return this.#checkStatus;
  }

  //Mutators
  set item(item) {
    this.#item = item;
  }

  set checkStatus(status) {
    this.#checkStatus = status;
  }
}
