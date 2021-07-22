import { Component, OnInit } from '@angular/core'

import { ICurrentWeather } from '../shared/interfaces'
import { WeatherService } from '../shared/weather.service'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  current!: ICurrentWeather

  constructor(private weatherService: WeatherService) {
    this.current = {
      city: '',
      country: '',
      date: new Date().getDate(),
      image: '',
      temperature: 0,
      description: '',
    }
  }

  ngOnInit(): void {
    this.weatherService
      .getCurrentWeather('Pune', 'IND')
      .subscribe((data) => (this.current = data))
  }
}
