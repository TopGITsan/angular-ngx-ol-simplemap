import { Component, OnInit } from '@angular/core';
import {View, Feature, Map } from 'ol';
import { Coordinate } from 'ol/coordinate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  center: Coordinate= [4558595, 1555957];
  constructor() { }

  ngOnInit(): void {
  }

  public onMapReady(map: Map) {
    console.log("Map Ready", map);
  }

  public setCenter(){
    console.log("set center");
  }

}
