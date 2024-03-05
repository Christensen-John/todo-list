export class CheckListItem {
  item;
  checkStatus;

  constructor(item, status = false) {
    this.item = item;
    this.checkStatus = status;
  }

  toString() {
    return `{
      'item': ${this.item},
      'checkStatus': ${this.checkStatus}
    }`;
  }

  //Accessors
  get fullCheckItem() {
    return {
      item: this.item,
      checkStatus: this.checkStatus,
    };
  }

  get item() {
    return this.item;
  }

  get checkStatus() {
    return this.checkStatus;
  }

  //Mutators
  /**
   * @param {string} item
   */
  set item(item) {
    this.item = item;
  }

  /**
   * @param {boolean} status The checked status of the CheckListItem
   */
  set checkStatus(status) {
    this.checkStatus = status;
  }
}
