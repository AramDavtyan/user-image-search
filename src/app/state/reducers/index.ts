import {Action, ActionReducerMap} from '@ngrx/store';
import {InjectionToken} from '@angular/core';
import * as fromList from './search-img.reducer';
import * as fromRouter from '@ngrx/router-store';



export interface State {
  [fromList.layoutFeatureKey]: fromList.State;
  router: fromRouter.RouterReducerState<any>;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
  >('Root reducers token', {
  factory: () => ({
    [fromList.layoutFeatureKey]: fromList.reducer,
    router: fromRouter.routerReducer,
  }),
});
