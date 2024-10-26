// Practice 1: Request words, remove duplicates, and sort them
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

// Practice 2: Word map with occurrence count
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

// Practice 3: Implement custom filter function
function customFilter(arr, callback) {
    const arrModified = arr.map( elem => callback(elem))
    return arrModified;
}