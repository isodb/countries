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
