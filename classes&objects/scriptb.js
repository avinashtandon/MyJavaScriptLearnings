let data = "this is information";
class user {
    constructor(name,email) {
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log(data);
    }
}
class admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        data = "data has been changed";
    }
}
let atbObj = new user("avinash","atbh@mail.com");
let adminObj = new admin("akash","avb@gmail.com");