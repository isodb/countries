# @isodb/countries

Typed reference data for countries and their common geographic and international identifiers.

Provides immutable datasets and convenient lookup utilities for common country identifiers such as ISO codes, names, and other international identifiers.

Part of the **[isodb](https://github.com/isodb)** project, providing typed reference datasets for developers.

## Features

- Includes countries and territories from the ISO 3166-1 dataset
- ISO 3166-1 alpha-2, alpha-3, and numeric codes
- Multiple country names, including native and official names
- Geographic information such as continents, regions, and subregions
- Capital cities, languages, currencies, and telephone codes
- Additional international identifiers such as FIPS, NATO, IOC, FIFA, and UN M49
- Zero dependencies
- Immutable datasets
- Fully typed with TypeScript
- Lazy lookup indexes
- Tree-shakeable API

## Installation

```bash
npm install @isodb/countries
```

## Usage

### Import the dataset

```ts
import { data } from '@isodb/countries';
console.log( data.length );
```

### Lookup by ISO 3166-1 alpha-2 code

Finds a country by its two-letter ISO 3166-1 alpha-2 code:

```ts
import { byAlpha2 } from '@isodb/countries';

const germany = byAlpha2( 'DE' );
console.log( germany?.capital );
```

### Lookup by ISO 3166-1 alpha-3 code

Finds a country by its three-letter ISO 3166-1 alpha-3 code:

```ts
import { byAlpha3 } from '@isodb/countries';
const germany = byAlpha3( 'DEU' );
```

### Lookup by ISO 3166-1 numeric code

Finds a country by its three-digit ISO 3166-1 numeric code:

```ts
import { byNumeric } from '@isodb/countries';
const germany = byNumeric( '276' );
```

### Lookup by name

Finds a country by any known country name, including its primary, official, short, native, or native official name:

```ts
import { byName } from '@isodb/countries';
const germany = byName( 'Germany' );
const deutschland = byName( 'Deutschland' );
```

### Filter the dataset

Filters countries using the specified predicate:

```ts
import { filter } from '@isodb/countries';
const europeanCountries = filter( country => country.continent === 'Europe' );
```

### Using the lookup service

```ts
import { lookup } from '@isodb/countries';

lookup.byAlpha2( 'DE' );
lookup.byAlpha3( 'DEU' );
lookup.byNumeric( '276' );
lookup.byName( 'Germany' );

lookup.alpha2;
lookup.alpha3;
lookup.numeric;
lookup.names;
```

### Display names

The package provides helpers for selecting preferred country names:

```ts
import { byAlpha2, displayName, officialName, nativeName } from '@isodb/countries';

const germany = byAlpha2( 'DE' );

displayName( germany! );
officialName( germany! );
nativeName( germany! );
```

The helpers use sensible fallbacks when a preferred name is not available.

### Default export

```ts
import countries from '@isodb/countries';

countries.byAlpha2( 'US' );
countries.countries;
countries.displayName( countries.byAlpha2( 'DE' )! );
```
