function greeting() { 
    let username = 'Leo';

    function displayUserName() {
        return `Hola ${username}`
    }
    return displayUserName;
}

const g = greeting();
console.log(g);
console.log(g());

