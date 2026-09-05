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

  /**
   * Returns all available ISO 3166-1 alpha-3 codes.
   */
  public get alpha3 () : ReadonlyArray< string > {
    return this.keys.alpha3 ??= [ ...this.index( 'alpha3' ).keys() ];
  }

  /**
   * Returns all available ISO 3166-1 numeric codes.
   */
  public get numeric () : ReadonlyArray< string > {
    return this.keys.numeric ??= [ ...this.index( 'numeric' ).keys() ];
  }

  /**
   * Returns all available country names.
   */
  public get names () : ReadonlyArray< string > {
    return this.keys.name ??= [ ...this.index( 'name' ).keys() ];
  }

  /**
   * Filters countries using the specified predicate.
   * 
   * @param predicate Filter predicate.
   * @returns Matching countries.
   */
  public filter ( predicate: ( country: Country ) => boolean ) : ReadonlyArray< Country > {
    return this.countries.filter( predicate );
  }

  /**
   * Finds a country by the specified lookup field.
   * 
   * @param by Lookup field (alpha2, alpha3, numeric, name).
   * @param key Lookup value.
   * @returns The matching country, or `undefined` if not found.
   */
  public find < K extends keyof LookupIndexes > ( by: K, key: string ) : Country | undefined {
    return this.index( by ).get( key );
  }

  /**
   * Finds a country by an ISO 3166-1 alpha-2 code.
   * 
   * @param alpha2 ISO 3166-1 alpha-2 code.
   * @returns The matching country, or `undefined` if not found.
   */
  public byAlpha2 ( alpha2: string ) : Country | undefined {
    return this.index( 'alpha2' ).get( alpha2 );
  }

  /**
   * Finds a country by an ISO 3166-1 alpha-3 code.
   * 
   * @param alpha3 ISO 3166-1 alpha-3 code.
   * @returns The matching country, or `undefined` if not found.
   */
  public byAlpha3 ( alpha3: string ) : Country | undefined {
    return this.index( 'alpha3' ).get( alpha3 );
  }

  /**
   * Finds a country by an ISO 3166-1 numeric code.
   * 
   * @param numeric ISO 3166-1 numeric code.
   * @returns The matching country, or `undefined` if not found.
   */
  public byNumeric ( numeric: string ) : Country | undefined {
    return this.index( 'numeric' ).get( numeric );
  }

  /**
   * Finds a country by any known name.
   * 
   * Matches the country's name, official name, short name,
   * native name, or native official name.
   * 
   * @param name Country name.
   * @returns The matching country, or `undefined` if not found.
   */
  public byName ( name: string ) : Country | undefined {
    return this.index( 'name' ).get( name );
  }

  // --- static methods ---

  /**
   * Returns the preferred display name of a country.
   * 
   * Uses the short name when available and falls back
   * to the country's name.
   * 
   * @param country Country data.
   * @returns Preferred display name.
   */
  public static displayName ( country: Country ) : string {
    return country.shortName ?? country.name;
  }
}

/**
 * Shared lookup instance for the built-in country dataset.
 */
export const lookup = new Lookup( countries );
