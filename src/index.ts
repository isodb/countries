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
