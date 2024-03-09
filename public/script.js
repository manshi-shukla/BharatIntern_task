function validateForm() {
    // name validation
    var nameInput = document.getElementById("name");
    var nameError = document.getElementById("nameLabel");
    var nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(nameInput.value.trim())) {
        nameError.textContent = "Name must contain only letters";
        return false;
    }
  
      // phone validation
      var phoneInput = document.getElementById("phno");
      var phoneError = document.getElementById("phoneErr");
      var phoneRegex = /^\d{10}$/;
      // var phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
  
      if (!phoneRegex.test(phoneInput.value)) {
          phoneError.textContent = "Please enter a valid phone number (xxx-xxx-xxxx)";
          return false;
      }
  }