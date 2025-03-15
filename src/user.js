class User {
    constructor(id, firstName, lastName, age, image) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.image = image;
    }
    displayInfo() {
        console.log(`User ID: ${this.id}`);
        console.log(`First Name: ${this.firstName}`);
        console.log(`Last Name: ${this.lastName}`);
        console.log(`Age: ${this.age}`);
        console.log(`Image: ${this.image}`);
    }
}

module.exports = User;
