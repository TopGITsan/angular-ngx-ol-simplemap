import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  NgZone,
  OnInit,
  Output,
} from '@angular/core';
import { View, Feature, Map } from 'ol';
import * as olProj from 'ol/proj';
import { Coordinate } from 'ol/coordinate';
import { ScaleLine, defaults as DefaultControls } from 'ol/control';
import * as proj4x from 'proj4';
import VectorLayer from 'ol/layer/Vector';
import Projection from 'ol/proj/Projection';
import { register } from 'ol/proj/proj4';
import { get as GetProjection } from 'ol/proj';
import { Extent } from 'ol/extent';
import TileLayer from 'ol/layer/Tile';
import OSM, { ATTRIBUTION } from 'ol/source/OSM';

@Component({
  selector: 'app-ol-map',
  templateUrl: './ol-map.component.html',
  styleUrls: ['./ol-map.component.scss'],
})
export class OlMapComponent implements OnInit {
  @Input() center!: Coordinate;
  @Input() zoom!: number;
  view!: View;
  projection!: Projection;
  extent: Extent = [-20026376.39, -20048966.1, 20026376.39, 20048966.1];
  Map!: Map;
  @Output() mapReady = new EventEmitter<Map>();

  constructor(private zone: NgZone, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (!this.Map) {
      this.zone.runOutsideAngular(() => this.initMap());
    }
    setTimeout(() => this.mapReady.emit(this.Map));
  }

  private initMap(): void {
    const proj4 = (proj4x as any).default;
    console.log(proj4);
    proj4.defs(
      'EPSG:3857',
      '+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs'
    );
    register(proj4);
    this.projection = GetProjection('EPSG:3857');
    this.projection.setExtent(this.extent);
    this.view = new View({
      center: olProj.fromLonLat(this.center),
      zoom: this.zoom,
      // projection: this.projection,
    });
    this.Map = new Map({
      layers: [
        new TileLayer({
          source: new OSM({}),
        }),
      ],
      target: 'map',
      view: this.view,
      controls: DefaultControls().extend([new ScaleLine({})]),
    });
  }

  private centerMap(long: number, lat: number, map: Map) {
    console.log('Long: ' + long + ' Lat: ' + lat);
    map.getView()
      .setCenter(olProj.transform([long, lat], 'EPSG:4326', 'EPSG:3857'));
    map.getView().setZoom(10);
    // 46.909555, 10.818133
    // 9.605261 47.103877
    // [center]="[-483281,6904172]"
  }
}
