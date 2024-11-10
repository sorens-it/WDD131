let participantCount = 1;

document.querySelector('#add-participant').addEventListener('click', () => {
    participantCount++;
    const newParticipantHTML = participantTemplate(participantCount);
    document.querySelector('#add-participant').insertAdjacentHTML('beforebegin', newParticipantHTML);
});

document.querySelector('form').addEventListener('submit', submitForm);

function participantTemplate(count) {
    return `
    <section class="participant${count}">
        <label for="participant${count}-name">Participant ${count} Name</label>
        <input type="text" id="participant${count}-name" name="participant${count}-name">
        <label for="participant${count}-age">Participant ${count} Age</label>
        <input type="number" id="participant${count}-age" name="participant${count}-age">
        <label for="fee${count}">Fee</label>
        <input type="number" id="fee${count}" name="fee${count}">
    </section>
    `;
}

function submitForm(event) {
    event.preventDefault();
    const adultName = document.querySelector('#adult-name').value;
    const totalParticipants = participantCount;
    const totalFeeAmount = totalFees();
    document.querySelector('form').style.display = 'none';
    document.querySelector('#summary').innerHTML = successTemplate({
        name: adultName,
        count: totalParticipants,
        total: totalFeeAmount
    });
}

function totalFees() {
    let feeElements = [...document.querySelectorAll("[id^=fee]")];
    return feeElements.reduce((total, feeInput) => total + Number(feeInput.value || 0), 0);
}

function successTemplate(info) {
    return `
        <p>Thank you, ${info.name}, for registering.</p>
        <p>You have registered ${info.count} participants and owe $${info.total} in fees.</p>
    `;
}
