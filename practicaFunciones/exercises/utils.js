//Exercise 1.1: Function to calculate the square of a number
function calculateSquare(num) {
    return num * num;
}

//Exercise 1.2: Self-invoking function with counter
function counterSelfInvoking() {
    (function() {
        let counter = 0;
        counter++;
        console.log('Counter inside function:', counter);
    })();
    console.log(typeof counter); //Check if the variable is accessible outside the function
}

//Exercise 1.3: Self-invoking function with parameters
function concatenateString(str, num) {
    (function(str, num) {
        console.log('Result:', str + num);
    })(str, num);
}

//Exercise 1.4: Arrow function to check if a number is even
const isEven = (num) => num % 2 === 0;

//Exercise 2.1: Sum of an array iteratively and recursively
function iterativeSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function recursiveSum(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + recursiveSum(arr.slice(1));
}

//Exercise 2.2: Increase product prices by 10%
function increasePrices(products) {
    products.forEach(product => {
        product.price *= 1.1;  //Increase price by 10%
    });
    return products;
}

//Exercise 2.3: Process array of people with map, filter, and reduce
function processAges(people) {
    return people
        .filter(person => person.age > 18)
        .map(person => person.age * 2)
        .reduce((acc, age) => acc + age, 0);
}

//Practice 1: Request words, remove duplicates, and sort them
function requestWords() {
    let words = [];
    let word;

    while ((word = prompt('Enter a word (leave blank or cancel to finish):')) !== null && word.trim() !== '') {
        words.push(word.trim());
    }

    return words;
}

function removeDuplicatesAndSort(words) {
    let uniqueWords = [...new Set(words)];
    uniqueWords.sort((a, b) => b.localeCompare(a, 'en'));
    return uniqueWords;
}

function practice1() {
    let words = requestWords();
    let result = removeDuplicatesAndSort(words);
    alert('Sorted words without duplicates: ' + result.join(', '));
}

//Practice 2: Word map with occurrence count
function countWords(words) {
    let map = new Map();
    words.forEach(word => {
        if (map.has(word)) {
            map.set(word, map.get(word) + 1);
        } else {
            map.set(word, 1);
        }
    });
    return map;
}

function practice2() {
    let words = requestWords();
    let wordMap = countWords(words);
    let result = '';
    wordMap.forEach((value, key) => {
        result += `${key}: ${value}\n`;
    });
    alert('Word count:\n' + result);
}

//Practice 3: Implement custom filter function
function customFilter(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = callback(arr[i]);
    }
    return arr;
}
