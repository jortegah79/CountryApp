import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {

  countries: Country[] = [];
  isLoading: boolean = false;


  //public regions:['Africa','Asia','Europe','Americas','Oceania']=['Africa','Asia','Europe','Americas','Oceania'];
  public regions: Region[] = ['Africa', 'Asia', 'Europe', 'Americas', 'Oceania'];
  public selectedRegion?: Region;


  constructor(private countriesService: CountriesService) { }
  ngOnInit(): void {
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
    this.countries = this.countriesService.cacheStore.byRegion.countries;
  }
  searchByRegion(region: Region) {
    this.selectedRegion = region;
    this.isLoading = true;
    this.countriesService.searchRegion(region).subscribe(countries => {
      this.countries = countries
      this.isLoading = false;
    });

  }


}
