import { observable } from 'mobx';
import { AsyncStorage } from 'react-native';

class AuthStore {
  @observable currentUser = null;
  
  public loadCurrentUser = async () => {
    const savedUserJson = await AsyncStorage.getItem('currentUser')

    if (savedUserJson) {
      this.currentUser = JSON.parse(savedUserJson)
    }
  }
}

export default AuthStore