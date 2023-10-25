const d = new Date(2022, 5, 10, 13, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

switch (month) {
    case 1:
        console.log('It is January');
        break;
    case 2:
        console.log('It is feburary');
        break;
    case 3:
        console.log('It is March');
        break;
    default:
        console.log('It is not Jan,Feb,March');
}

switch (true) {
    case hour < 12:
        console.log('Good Morning');
        break;
    case hour >= 12 && hour < 16:
        console.log('Good Afternoon');
        break;
    case hour >= 16 && hour < 20:
        console.log('Good Evening');
        break;
    case hour >= 20:
        console.log('Good Night');
        break;
    default:
        console.log('Unknown time')
}

