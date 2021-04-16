import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component';
import {ReactiveFormsModule} from '@angular/forms';
import {PopupModule} from '../../shared/components/popup/popup.module';
import {SaveModule} from './save/save.module';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [HomeComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PopupModule,
        SaveModule,
        RouterModule,
    ]
})
export class HomeModule { }
