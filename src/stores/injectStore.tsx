import React from 'react'
import { storesMap, StoresMap } from "./index";

export const StoreContext = React.createContext(storesMap)

export type Omit<T, K extends keyof T> = Pick<T, ({ [P in keyof T]: P } & { [P in K]: never })[keyof T]>;

export const injectStore = <T extends keyof StoresMap>(storeName: T) => {
  return <P extends Pick<StoresMap, T>>(
    Component: React.ComponentType<P>
  ) => {
    const withStore: React.SFC<Omit<P, T>> = (props) => (
      <StoreContext.Consumer>
        {
          (storesMap: StoresMap) => {
            const storeProp = { [storeName]: storesMap[storeName]}
            return <Component {...storeProp as any} {...props} />
          }
        }
      </StoreContext.Consumer>
    );

    withStore.displayName = `WithStoreHoc(${Component.displayName || Component.name})`;

    return withStore;
  };
};