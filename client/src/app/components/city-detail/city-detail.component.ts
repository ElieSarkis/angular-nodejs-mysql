import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import * as L from 'leaflet';
import { cityDetails } from '../../interfaces/cities';
import { Location } from '@angular/common';

@Component({
  selector: 'app-city-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './city-detail.component.html',
  styleUrl: './city-detail.component.css'
})
export class CityDetailComponent {
  cityParams: cityDetails = {
    city_name: '',
    longitude: '',
    latitude: '',
    landmarks: []
  };

  private map!: L.Map;
  private centroid: L.LatLngExpression = [0,0];
  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 12
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 10,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

     L.marker(this.centroid).addTo(this.map);

    tiles.addTo(this.map);
  
  }

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.cityParams.city_name = params['city_name'];
      this.cityParams.latitude = params['latitude'];
      this.cityParams.longitude = params['longitude'];
      this.cityParams.landmarks = params['landmarks'];
   
    if (
      this.cityParams.latitude !== undefined &&
      this.cityParams.longitude !== undefined
    ) {
      this.centroid = [
        parseFloat(this.cityParams.latitude),
        parseFloat(this.cityParams.longitude)
      ];
    }
    this.initMap();
    });
  }

  goBack(): void {
    this.location.back();
}
}

