document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const billingDetails = {
        firstName: document.getElementById("first").value.trim(),
        lastName: document.getElementById("last").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        street: document.getElementById("street").value.trim(),
        city: document.getElementById("city").value.trim(),
        county: document.getElementById("county").value,
        postalCode: document.getElementById("postal").value.trim(),
        country: "KENYA",
        sameAsDelivery: document.getElementById("sameAsDelivery").checked
      };
  
      if (!billingDetails.county) {
        alert("Please select a county.");
        return;
      }
  
      console.log("Billing Details Submitted:", billingDetails);
      alert("Form submitted successfully!");
    });
  });
  
  function toggleBilling() {
    const isChecked = document.getElementById("sameAsDelivery").checked;
    console.log("Billing same as delivery:", isChecked);
  }

  document.addEventListener("DOMContentLoaded", function () {
    const placeOrderBtn = document.getElementById("placeOrder");
  
    placeOrderBtn.addEventListener("click", function () {
      const totalAmount = document.getElementById("totalAmount").value.trim();
      const phone = document.getElementById("phone").value.trim();
  
      // Validate total amount
      if (!totalAmount || isNaN(totalAmount)) {
        alert("Please enter a valid total amount.");
        return;
      }
  
      // Validate phone number (basic check for 10–13 digits)
      if (!phone || !/^\d{10,13}$/.test(phone)) {
        alert("Please enter a valid phone number.");
        return;
      }
  
      // Simulate sending a message
      const message = `Order of KES ${totalAmount} placed. Confirmation will be sent to ${phone}.`;
      alert(message);
      console.log("Simulated SMS:", message);
  
      // Optional: send to backend
      /*
      fetch("https://your-backend.com/send-sms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ phone, message })
      })
      .then(response => response.json())
      .then(data => {
        alert("SMS sent successfully!");
      })
      .catch(error => {
        console.error("Error sending SMS:", error);
        alert("Failed to send SMS.");
      });
      */
    });
  });
  
