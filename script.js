document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const companyName = document.getElementById('companyName').value;
    const contactPerson = document.getElementById('contactPerson').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const companyAddress = document.getElementById('companyAddress').value;
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    const postalCode = document.getElementById('postalCode').value;
    const terms = document.getElementById('terms').checked;
    
    if (!companyName || !contactPerson || !email || !password || !phoneNumber || !companyAddress || !city || !country || !postalCode || !terms) {
        alert('Please fill in all the required fields.');
        return;
    }
    
    // Perform registration logic here
    // ...
    
    // Redirect to the dashboard page
    window.location.href = 'dashboard.html';
});