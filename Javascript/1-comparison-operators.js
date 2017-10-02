'use strict';

const city = 'Kiev';
const year = 988;
const bool = true;

const sameCity = 'Kiev';
const nextYear = 1851;

// ===
console.log('------ === ------');

console.log(city === 'Kiev' ? 'city = Kiev' : 'city ≠ Kiev');
console.log(year === 988 ? 'year = 988' : 'year ≠ 988');
console.log(bool === false ? 'bool = false' : 'bool ≠ false');

console.log(city === sameCity ? 'city = sameCity' : 'city ≠ sameCity');
console.log(year === nextYear ? 'year = nextYear' : 'year ≠ nextYear');

// !==
console.log('------ !== ------');

console.log(city !== sameCity ? 'city ≠ sameCity' : 'city = sameCity');
console.log(year !== nextYear ? 'year ≠ nextYear' : 'year = nextYear');

// >=, >, <=, <
console.log('------ >=, >, <=, < ------');

console.log(year < nextYear ? 'year < nextYear' : 'year >= nextYear');
console.log(year <= nextYear ? 'year <= nextYear' : 'year > nextYear');
console.log(year > nextYear ? 'year > nextYear' : 'year <= nextYear');
console.log(year >= nextYear ? 'year >= nextYear' : 'year < nextYear');
