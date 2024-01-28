import { buildAuthenticatedSession, buildUnauthorisedSession } from "./sessionView.js";

export const sessionController = (nav) => {
 
   const token = localStorage.getItem('token');

   if (isUserLoggedIn()) {
        nav.innerHTML = buildAuthenticatedSession();
        const logoutButton = nav.querySelector('button');
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('token');
            sessionController(nav);
        })
    } else {
        nav.innerHTML = buildUnauthorisedSession();
   }
}

const isUserLoggedIn = () => {
    return localStorage.getItem('token');
}