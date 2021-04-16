import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromList from '../../state/reducers/search-img.reducer';
import {Observable} from 'rxjs';
import {pluck} from 'rxjs/operators';
import {AddListModel} from '../../state/models/add.list.model';

@Component({
  selector: 'app-favorite-img',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.less']
})
export class FavoriteImgComponent implements OnInit {
  res = 8;
  public savedItem$: Observable<Array<AddListModel>> = this.store$.pipe(
    pluck('list', 'savedItems'));
  constructor(private store$: Store<fromList.State>) { }

  public ngOnInit(): void {}

}
