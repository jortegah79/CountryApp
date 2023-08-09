import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  private apiURL: string = "https://restcountries.com/v3.1";
  //name/{name}

  constructor(private http: HttpClient) { }

  searchCapital(term: string): Observable<Country[]> {

    const url=`${this.apiURL}/capital/${term}`;

    return this.http.get<Country[]>(`${url}`).pipe(catchError(er=>of([])));

  }
  searchCountry(term: string): Observable<Country[]> {

    const url=`${this.apiURL}/name/${term}`;

    return this.http.get<Country[]>(`${url}`).pipe(catchError(er=>of([])));

  }
  searchRegion(region: string): Observable<Country[]> {

    const url=`${this.apiURL}/region/${region}`;

    return this.http.get<Country[]>(`${url}`).pipe(catchError(er=>of([])));

  }
}
