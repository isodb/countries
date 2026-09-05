/**
 * Lookup utilities for countries.
 */

import { countries } from './data/countries';
import type { Country } from './types';

type LookupIndexes = {
  alpha2?: ReadonlyMap< string, Country >;
  alpha3?: ReadonlyMap< string, Country >;
  numeric?: ReadonlyMap< string, Country >;
  name?: ReadonlyMap< string, Country >;
};

type LookupKeys = {
  alpha2?: ReadonlyArray< string >;
  alpha3?: ReadonlyArray< string >;
  numeric?: ReadonlyArray< string >;
  name?: ReadonlyArray< string >;
};
