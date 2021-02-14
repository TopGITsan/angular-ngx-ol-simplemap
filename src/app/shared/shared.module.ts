import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [BsDropdownModule.forRoot()],
  exports:[CommonModule, AlertModule, BsDropdownModule, BrowserAnimationsModule]
})
export class SharedModule { }
