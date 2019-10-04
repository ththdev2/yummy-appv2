import { observable, action } from 'mobx';

export default class RegisterStore {
  constructor(root) {
    this.root = root;
  }

  @observable step = 4;
  @observable name = '';
  @observable birth = new Date();
  @observable email = '';
  @observable password = '';
  @observable canSubmit = false;

  @action.bound
  onChange = (name, value, rules) => {
    this[name] = value;

    if (rules) {
      this.check(rules);
    }
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
    console.log('Register');
  };
}
