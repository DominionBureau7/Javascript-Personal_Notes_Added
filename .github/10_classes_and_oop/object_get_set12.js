//        node .github/10_classes_and_oop/object_get_set12.js
//  Rarely used method of getter and setter
const User = {
    _email : 'h@hc.com',
    _password : 'abc',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}
const tea = Object.create(User)// Factory function - creates a new object and sets the prototype of that object to the object we pass in. Alternative to class and constructor function.
console.log(tea.email);// H@HC.COM
