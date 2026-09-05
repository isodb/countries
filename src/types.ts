/**
 * Continent.
 */
export type Continent =
  | 'Africa'
  | 'Antarctica'
  | 'Asia'
  | 'Europe'
  | 'North America'
  | 'Oceania'
  | 'South America';

/**
 * Represents a country and its common geographic and international identifiers.
 */
export interface Country {
  /** ISO 3166-1 alpha-2 country code. */
  alpha2: string;
  /** ISO 3166-1 alpha-3 country code. */
  alpha3: string;
  /** ISO 3166-1 numeric country code. */
  numeric: string;

  /** Primary English country name. */
  name: string;
  /** Official English country name. */
  officialName?: string;
  /** Common or short country name. */
  shortName?: string;
  /** Native country name. */
  nativeName?: string;
  /** Native official country name. */
  nativeOfficialName?: string;

  /** Continent. */
  continent: Continent;
  /** Geographic region. */
  region?: string;
  /** Geographic subregion. */
  subregion?: string;
  /** Capital city. */
  capital?: string;

  /** International telephone calling code. */
  tel?: string;
  /** International mobile telephone calling code. */
  mobile?: string;
  /** Country-code top-level domain. */
  tld?: string;
  /** Languages spoken in the country. */
  languages?: string[];
  /** Language codes. */
  languageCodes?: string[];
  /** ISO 4217 currency codes. */
  currencies?: string[];
  /** Currency names. */
  currencyNames?: string[];
  /** ISO 4217 numeric currency codes. */
  currencyNumericCodes?: string[];
  /** GeoNames identifier. */
  geonameId?: string;

  /** FIPS 10-4 country code. */
  fips?: string;
  /** NATO country code. */
  nato?: string;
  /** ITU country code. */
  itu?: string;
  /** IOC country code. */
  ioc?: string;
  /** WMO country code. */
  wmo?: string;
  /** FIFA country code. */
  fifa?: string;
  /** MARC country code. */
  marc?: string;
  /** U.S. Department of State country code. */
  ds?: string;
  /** UN M49 country code. */
  m49?: string;
  /** GAUL country code. */
  gaul?: string;
  /** SEC EDGAR country code. */
  edgar?: string;
  /** Wikidata identifier. */
  wikidata?: string;
  /** UIC numeric country code. */
  uicNumeric?: string;
  /** UIC alpha country code. */
  uicAlpha?: string;

  /** International vehicle registration code. */
  vehicleCode?: string;
  /** Aircraft registration prefix. */
  aircraftPrefix?: string;
  /** International sailing code. */
  sailCode?: string;

  /** Whether the country is a NATO member. */
  natoMember?: boolean;
  /** Whether the country is an independent state. */
  independent?: boolean;
  /** Whether the country is a United Nations member state. */
  unMember?: boolean;
}
