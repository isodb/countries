/**
 * Countries
 * 
 * Typed reference data for countries and their common
 * geographic and international identifiers.
 * 
 * Provides immutable datasets and convenient lookup utilities
 * for common country identifiers such as ISO codes and names.
 * 
 * @author Paul Köhler (komed3)
 * @license MIT
 */

import { countries as data } from './data/countries';
import { Lookup, lookup } from './lookup';

export type * from './types';
export { data, lookup };

/**
 * Finds a country by its ISO 3166-1 alpha-2 code.
 */
export const byAlpha2 = lookup.byAlpha2.bind( lookup );

/**
 * Finds a country by its ISO 3166-1 alpha-3 code.
 */
export const byAlpha3 = lookup.byAlpha3.bind( lookup );

/**
 * Finds a country by its ISO 3166-1 numeric code.
 */
export const byNumeric = lookup.byNumeric.bind( lookup );

/**
 * Finds a country by any known country name.
 */
export const byName = lookup.byName.bind( lookup );

/**
 * Filters countries using the specified predicate.
 */
export const filter = lookup.filter.bind( lookup );

/**
 * Returns the preferred display name of a country.
 */
export const displayName = Lookup.displayName;

/**
 * Returns the preferred official name of a country.
 */
export const officialName = Lookup.officialName;

/**
 * Returns the preferred native name of a country.
 */
export const nativeName = Lookup.nativeName;

/**
 * Complete package API.
 */
export const countries = {
  countries: data, lookup,
  byAlpha2, byAlpha3, byNumeric, byName, filter,
  displayName, officialName, nativeName
};

export default countries;
