function validateForm(event) {
    event.preventDefault();
  
    // Basic form validation
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const matricNumber = document.getElementById('matricNumber').value;
    const carModel = document.getElementById('carModel').value;
    const racingClass = document.getElementById('racingClass').value;
  
    if (!fullName || !email || !matricNumber || !carModel || !racingClass) {
      alert('Please fill in all fields.');
      return;
    }
  
    // Additional validation can be added based on specific requirements
  
    alert('Registration successful!');
    // You can also submit the form data to a server using AJAX or other methods
  }
  