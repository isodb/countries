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
  officialName?: string;
  shortName?: string;
  nativeName?: string;
  nativeOfficialName?: string;

  continent: Continent;
  region?: string;
  subregion?: string;
  capital?: string;

  tel?: string;
  mobile?: string;
  tld?: string;
  languages?: string[];
  languageCodes?: string[];
  currencies?: string[];
  currencyNames?: string[];
  currencyNumericCodes?: string[];
  geonameId?: string;

  fips?: string;
  nato?: string;
  itu?: string;
  ioc?: string;
  wmo?: string;
  fifa?: string;
  marc?: string;
  ds?: string;
  m49?: string;
  gaul?: string;
  edgar?: string;
  wikidata?: string;
  uicNumeric?: string;
  uicAlpha?: string;

  vehicleCode?: string;
  aircraftPrefix?: string;
  sailCode?: string;

  natoMember?: boolean;
  independent?: boolean;
  unMember?: boolean;
}
