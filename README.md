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

## Dataset

Each entry contains the following information:

| Property               | Description                                          |
|------------------------|------------------------------------------------------|
| `alpha2`               | ISO 3166-1 alpha-2 country code                      |
| `alpha3`               | ISO 3166-1 alpha-3 country code                      |
| `numeric`              | ISO 3166-1 numeric country code                      |
| `name`                 | Primary country name                                 |
| `officialName`         | Official country name                                |
| `shortName`            | Common or short country name                         |
| `nativeName`           | Native country name                                  |
| `nativeOfficialName`   | Native official country name                         |
| `continent`            | Continent                                            |
| `region`               | Geographic region                                    |
| `subregion`            | Geographic subregion                                 |
| `capital`              | Capital city                                         |
| `tel`                  | International telephone calling code                 |
| `mobile`               | International mobile telephone calling code          |
| `tld`                  | Country-code top-level domain                        |
| `languages`            | Languages spoken in the country                      |
| `languageCodes`        | Language codes                                       |
| `currencies`           | ISO 4217 currency codes                              |
| `currencyNames`        | Currency names                                       |
| `currencyNumericCodes` | ISO 4217 numeric currency codes                      |
| `geonameId`            | GeoNames identifier                                  |
| `fips`                 | FIPS 10-4 country code                               |
| `nato`                 | NATO country code                                    |
| `itu`                  | ITU country code                                     |
| `ioc`                  | IOC country code                                     |
| `wmo`                  | WMO country code                                     |
| `fifa`                 | FIFA country code                                    |
| `marc`                 | MARC country code                                    |
| `ds`                   | U.S. Department of State country code                |
| `m49`                  | UN M49 country code                                  |
| `gaul`                 | GAUL country code                                    |
| `edgar`                | SEC EDGAR country code                               |
| `wikidata`             | Wikidata identifier                                  |
| `uicNumeric`           | UIC numeric country code                             |
| `uicAlpha`             | UIC alpha country code                               |
| `vehicleCode`          | International vehicle registration code              |
| `aircraftPrefix`       | Aircraft registration prefix                         |
| `sailCode`             | International sailing code                           |
| `natoMember`           | Whether the country is a NATO member                 |
| `independent`          | Whether the country is an independent state          |
| `unMember`             | Whether the country is a United Nations member state |

Optional properties are omitted when no value is available in the source data.
