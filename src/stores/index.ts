import AuthStore from './AuthStore'

export const storesMap = { 
  authStore: new AuthStore()
}

export type StoresMap = typeof storesMap;
