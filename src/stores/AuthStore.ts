import { observable, computed } from 'mobx';
import { AsyncStorage } from 'react-native';
import { User } from '~/models/User';
import { encrypt } from '~/utils/encryptor';
import navigator from '~/utils/navigator';

class AuthStore {
  @observable currentUser = null;

  @computed get isAuthenticated() {
    return Boolean(this.currentUser);
  }

  public loadCurrentUser = async () => {
    await AsyncStorage.clear();
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
}

export default AuthStore;
