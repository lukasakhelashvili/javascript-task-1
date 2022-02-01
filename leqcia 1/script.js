// task 1//


let user = {
    firstName: 'Luka',
    lastName: "Sakhelashvili",
    age: 26,
    studentstatus: 'Active'
};

console.log(user.studentstatus);



// task 2//
let userNames = ['luka', 'mariami', 'beqa', 'ani'];

for (let i = 0; i < userNames.length; i++) {
    console.log(userNames[i]);
}

let item = 0;
while (item < userNames.length) {
    console.log(userNames[item]);
    item++
}


//task 3//

let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

for (let x = 0; x < numbers.length; x++) {
    if (numbers[x] > 5) {
        console.log(numbers[x]);
    }
}


//task 4//

let users = [
    { username: 'test1', status: false },
    { username: 'test2', status: false },
    { username: 'test3', status: true }
];

for (let y = 0; y < users.length; y++) {
    if (users[y].status === true) {
        console.log(users[y]);
    }
}

//task 5 //

let newUser = {
    name: 'Luka',
    age: 26,
    studentstatus: 'active'
}

if (newUser.age > 18 && newUser.studentstatus === 'active') {
    console.log("HELLO");
}

if (newUser.name === 'Luka') {
    console.log("Hello Luka");
}

if (newUser.studentstatus === "active" || newUser.age < 25) {
    console.log("Hello World");
} else {
    console.log("ERROR");
}
// task 6//

let array = ['watermelon', 'pear', 10, 45, 50, 'apple', 'ananas'];
for (let newItem = 0; newItem < array.length; newItem++) {
    if (typeof array[newItem] === "string") {
        console.log(array[newItem]);
    }
}