import { observable, action } from 'mobx';

class UserStore {
  @observable
  name = 'Kevin';
  email = 'th3425xogm@gmail.com';
  photoUrl = '';
}

const store = new UserStore();
export default store;
