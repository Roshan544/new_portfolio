function sendMail() {
    var submitBtn = document.getElementById("submit");
    
    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.classList.add("loading");
    
    // Store original content
    var originalText = submitBtn.querySelector(".btn-text");
    var originalTextContent = originalText ? originalText.innerHTML : "Submit";
    
    // Change button text to show loading
    if (originalText) {
        originalText.innerHTML = '<span class="loading-spinner"></span> Sending...';
    } else {
        submitBtn.innerHTML = '<span class="loading-spinner"></span> Sending...';
    }
    
    var params = {
        name: document.getElementById("contact-name").value,
        phone: document.getElementById("contact-phone").value,
        email: document.getElementById("contact-email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("contact-message").value,
    };

    // ============================================
    // REPLACE THESE WITH YOUR EMAILJS CREDENTIALS
    // Get from: https://dashboard.emailjs.com/admin
    // ============================================
    const serviceID = "service_pinv46o";   // e.g., "service_xxxxxx"
    const templateID = "template_2xmzswv";  // e.g., "template_xxxxxx"
    // ============================================

    emailjs.send(serviceID, templateID, params)
        .then(function(response) {
            // Show thank you popup
            showThankYouPopup();
            // Reset form
            document.getElementById("contact-form").reset();
            // Reset button
            resetButton(submitBtn, originalText, originalTextContent);
        }, function(error) {
            console.log("FAILED...", error);
            // Reset button
            resetButton(submitBtn, originalText, originalTextContent);
            // Check console for error details
        });
}

function resetButton(submitBtn, originalText, originalTextContent) {
    submitBtn.disabled = false;
    submitBtn.classList.remove("loading");
    
    if (originalText) {
        originalText.innerHTML = originalTextContent;
    } else {
        submitBtn.innerHTML = originalTextContent;
    }
}

function showThankYouPopup() {
    // Create popup container if it doesn't exist
    let popup = document.getElementById("thank-you-popup");
    if (!popup) {
        popup = document.createElement("div");
        popup.id = "thank-you-popup";
        popup.innerHTML = `
            <div class="popup-overlay" onclick="closeThankYouPopup()"></div>
            <div class="popup-content">
                <div class="checkmark">✓</div>
                <h2>Thank You!</h2>
                <p>Your message has been sent successfully.</p>
                <button onclick="closeThankYouPopup()">Close</button>
            </div>
        `;
        document.body.appendChild(popup);
    }
    popup.style.display = "flex";
}

function closeThankYouPopup() {
    const popup = document.getElementById("thank-you-popup");
    if (popup) {
        popup.style.display = "none";
    }
}
