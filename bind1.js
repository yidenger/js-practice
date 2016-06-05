var add = function (x, y) {
	return x *this.m + y * this.n;
};
var obj = {
	m: 2,
	n: 2
};
var m = 3;
var n = 3;
var newAdd = add.bind(obj,5);
console.log(newAdd(5));
var newAdd2 = add.bind(obj,4,4);
console.log(newAdd2());