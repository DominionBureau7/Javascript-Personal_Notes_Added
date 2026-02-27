//     node .github/10_classes_and_oop/defineProperties_get_set11.js

// This is the older syntax of get er and setter. Newer ones have clearer syntax.

function User(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, "email",{// need to give this. again
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

     Object.defineProperty(this, "password",{
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}
const chai = new User("chai@chai.com","chai")
console.log(chai.email); // CHAI@CHAI.COM
console.log(chai.password);// CHAI

// 90% of the time, we use this newer syntax of getter and setter. This is the older syntax.