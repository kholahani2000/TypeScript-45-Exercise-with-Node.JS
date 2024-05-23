"use strict";
function makesandwich(item) {
    console.log('\nMaking your sandwich with:');
    item.forEach(element => console.log("-" + element));
    console.log('Enjoy your sandwich\n');
}
makesandwich(['Ham', 'Tahina', 'Shitaki',]);
makesandwich(['Sandwich King', 'Sandwich Lab']);
makesandwich(['Faham', 'Dajjaj Petti', 'Laham Tikka']);
