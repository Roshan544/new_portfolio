// Function to show loading animation on button
function showLoading(button) {
    button.innerHTML = '<span class="icon-reverse-wrapper"><span class="btn-text"><span class="spinner"></span> Sending...</span></span>';
    button.disabled = true;
    button.style.opacity = '0.7';
    button.style.cursor = 'not-allowed';
}

// Function to show thank you popup
function showThankYouPopup() {
    // Create popup overlay
    const overlay = document.createElement('div');
    overlay.id = 'thank-you-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 99999;
        animation: fadeIn 0.3s ease;
    `;
    
    // Create popup box
    const popup = document.createElement('div');
    popup.id = 'thank-you-popup';
    popup.style.cssText = `
        background: white;
        padding: 40px 50px;
        border-radius: 15px;
        text-align: center;
        box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        animation: slideUp 0.4s ease;
        max-width: 400px;
    `;
    
    // Success icon
    popup.innerHTML = `
        <div style="width: 80px; height: 80px; background: #28a745; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
            <i class="fa-solid fa-check" style="color: white; font-size: 40px;"></i>
        </div>
        <h2 style="color: #333; margin-bottom: 15px; font-size: 24px;">Thank You!</h2>
        <p style="color: #666; font-size: 16px; margin-bottom: 25px;">Your message has been submitted successfully. I will get back to you soon!</p>
        <button onclick="closePopup()" style="background: #667eea; color: white; border: none; padding: 12px 35px; border-radius: 25px; font-size: 16px; cursor: pointer; transition: all 0.3s;">OK</button>
    `;
    
    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
    
    // Auto close after 5 seconds
    setTimeout(closePopup, 5000);
}

// Function to close popup
function closePopup() {
    const overlay = document.getElementById('thank-you-overlay');
    if (overlay) {
        overlay.style.animation = 'fadeIn 0.3s ease reverse';
        setTimeout(() => {
            overlay.remove();
        }, 300);
    }
}

// Function to send email
function sendMail() {
    const form = document.getElementById('contact-form');
    const formMessages = document.getElementById('form-messages');
    const submitBtn = document.getElementById('submit');
    
    // Get form values
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const phone = document.getElementById('contact-phone') ? document.getElementById('contact-phone').value : '';
    const subject = document.getElementById('subject') ? document.getElementById('subject').value : '';
    const message = document.getElementById('contact-message').value;
    
    // Validate
    if (!name || !email || !message) {
        if (formMessages) {
            formMessages.className = 'error';
            formMessages.textContent = 'Please fill in all required fields.';
        }
        return false;
    }
    
    // Show loading animation
    showLoading(submitBtn);
    
    // Check if EmailJS is configured - if not, use mailto fallback
    const emailjsPublicKey = "YOUR_PUBLIC_KEY";
    
    if (emailjsPublicKey === "YOUR_PUBLIC_KEY") {
        // Use mailto fallback
        const mailtoLink = `mailto:roshany544@gmail.com?subject=Portfolio Contact - ${encodeURIComponent(subject || 'New Message')}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0APhone: ${encodeURIComponent(phone)}%0A%0AMessage:%0A${encodeURIComponent(message)}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Reset button
        submitBtn.innerHTML = '<span class="icon-reverse-wrapper"><span class="btn-text">Submit</span><span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span><span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span></span>';
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
        submitBtn.style.cursor = 'pointer';
        
        // Show thank you popup
        setTimeout(showThankYouPopup, 500);
        
        return true;
    }
    
    // Prepare template parameters
    const templateParams = {
        from_name: name,
        from_email: email,
        phone: phone || 'Not provided',
        subject: subject || 'No subject',
        message: message
    };
    
    // Send using EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams, emailjsPublicKey)
        .then(function(response) {
            // Reset form
            if (document.getElementById('contact-name')) document.getElementById('contact-name').value = '';
            if (document.getElementById('contact-email')) document.getElementById('contact-email').value = '';
            if (document.getElementById('contact-phone')) document.getElementById('contact-phone').value = '';
            if (document.getElementById('subject')) document.getElementById('subject').value = '';
            if (document.getElementById('contact-message')) document.getElementById('contact-message').value = '';
            
            // Reset button
            submitBtn.innerHTML = '<span class="icon-reverse-wrapper"><span class="btn-text">Submit</span><span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span><span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span></span>';
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
            submitBtn.style.cursor = 'pointer';
            
            // Show thank you popup
            showThankYouPopup();
        }, function(error) {
            // Reset button
            submitBtn.innerHTML = '<span class="icon-reverse-wrapper"><span class="btn-text">Submit</span><span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span><span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span></span>';
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
            submitBtn.style.cursor = 'pointer';
            
            if (formMessages) {
                formMessages.className = 'error';
                formMessages.textContent = 'Sorry, there was an error. Please try again.';
            }
        });
    
    return false;
}
