import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdcButtonModule} from '@angular-mdc/web/button';
import {MdcCardModule} from '@angular-mdc/web/card';

const modules: any[] = [
  CommonModule,
  MdcButtonModule,
  MdcCardModule
];

@NgModule({
  declarations: [],
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class MaterialDesignModule { }