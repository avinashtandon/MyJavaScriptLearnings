let data = " this is data";
class user {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log(data);
    }
};
class admin extends user {
    constructor(name,email){
        
    }
    editdata() {
        data = "this is new data";
    }
}
let userobj = new user("avinash","user@mail.com");
let adminobj = new admin("akash","admin@mail.com");