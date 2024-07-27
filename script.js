document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('data-form');
    const dataList = document.getElementById('data-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const mobileNumber = document.getElementById('mobile-number').value;
        const email = document.getElementById('email').value;
        const appointmentPurpose = document.getElementById('appointment-purpose').value;

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>Name:</strong> ${name}<br>
            <strong>Mobile Number:</strong> ${mobileNumber}<br>
            <strong>Email:</strong> ${email}<br>
            <strong>Purpose of Appointment:</strong> ${appointmentPurpose}<br>
        `;
        
        dataList.appendChild(listItem);

        form.reset();
    });
});
