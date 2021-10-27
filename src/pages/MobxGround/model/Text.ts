import { makeAutoObservable } from 'mobx';
import PageStore from '../PageStore';

export default class TextStore {
  pageStore: PageStore;
  text: string;

  constructor(pageStore: PageStore) {
    makeAutoObservable(this);

    this.pageStore = pageStore;
    this.text = '';
  }

  setText(text: string) {
    this.text = text;
  }
}
