import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../../services/cities.service';
import { CitiesResponse, City } from '../../interfaces/cities';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [CitiesService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  citiesResponse: CitiesResponse = { cities: [] };
  images: File | undefined;

  constructor(private citiesService: CitiesService, private router: Router) {}

  ngOnInit() {
    this.citiesService.getCities().subscribe(
      (data: CitiesResponse) => {
        this.citiesResponse = data;
        this.citiesResponse.cities.forEach(
          (city) => (city.imageSelected = false)
        );
      },
      (error) => {}
    );
  }

  onSelectImage(event: Event, city: City) {
    event.preventDefault();
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      this.images = file;
      city.imageSelected = true;
    }
  }

  onUploadImage(event: Event, city_id: number) {
    event.stopPropagation();
    if (city_id && this.images) {
      this.citiesService.uploadCityImage(city_id, this.images).subscribe(
        () => {
          this.refreshCitiesData();
          this.images = undefined;
        },
        (error: HttpErrorResponse) => {}
      );
    } else {
    }
  }

  private refreshCitiesData() {
    this.citiesService.getCities().subscribe(
      (data: CitiesResponse) => {
        this.citiesResponse = data;
      },
      (error) => {}
    );
  }

  //we pick the params that we need to send to the details page in order to display them
  redirectToCity(city: City) {
    if (city) {
      const queryParams = {
        city_name: city.city_name,
        longitude: city.longitude,
        latitude: city.latitude,
        landmarks: city.landmarks,
      };
      this.router.navigate(['/city', city.city_name], { queryParams });
    } else {
    }
  }
}
