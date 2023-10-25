// // First Example

// function first(){
//     console.log('1st fisrt');
// }

// function Second(){
//     console.log('1st Second');
// }

// function Third(){
//     console.log('1st Third');
// }

// first();
// Second();
// Third();

//Second Example

function first(){
    console.log('2nd fisrt');
    Second();
}

function Second(){
    console.log('2nd Second');
    Third();
}

function Third(){
    console.log('2nd Third');
}

first();