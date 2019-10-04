import { observable, action } from "mobx";

export default class RegisterStore {
  constructor(root) {
    this.root = root;
  }

  @observable step = 4;
  @observable values = {
    name: "",
    birth: new Date(),
    email: "",
    password: ""
  };
  @observable canSubmit = false;

  @action.bound
  onChange = (name, value, rules) => {
    this.values[name] = value;

    this.check(rules);
  };

  @action
  onSubmit = () => {
    this.step < 4 ? this.step++ : this.register();
    this.canSubmit = false;
  };

  @action
  check(rules) {
    console.log(rules);
  }

  @action
  register = () => {
    console.log("Register");
  };
}
