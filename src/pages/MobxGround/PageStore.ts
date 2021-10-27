import { action, computed, makeObservable, observable } from 'mobx';
import CounterStore from './model/Counter';
import TextStore from './model/Text';

export default class PageStore {
  counterStore: CounterStore;
  textStore: TextStore;

  privateText: string;

  constructor() {
    makeObservable(this, {
      privateText: observable,
      computedPrivateText: computed,
      setPrivateText: action,
    });
    this.counterStore = new CounterStore(this);
    this.textStore = new TextStore(this);

    this.privateText = '';
  }

  get computedPrivateText() {
    return this.privateText + ' :)';
  }

  setPrivateText = (text: string) => {
    // this._privateText = text;
    this.privateText = text;
  };
}
