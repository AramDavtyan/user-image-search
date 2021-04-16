import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SearchImgService} from '../../shared/services/search.img.service';
import {debounceTime, distinctUntilChanged, pluck, switchMap, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ImgItem} from '../../shared/models/search.img.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  form: FormGroup = this.fb.group({
    name: '',
  });
  photos$?: Observable<Array<ImgItem>>;
  hoverIndex?: number;
  isPopupActive = false;
  inputItem!: ImgItem;
  constructor(private searchImgService: SearchImgService, private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.getImg();
  }
  public getImg(): void {
    this.photos$ = this.form.get(`name`)?.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((name) => this.searchImgService.getImages(name)),
        pluck('results'),
        tap(console.log),
      );
  }

  public handleMouseOver(i: number): void {
    this.hoverIndex = i;
  }
  public handleMouseOut(i: number): void {
    this.hoverIndex = -1;
  }
  public handleSaveImg(item: ImgItem): void {
    this.inputItem = item;
    this.isPopupActive = true;
  }
  public handleClose(): void {
    this.isPopupActive = false;
  }

}
