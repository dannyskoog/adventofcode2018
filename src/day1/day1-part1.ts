import { from } from 'rxjs';
import { reduce } from 'rxjs/operators';
import * as input from './day1.txt';

const frequencyChanges = input
	.split('\n')
	.map(val => parseInt(val));

const resultingFrequency$ = from(frequencyChanges)
	.pipe(
		reduce((acc, val) => acc + val)
	);

resultingFrequency$.subscribe(val => console.log(`Day 1 - Part 1: ${val}`));