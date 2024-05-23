//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the arra.

let magician : string[] = ['Harry Potter', 'Hermione Granger', 'Thoumas', 'George Milton'];

function show_magicians(magicians : string[]){

    magicians.forEach(element =>{
        console.log(element);

    });
}

show_magicians(magician)