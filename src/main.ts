import { NewUserAdapter } from "./Adapter/NewUserAdapter";
import { NewUserMethod } from "./Adapter/NewUserMethod";
import { User } from "./Adapter/User";

const userOne = new User();
console.log(userOne.getInfo());

//! we gonna have issue here cuz rest of the app depnding on old user method (interface)
//const userTwo = new NewUserMethod();
//console.log(userTwo.getInfo());

// so we gonna use adapter to make it work
const userTwo = new NewUserAdapter(new NewUserMethod());
console.log(userTwo.getInfo());
