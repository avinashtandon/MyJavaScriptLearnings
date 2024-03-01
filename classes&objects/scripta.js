class person{
    constructor (){
        this.address = "india";
    }
    eat(){
        console.log("eats")
    }
    sleep(){
        console.log("slepps")
    }
}
class eng{
    work(){
        console.log("workring professional")
    }

}

class doctor extends person{
    work(){
        console.log("treats pat.")
    }
}
let avinashObj = new doctor();

//We have a class called person with a constructor method. The constructor sets a property called address to the value "India." Think of a class as a blueprint for creating objects, and the constructor is like a set of instructions to create a person with a default address in India.

//The person class has two methods: eat and sleep. These methods simply print out messages saying that the person is eating and sleeping.

//Then, we have another class called eng (short for engineer). This class has a method called work, which prints out a message saying the person is a working professional.

//Next, there's a class called doctor that extends the person class. This means that a doctor is a special kind of person and inherits all the properties and methods of the person class.

//The doctor class has a method called work as well, but it's different from the work method in the eng class. This work method for a doctor prints out a message saying the person is treating patients.

//Finally, we create an object called avinashObj using the doctor class. This means we're making a new instance of a doctor. So, avinashObj is a special person (doctor) with the ability to treat patients.

//In simpler terms, this code sets up a blueprint for creating people (like Avinash). A person can eat, sleep, and have an address. There are also specific types of people, like engineers and doctors, who have their own special abilities or jobs. avinashObj is an instance of a doctor, a special kind of person who can treat patients.