import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AForecast } from 'src/app/interfaces/Forecast';
import { MyWeather } from 'src/app/interfaces/MyWeather';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.css'],
})
export class SectionTwoComponent implements OnInit {
  @Input() forecasts: AForecast[] = [];
  @Input() sectionTwoLoading = true;
  @Input() weather?: MyWeather;

  viewportHeight = window.innerHeight;
  maxViewportHeight =
    window.screen.availHeight - window.outerHeight + window.innerHeight;

  @Input() isDegree: boolean = true;
  @Output() changedToDegree = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  changeToFarenhiet() {
    this.changedToDegree.emit(false);
  }

  changeToDegree() {
    this.changedToDegree.emit(true);
  }
}
