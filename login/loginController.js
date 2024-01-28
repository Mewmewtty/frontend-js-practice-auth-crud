import { loginUser } from "./loginModel.js";

export const loginController = (loginForm) => {

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        submitLogin(loginForm);
    })   
}

const submitLogin = async (loginForm) => {
    const {email, password} = getLoginData(loginForm);
    try {
        const jwt = await loginUser(email, password);
        alert('login OK');
        localStorage.setItem('token', jwt);
        window.location = "./index.html";
    } catch (error) {
        alert(error);
    }

}
const getLoginData = (loginForm) => {
    //const formData = new FormData(loginForm);
    //const email = formData.get('email');
    //const password = formData.get('password');
    
    const email = loginForm.querySelector('#email').value;
    const password = loginForm.querySelector('#password').value;
    return {
        email: email, 
        password: password
    }
}