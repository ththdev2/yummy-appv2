import AuthStore from "./AuthStore";
import UserStore from "./UserStore";
import RegisterStore from "./RegisterStore";

class RootStore {
  constructor() {
    this.auth = new AuthStore(this);
    this.user = new UserStore(this);
    this.register = new RegisterStore(this);
  }
}

export default RootStore;
