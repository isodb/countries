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
  name: Name;
  officialName: Name;
  shortName: Name;
  continent: Continent;
  telephoneCode: TelephoneCode;
  fifa: Code;
  fips: Code;
  uicNumeric: Code;
  uicAlpha: Code;
  aircraftPrefix: Code;
  sailCode: Code;
}
