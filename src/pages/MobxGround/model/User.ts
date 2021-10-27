import { makeAutoObservable } from 'mobx';
import RootStore from '../RootStore';

export default class User {
  rootStore: RootStore;

  isLogin: boolean;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;

    this.isLogin = false;
  }

  login() {
    this.isLogin = true;
  }

  logout() {
    this.isLogin = false;
  }
}
