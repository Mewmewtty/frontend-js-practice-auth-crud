import { createUser } from "./signupModel.js";

export const signupController = (signupForm) => {
    signupForm.addEventListener("submit", (event) => validateForm(event, signupForm));
}  

const validateForm = async (event, signupForm) => {
    event.preventDefault();   

    const signupFormFormData = new FormData(signupForm);
    const email = signupFormFormData.get('email');
    const password = signupFormFormData.get('password');
    const passwordConfirmation = signupFormFormData.get('password-confirmation');

    //const email = signupForm.querySelector('#email');
    //const password = signupForm.querySelector('#password');
    //const passwordConfirmation = signupForm.querySelector('#password-confirmation');

    try {
        if(isFormValid(email, password, passwordConfirmation)) {
            await createUser(email, password);
            dispatchEvent('userCreated', {
                type: "success",
                message: 'Usuario creado correctamente'
            }, signupForm);
            window.location = "./login.html";
        }
    } catch (error) {
        dispatchEvent('userCreated', {
            type: "error",
            message: error
        }, signupForm);
    }  
}
const isFormValid = (email, password, passwordConfirmation) => {
    const emailValidation = isEmailValid(email);
    const passwordValidation = isPasswordValid(password, passwordConfirmation);
    return emailValidation && passwordValidation;
}
const isEmailValid = (email) => {
    const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    let result = true;

    if(!emailRegExp.test(email)) {
       throw 'El email no es correcto';
        result = false;
    }
    return result;
}
const isPasswordValid = (password, passwordConfirmation) => {
    let result = true;

    if(password.value !== passwordConfirmation.value) {
        throw 'Las contraseñas no son iguales';
        result = false;
    }
    return result;
}

const dispatchEvent = (eventName, data, signupForm) => {
    const event = new CustomEvent(eventName,  {
        detail: data
    });

    signupForm.dispatchEvent(event);
    
}