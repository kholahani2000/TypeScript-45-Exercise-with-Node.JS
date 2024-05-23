"use strict";
let Guest_List = ['Joe Biden', 'Putin', 'Muhmmad Bin Salman'];
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
}
let absent_Guest = 'Putin';
let new_Guest = 'Imran Khan';
Guest_List[1] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
}
console.log(`Mr .${absent_Guest} is not coming to the party.`);
