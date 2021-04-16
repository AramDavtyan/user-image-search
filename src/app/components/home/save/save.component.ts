import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromList from '../../../state/reducers/search-img.reducer';
import {pluck} from 'rxjs/operators';
import {ListActions} from '../../../state/actions';
import {ImgItem} from '../../../shared/models/search.img.model';



@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.less']
})
export class SaveComponent {
  @Input() public inputItem!: ImgItem;
  @Output() public closeButtonChange = new EventEmitter();
  createListForm: FormGroup = this.fb.group({
    listOptions: [''],
    create: '',
  });
  public options$: Observable<Array<string>> = this.store$.pipe(pluck('list', 'options'));
  constructor(private store$: Store<fromList.State>, private fb: FormBuilder) { }

  public handleCreate(): void {
    const optionName = this.createListForm.get('create')?.value;
    this.store$.dispatch(ListActions.addOption({optionName}));
  }

  public handleSave(): void {
    const optionIndex = this.createListForm.get('listOptions')?.value;
    const props = {
      description: this.inputItem?.alt_description,
      title: this.inputItem?.tags[0]?.title,
      url: this.inputItem?.urls?.small,
    };
    this.store$.dispatch(ListActions.addList(props));
    this.store$.dispatch(ListActions.addOptionIndex({optionIndex}));
    this.closeButtonChange.emit(true);
  }
}
