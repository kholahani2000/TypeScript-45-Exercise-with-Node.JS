let Guest_List :string[] = ['Joe Biden','Putin','Muhmmad Bin Salman'];
// for(let i=0; i<Guest_List.length; i++){
// console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }
let absent_Guest :string = 'Putin' ;
let new_Guest :string = 'Imran Khan' ;
Guest_List[1] = new_Guest ;
// for(let i=0; i<Guest_List.length; i++){
// console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
~
// console.log(`Mr .${absent_Guest} is not coming to the party.`)
// console.log('Good news! We find big table so we inviting 3 more guests.')
Guest_List.unshift('King Charles') ;
Guest_List.splice(2 , 0 ,'Prince William');
Guest_List.push('Queen Camilla');
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
//     }
    // console.log('/nSorry we cannot arrange big table , Only two peoples will be invited') ;
    while(Guest_List.length > 2){
        let remove_Guest = Guest_List.pop();
        // console.log("Sorry Mr. ${remove_Guest}, You are not invited for dinner");
    }
    // Hamarey bachey hue 2 invited guest.
    // for(let i=0; i<Guest_List.lenght; i++){
    //  console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThankyou!\n\n')
    // }
    

        Guest_List.splice(0, 2);

        console.log(Guest_List);

        // Exersice 19
        //print a message indicating the number of people you are inviting to dinner.

        console.log(`Total number of guest are: ${Guest_List.length}`);
        