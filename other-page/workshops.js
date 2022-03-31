import { checkAuth, getWorkShops, logout } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});


window.addEventListener('load', async () => {
    const workshops = await getWorkShops();
    console.log(workshops);
});