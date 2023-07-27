import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-large-card',
  templateUrl: './large-card.component.html',
  styleUrls: ['./large-card.component.css'],
})
export class LargeCardComponent implements OnInit {
  @Input() name: string = '';
  @Input() value?: number;
  @Input() unit: string = '';
  @Input() windDir?: string = '';
  @Input() windDeg?: number;

  constructor() {}

  ngOnInit(): void {}
}
