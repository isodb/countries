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

type Tuple = [ string, Country ];

/**
 * Provides lookup and filtering utilities for countries.
 * 
 * Lookup indexes are created lazily on first access and
 * cached for subsequent queries.
 */
export class Lookup {
  private readonly countries: ReadonlyArray< Country >;
  private readonly indexes: LookupIndexes = {};
  private readonly keys: LookupKeys = {};

  constructor ( countries: ReadonlyArray< Country > ) {
    this.countries = countries;
  }

  private index < K extends keyof LookupIndexes > ( key: K ) : ReadonlyMap< string, Country > {
    return this.indexes[ key ] ??= new Map( key === 'name' ? this.countries.flatMap( country => [
      [ country.name, country ] as Tuple,
      ...( country.officialName ? [ [ country.officialName, country ] as Tuple ] : [] ),
      ...( country.shortName ? [ [ country.shortName, country ] as Tuple ] : [] ),
      ...( country.nativeName ? [ [ country.nativeName, country ] as Tuple ] : [] ),
      ...( country.nativeOfficialName ? [ [ country.nativeOfficialName, country ] as Tuple ] : [] )
    ] ) : this.countries.map( country => [ country[ key ], country ] as Tuple ) );
  }

  /**
   * Returns all available ISO 3166-1 alpha-2 codes.
   */
  public get alpha2 () : ReadonlyArray< string > {
    return this.keys.alpha2 ??= [ ...this.index( 'alpha2' ).keys() ];
  }
}
