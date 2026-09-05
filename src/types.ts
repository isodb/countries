export type Continent =
  | 'Africa'
  | 'Antarctica'
  | 'Asia'
  | 'Europe'
  | 'North America'
  | 'Oceania'
  | 'South America';

export interface Country {
  alpha2: string;
  alpha3: string;
  numeric: string;

  name: string;
  officialName: string;
  shortName: string;

  continent: Continent;
  capital: string;

  tel: string;
  mobile: string;
  tld: string;

  fifa: string;
  fips: string;
  nato: string;
  itu: string;
  uicNumeric: string;
  uicAlpha: string;

  vehiclestring: string;
  aircraftPrefix: string;
  sailstring: string;
}
