import {createAction, props} from '@ngrx/store';
import {AddOptionModel} from '../models/add.option.model';
import {AddListModel} from '../models/add.list.model';
import {AddOptionIndexModel} from '../models/add.option.index.model';
export const getLists = createAction(
  '[LIST] GET LIST'
);
export const addOption = createAction(
  '[LIST] ADD OPTION',
  props<AddOptionModel>()
);
export const addList = createAction(
  '[LIST] ADD LIST',
  props<AddListModel>()
);
export const addOptionIndex = createAction(
  '[LIST] ADD OPTION INDEX',
  props<AddOptionIndexModel>()
);
