let a = [
        1, 2, 3
    ],
    b = [
        4, 5
    ],
    c = ['number', 'digit'];

// let d = a; // Cùng tham chiếu đến 1 địa chỉ giống object
let d = a.slice(); // Cắt ra 1 phần
// let d = a.concat(); // kết quả tương tự slide, trỏ vào ô nhớ khác

d = [].concat(b, c, a); // Nối mảng, tạo ra 1 giá trị mới rồi gán lại mảng

console.log(a);
console.log(d);

d[0] = 10;

console.log(a);
console.log(d);

// Sử dụng spread,

var e = [
    ...a,
    ...c,
    ...[
        6, 7, 8
    ],
    [
        9, 10
    ],
    ...b
];
console.log(e);

function sum(a, b, c) {
    return a + b + c;
}

function new_sum(){
    var res = 0;
    for(let i in arguments){
        res += parseInt(arguments[i]);
    }
    return res;
}


console.log('Sum: ', sum(3,4,5));
console.log('New Sum: ', new_sum(3, 4, 5, 7, 8, 9, ...a, ...b));

