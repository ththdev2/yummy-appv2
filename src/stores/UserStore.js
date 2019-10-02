import { observable, action } from 'mobx';

export default class UserStore {
  constructor(root) {
    this.root = root;
  }

  @observable
  name = 'Kevin';
  email = 'th3425xogm@gmail.com';
  photoUrl = '';
}
