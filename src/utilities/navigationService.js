import React from 'react';
import { StackActions, NavigationActions } from 'react-navigation';

export function getStackResetAction(routeNames, index = 0) {
  const actionJson = { index };

  if (Array.isArray(routeNames)) {
    actionJson.actions = routeNames.map(route => NavigationActions.navigate({ routeName: route }));
  } else {
    actionJson.actions = [NavigationActions.navigate({ routeName: routeNames })];
  }
  return StackActions.reset(actionJson);
}
