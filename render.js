export function renderWorkshop(workshop){
    const workshopEl = document.createElement('div');
    const topicEl = document.createElement('p');
        
    workshopEl.classList.add('workshop');
    topicEl.textContent = workshop.topic;
        
    workshopEl.append(topicEl);

    for (let participant of workshop.participants) {
        const participantEl = document.createElement('p');
            
        participantEl.textContent = participant.name;

        workshopEl.append(participantEl);
    }
    
    return workshopEl;
}
