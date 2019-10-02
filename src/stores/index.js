import UserStore from './UserStore';
import RegisterStore from './RegisterStore';

class RootStore {
  constructor() {
    this.user = new UserStore(this);
    this.register = new RegisterStore(this);
  }
}

export default RootStore;
