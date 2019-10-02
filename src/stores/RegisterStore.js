import { observable, action } from 'mobx';

export default class RegisterStore {
  constructor(root) {
    this.root = root;
  }
  @observable name = '';
  @observable birth = '';
  @observable email = '';
  @observable password = '';
  @observable disabled = false;
  @observable step = 0;
  @observable inputs = [
    { name: 'name', label: 'Name', value: this.name },
    { name: 'birth', label: 'Date of Birth', value: this.birth },
    { name: 'email', label: 'Email', value: this.email },
    { name: 'password', label: 'Password', value: this.password }
  ];

  @action.bound
  onChange = (name, value) => {
    this[name] = value;
  };

  @action
  increaseStep = () => {
    if (this.step > 2) {
      return null;
    }
    this.step++;
  };

  @action
  register = () => {};

  @action
  check = () => {};
}
