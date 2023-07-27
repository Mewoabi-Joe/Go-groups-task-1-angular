export interface Forecast {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  current: {
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
    };
    wind_mph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    humidity: number;
    cloud: number;
    vis_miles: number;
    uv: number;
  };
  forecast: {
    forecastday: [
      {
        date: string;
        day: {
          maxtemp_c: number;
          maxtemp_f: number;
          mintemp_c: number;
          mintemp_f: number;
          condition: {
            icon: string;
          };
        };
        astro: {};
        hour: [
          {
            condition: {};
          }
        ];
      }
    ];
  };
}

export interface AForecast {
  date: string;
  day: {
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    condition: {
      icon: string;
    };
  };
  astro: {};
  hour: [
    {
      condition: {};
    }
  ];
}
