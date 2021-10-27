import CounterStore from './model/Counter';
import TextStore from './model/Text';

export default class PageStore {
  counterStore: CounterStore;
  textStore: TextStore;

  constructor() {
    this.counterStore = new CounterStore(this);
    this.textStore = new TextStore(this);
  }
}
