import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'

export interface ICurrentWeatherData {
  weather: [
    {
      description: string
      icon: string
    }
  ]
  main: {
    temp: number
  }
  sys: {
    country: string
  }
  dt: number
  name: string
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  getCurrentWeather(city: string, country: string) {
    return this.http.get<ICurrentWeatherData>(
      `${environment.apiUrl}/data/2.5/weather?q=${city},${country}&appid=${environment.apiKey}`
    )
  }
}
