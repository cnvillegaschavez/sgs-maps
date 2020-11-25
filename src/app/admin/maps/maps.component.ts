import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  @ViewChild(GoogleMap, { static: false }) map: GoogleMap | undefined;
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow | undefined;

  zoom = 18;
  center: google.maps.LatLngLiteral | undefined;
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
  };
  markers = [];
  infoContent = '';

  items: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('items').valueChanges();
  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(x => {

      this.center = {
        lat: x.coords.latitude,
        lng: x.coords.longitude
      };
      //this.itemRef.set({ location: this.center  });

      //this.markers.push();
    });
  }

}
