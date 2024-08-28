export const buildUnauthorisedSession = () => {
    return `<ul class="btns-list">
    <li>
        <a href="./login.html">Login</a>
        <a href="./signup.html">Sign up</a>
    </li>
</ul>`;
}

export const buildAuthenticatedSession = () => {
    return ` <a href="/product-creation.html">Subir producto</a>
    <button>Log out</button>`;
}