import { createReducer, on } from '@ngrx/store';

import { ListActions } from '../actions';
import {AddListModel} from '../models/add.list.model';

export const layoutFeatureKey = 'list';

export interface State {
  options: Array<string>;
  savedItems: Array<AddListModel>;
}

const initialState: State = {
  options: [],
  savedItems: [],
};

export const reducer = createReducer(
  initialState,
  on(ListActions.getLists, (state) => ({ ...state })),
  on(ListActions.addOption, (state, {optionName}) => ({ ...state, options: [...state.options, optionName] })),
  on(ListActions.addList, (state, item) => ({ ...state, savedItems: [...state.savedItems, item] })),
);
