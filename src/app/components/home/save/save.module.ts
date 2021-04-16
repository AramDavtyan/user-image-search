import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SaveComponent} from './save.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [SaveComponent],
  exports: [
    SaveComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SaveModule { }
