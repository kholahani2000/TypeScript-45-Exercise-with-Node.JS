"use strict";
let personName = '';
personName = prompt('What is your name?') || '';
if (personName !== null && personName !== '') {
    alert(`Hello ${personName}, would you like to python today?`);
}
else {
    alert('you have to fill your name !');
}
