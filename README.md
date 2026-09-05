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
