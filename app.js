document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const registrationData = {
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
      // Add more properties as needed
    };
  
    localStorage.setItem("email", JSON.stringify(registrationData));
  });
  