class User{

    constructor(name,email,password){
        this.name = name;
        this.email = email;
        this.password = password;
    }

    Hi(){
        console.log(`Hi ${this.name} welcome back!`);
    }

    Login(name,password){
        if (this.name === name && this.email && this.password)return true;
        else return false;
    }
}

class Studient extends User{

    Bye(){
        console.log(`See you ${this.name} next time`);
    }
}

const Pablots = new User('Pablots','Pablots@gmail.com','Pablots123');
const Jose = new User('Jose','Jose@gmail.com','Jose123');

console.log(Pablots);
console.log(Jose);


