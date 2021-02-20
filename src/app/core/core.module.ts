import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OlMapComponent } from '../map/ol-map/ol-map.component';
import { MapsModule } from '../map/maps.module';



@NgModule({
  declarations: [HomeComponent, AboutComponent, OlMapComponent],
  imports: [
    SharedModule,
    MapsModule
  ]
})
export class CoreModule { }
