import { checkAuth, getWorkShops, logout } from '../fetch-utils.js';
import { renderWorkshop } from '../render.js';
checkAuth();

const workshopListEl = document.querySelector('.workshops-list');
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});




window.addEventListener('load', async () => {
    const workshops = await getWorkShops();
    for (let workshop of workshops) {
        const workshopEl = renderWorkshop(workshop);
        workshopListEl.append(workshopEl);
    }
});