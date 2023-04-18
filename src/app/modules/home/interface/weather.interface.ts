export interface IWeather{
  name: string;
  weather: {
    description: string;
    icon: string;
    main: string;
  }[];
  sys: {
    country: string;
  };
  main: {
    temp: string;
    humidity: string;
    pressure: string;
  };
  coord: {
    lat: string;
    lon: string;
  };
  visibility: number;
}
