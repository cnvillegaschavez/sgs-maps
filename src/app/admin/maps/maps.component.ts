import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { FirebaseService } from 'src/app/core/services/firebase.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  @ViewChild(GoogleMap, { static: false }) map: GoogleMap | undefined;
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow | undefined;

  zoom = 18;
  center: google.maps.LatLngLiteral = {  lat: 10, lng: 10 };
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
  };
  markers = [{
    position: {
      lat: 0,
      lng: 0
    },
    label: {
      color: 'blue',
      text: ''
    },
    title: '',
    info: '',
    options: {
      animation: google.maps.Animation.BOUNCE
    }
  }];
  infoContent = '';

  constructor(private firebaseService: FirebaseService) {

  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(x => {
      this.center = {
        lat: x.coords.latitude,
        lng: x.coords.longitude
      };
      const list = this.firebaseService.getMarkets();
      this.markers = list;
    });
  }

  openInfo(marker: MapMarker, infoData: any): void {
    this.infoContent = infoData.info;
    if (this.info){
      this.info.open(marker);
    }
  }
}
