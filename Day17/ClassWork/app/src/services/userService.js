import axios from 'axios';
import config from './config';

//exporting async function
//1. user login 
export async function loginUser(email,password) {
    const URL = config.BASE_URL + "/users/signin";
    const body = {email,password};
    const response = await axios.post(URL,body);
    return response.data;
}

//2. user register
export async function registerUser(name,email,password,mobile){
    const URL = config.BASE_URL + "/users/signup";
    const body = {name,email,password,mobile};
    const response = await axios.post(URL,body);
    return response.data;
}
//3. get user profile
export async function getUserProfile(token){
    const URL=config.BASE_URL+"/users";
    const headers={token};
    const response = await axios.get(URL,{headers});
    return response.data;
}

//4.update user profile
export async function updateUserProfile(token,name,email,mobile){
    const URL= config.BASE_URL +"/users";
    const headers={token};
    const body ={name,email,mobile};
    const response = await axios.get(URL,body,{headers});
    return response.data;
}