"use strict";
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size = 'Kabeer', text = 'I love TypeScript.') {
    console.log(`Creating a ${size} with the message ${text}`);
}
make_shirt();
make_shirt('wasat');
make_shirt('Saghir', 'AI is a revolution');
