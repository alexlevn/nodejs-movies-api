let a = 'Happy New Day, happy new year',
    b = 'new';

// ES5: indexOf(substring)
console.log(a.indexOf(b));
console.log(a.search(b));
console.log(a.search(/new/));

// ES6:
console.log(a.includes(b));