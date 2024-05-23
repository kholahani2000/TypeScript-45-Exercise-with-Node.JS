//Tests for equality and inequality with string.
var _name = 'ericson';
console.log("Is _name == 'ericson'? I pridict True. ");
console.log(_name == 'ericson');
console.log("Is _name != 'ericson'? I pridict False.");
console.log(_name != 'ericson');
//Test using the lower case function.
console.log("Is _name == _name.toLocaleLowerCase()? I predict True.");
console.log(_name == _name.toLocaleLowerCase());
_name = "Andrewson";
console.log("_name == _name.toLocaleLowerCase()? I predict False.");
console.log(_name == _name.toLocaleLowerCase());
//Numerical tests involving equality and inequalitly,greater than and less than,greater than or equal to, and lees than orequal to
var _num = 4;
console.log("Is _num == 3? I predict False.");
console.log(_num == 3);
console.log("Is _num != 3? I predict True.");
console.log(_num != 3);
console.log("Is _num > 3? I predict True");
console.log(_num > 3);
console.log("Is _num < 3? I predict False");
console.log(_num < 3);
console.log("Is _num >= 3? I predict True");
console.log(_num >= 3);
console.log("Is _num <= 3? I predict False");
// . Tests using "and" and "or" operators
console.log("Is _num <= 3 || _num > 3? I predict True.");
console.log(_num <= 3 || _num > 3);
console.log("Is _num <= 3 && _num > 3? I predict False.");
console.log(_num <= 3 && _num > 3);
// . Test wehther an item is in a array
var numbers_array = [12, 43, 62, 90, 21];
numbers_array.includes(43);
console.log("Is numbers_array.includes(43)? I predict True.");
console.log(numbers_array.includes(43));
console.log("Is numbers_array.includes(34)? I predict Fasle.");
console.log(numbers_array.includes(34));
// . Tesy whether an item is not in array
