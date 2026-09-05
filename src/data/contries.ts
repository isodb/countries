import { Country } from '../types';

export const countries = [ {
  alpha2: 'DE',
  alpha3: 'DEU',
  numeric: '276',
  name: 'Federal Republic of Germany',
  officialName: 'Bundesrepublik Deutschland',
  shortName: 'Germany',
  continent: 'Europe',
  capital: 'Berlin',
  tel: '49',
  mobile: '262',
  tld: 'de',
  fips: 'GM',
  nato: 'DE',
  itu: 'D',
  uicNumeric: '80',
  uicAlpha: 'DE',
  vehicleCode: 'D',
  aircraftPrefix: 'D',
  sailCode: 'GER'
} ] as const satisfies ReadonlyArray< Country >;
