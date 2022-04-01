export function renderWorkshop(workshop){
    const workshopEl = document.createElement('div');
    const topicEl = document.createElement('p');
        
    workshopEl.classList.add('workshop');
    topicEl.textContent = workshop.topic;
        
    workshopEl.append(topicEl);

    for (let participant of workshop.participants) {
        const participantEl = document.createElement('p');
            
        participantEl.textContent = participant.participant_name;

        console.log(participant.participant_name);
        workshopEl.append(participantEl);
    }
    
    return workshopEl;
}
