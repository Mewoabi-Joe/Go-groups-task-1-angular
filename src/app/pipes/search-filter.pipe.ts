import { Pipe, PipeTransform } from '@angular/core';
import { Location } from '../interfaces/Location';
import { WeatherService } from '../services/weather.service';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  constructor(private weatherService: WeatherService) {}
  places: Location[] = [];

  transform(locations: Location[], searchTerm: string): Location[] {
    this.weatherService.getPlaceBySearch(searchTerm).subscribe({
      next: (places) => {
        this.places = places;
      },
      error: (e) => console.error(e),
    });
    return this.places;
  }
}
