import { Component, Input, OnInit } from '@angular/core';
import { AForecast } from 'src/app/interfaces/Forecast';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent implements OnInit {
  @Input() forecast?: AForecast;
  @Input() isDegree?: boolean;
  @Input() cardNo?: number;

  constructor() {}

  ngOnInit(): void {}
}
