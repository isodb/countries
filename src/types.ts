export type Continent =
  | 'Africa'
  | 'Antarctica'
  | 'Asia'
  | 'Europe'
  | 'North America'
  | 'Oceania'
  | 'South America';

export type Code = string;
export type Name = string;
export type TelephoneCode = string;

export interface Country {
  alpha2: Code;
  alpha3: Code;
  numeric: Code;
  name: Name;
  officialName: Name;
  shortName: Name;
  continent: Continent;
  tel: TelephoneCode;
  mobile: Code;
  tld: Code;
  fifa: Code;
  fips: Code;
  nato: Code;
  itu: Code;
  uicNumeric: Code;
  uicAlpha: Code;
  vehicleCode: Code;
  aircraftPrefix: Code;
  sailCode: Code;
}
