var obj1 = new Object();
obj1.p = 123;
obj1.m = function () {
	console.log(this.p);
};
obj1.m();

var obj2 = new Object();
obj2.p = 456;
obj2.m = function () {
	console.log(this.p);
};
obj2.m();
var temp = obj2.m.bind(obj1);
temp();





