class usuario{

    constructor(name,email,password){
        this.name = name;
        this.email = email;
        this.password = password;
    }

    Login(name,password){
        if (this.name === name && this.email && this.password)return true;
        else return false;
    }
}