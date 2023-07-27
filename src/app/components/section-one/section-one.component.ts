import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Location } from 'src/app/interfaces/Location';
import { MyWeather } from 'src/app/interfaces/MyWeather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.css'],
})
export class SectionOneComponent implements OnInit {
  viewportHeight = window.innerHeight;
  viewportWidth = window.innerWidth;
  @Input() logAndLatSet = false;
  @Input() latitude = 0;
  @Input() longitude = 0;
  @Input() weather?: MyWeather;
  @Input() image: string = '';
  @Input() today = '';
  @Input() loading = true;
  searchTerm: string = '';
  hide = true;

  @Input() isDegree: boolean = true;
  locations: Location[] = [];
  @Output() onLocationClick = new EventEmitter();
  @ViewChild('theOffCanvas') myOffCanvas?: ElementRef;

  maxViewportHeight =
    window.screen.availHeight - window.outerHeight + window.innerHeight;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.viewportWidth = event.target.innerWidth;
    // console.log('event.target.innerWidth', event.target.innerWidth);
    // console.log('event.target.innerHeight', event.target.innerHeight);
  }

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  hideCanvas() {
    let openedCanvas = bootstrap.Offcanvas.getInstance(
      this.myOffCanvas?.nativeElement
    );
    openedCanvas.hide();
  }

  makeSearch(location: Location) {
    this.hideCanvas();
    // this.hide = false;
    this.onLocationClick.emit(location);
  }

  clearSearch() {
    this.searchTerm = '';
  }
}
