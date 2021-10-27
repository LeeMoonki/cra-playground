import { makeAutoObservable } from 'mobx';
import PageStore from '../PageStore';

export default class CounterStore {
  pageStore: PageStore;
  count = 0;

  constructor(pageStore: PageStore) {
    makeAutoObservable(this, { pageStore: false });

    this.pageStore = pageStore;
  }

  increase() {
    this.count += 1;
  }

  reset() {
    this.count = 0;
  }
}
