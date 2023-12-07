class usuario{

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