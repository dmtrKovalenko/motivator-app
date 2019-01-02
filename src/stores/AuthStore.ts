import { observable, computed, action } from 'mobx';
import { AsyncStorage } from 'react-native';
import { User } from '~/models/User';
import { encrypt } from '~/utils/encryptor';
import navigator from '~/utils/navigator';

class AuthStore {
  @observable currentUser: User | null = null;
  @observable isAuthenticated = false;

  @computed get canAuthenticate() {
    return Boolean(this.currentUser);
  }

  @action
  public loadCurrentUser = async () => {
    const savedUserJson = await AsyncStorage.getItem('currentUser');

    if (savedUserJson) {
      this.currentUser = JSON.parse(savedUserJson);
    }
  };

  public register = async (userData: User) => {
    const user = {
      ...userData,
      password: encrypt(userData.password),
      goal: typeof userData.goal !== 'number'
        ? parseFloat(userData.goal)
        : userData.goal,
      weight: typeof userData.weight !== 'number'
        ? parseFloat(userData.weight)
        : userData.weight,
    };

    await AsyncStorage.setItem('currentUser', JSON.stringify(user));
    navigator.navigate('Home');
  };

  @action
  public authenticate = (password: string) => {
    if (this.canAuthenticate) {
      const hash = encrypt(password)
      
      if (hash === this.currentUser!.password) {
        this.isAuthenticated = true
        navigator.navigate('Home')
      }
    }

    return false
  }
}

export default AuthStore;
