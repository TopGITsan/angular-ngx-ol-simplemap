import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [HomeComponent, AboutComponent],
  imports: [
    SharedModule
  ]
})
export class CoreModule { }
