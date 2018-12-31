import { NavigationActions, NavigationContainerComponent, NavigationParams } from 'react-navigation';

let _dispatchFn: NavigationContainerComponent["dispatch"];

function setTopLevelNavigator(dispatchFn: NavigationContainerComponent["dispatch"]) {
  if (!dispatchFn) {
    throw new Error("Navigator ref should be provided for setTopLevelNavigator")
  }

  _dispatchFn = dispatchFn;
}

function navigate(routeName: string, params: NavigationParams = {}) {
  _dispatchFn(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

export default {
  navigate,
  setTopLevelNavigator,
}