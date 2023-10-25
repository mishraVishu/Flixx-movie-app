try {
    console.log(x);
} catch (err) {
    console.log('Error: ' + err)
}


function double(number) {
    try {
        if (isNaN(number)) {
            throw new Error(number + ' is not a number')
        }
        else {
            console.log(number * 2);
        }
    } catch (err) {
        console.log(err);
    }
}

double('Preeti');