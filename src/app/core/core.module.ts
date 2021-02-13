import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [HomeComponent, AboutComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CoreModule { }
