function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Check if username and password are not empty
    if (username.trim() === "" || password.trim() === "") {
      alert("Please enter both username and password");
      return false;
    }
  
    // You can add more validation logic here, like checking username and password against a database
  
    // If everything is fine, return true to allow form submission
    return true;
  }