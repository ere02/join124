import {createUser} from "./firebase.js";

export function testSignUp(email,password) {
    createUser(email,password);

}