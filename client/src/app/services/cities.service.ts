import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { CitiesResponse } from '../interfaces/cities';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private baseUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  //this is the service to get all cities data from database
  getCities(): Observable<CitiesResponse> {
    return this.http.get<CitiesResponse>(`${this.baseUrl}/all_cities`).pipe(
      catchError  ((error: any) => {
        throw error;
      })
    );
  }

  //this service updates the existing image and modifies the database
  uploadCityImage(cityId: number, image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);

    return this.http.put(`${this.baseUrl}/update_city_info/${cityId}`, formData);
  }
  
}
