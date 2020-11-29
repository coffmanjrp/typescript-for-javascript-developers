export {};

/* Number array */
let numbers: number[] = [1, 2, 3];

let numbers2: Array<number> = [1, 2, 3]; /* 非推奨 */

console.log(numbers[0]);

/* String array */
let strings: string[] = ['Typescript', 'Javascript', 'Coffeescript'];

let strings2: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];

console.log(strings[1]);

/* Multi dimensions array */
let doubleDimensionalArray: number[][] = [
  [50, 100],
  [150, 300],
];

console.log(doubleDimensionalArray[1][0]);

/* Union types array */
let unionArray: (number | boolean | string)[] = [1, false, 'Japan'];

console.log(unionArray[2]);
