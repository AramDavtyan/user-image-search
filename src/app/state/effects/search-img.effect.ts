import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';

@Injectable()
export class SearchImgEffect {
  constructor(private actions$: Actions) {}
}
