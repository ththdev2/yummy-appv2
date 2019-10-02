import { observable, action } from 'mobx';

export default class RegisterStore {
  constructor(root) {
    this.root = root;
  }

  @observable step = 0;

  @observable name = '';
  @observable birth = '';
  @observable email = '';
  @observable password = '';

  @action.bound
  onChange = (name, value) => {
    this[name] = value;
  };

  @action
  onSubmit = () => {
    if (this.step > 2) {
      return null;
    }
    this.step++;
  };

  @action
  register = () => {};
}
