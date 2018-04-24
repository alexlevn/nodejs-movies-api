let old_movie = {title: 'old moive'};
let new_movie = old_movie;

console.log(JSON.stringify(old_movie));
console.log(JSON.stringify(new_movie));

// Trong javascript: dấu '=' sẽ là tham chiếu
// Tức là hai đối tượng cùng trỏ vào một ô nhớ.

new_movie.title = 'New movie';

console.log(JSON.stringify(old_movie));
console.log(JSON.stringify(new_movie));

// Sử dụng ASSIGN
console.log('Test assign:');
let other_movie = Object.assign({}, old_movie);

console.log(JSON.stringify(old_movie));
console.log(JSON.stringify(other_movie));

other_movie.title = "Other movie";

console.log(JSON.stringify(old_movie));
console.log(JSON.stringify(other_movie));
