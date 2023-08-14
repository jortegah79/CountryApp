import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit{

  countries: Country[] = [];
  isLoading: boolean = false;
  initialValue:string="";

  constructor(private countriesService: CountriesService) { }
  ngOnInit(): void {
    this.initialValue=this.countriesService.cacheStore.byCapital.term;
    this.countries=this.countriesService.cacheStore.byCapital.countries;
  }

  searchByCapital(term: string) {
    this.isLoading = true;
    const data = this.countriesService.searchCapital(term).subscribe(countries => {
      this.countries = countries;
      this.isLoading = false;
    });


  }

}
