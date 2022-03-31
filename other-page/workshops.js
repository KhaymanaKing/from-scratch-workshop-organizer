import { checkAuth, getWorkShops, logout } from '../fetch-utils.js';

checkAuth();

const workshopListEl = document.querySelector('.workshops-list');
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});


window.addEventListener('load', async () => {
    const workshops = await getWorkShops();
    for (let workshop of workshops){
        const workshopEl = document.createElement('div');
        const topicEl = document.createElement('p');
        
        workshopEl.classList.add('workshop');
        topicEl.textContent = workshop.topic;
        
        workshopEl.append(topicEl);

        for (let participant of workshop.participants)
            const participantEl= document.createElement('p');
            
            participantEl.textContent = participant.name;
            workshopListEl.append(workshopEl);
    }
});