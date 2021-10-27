import User from './model/User';

export default class RootStore {
  userStore: User;

  constructor() {
    this.userStore = new User(this);
  }
}
