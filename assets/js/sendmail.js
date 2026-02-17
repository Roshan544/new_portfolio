// EmailJS Configuration - Get these from https://www.emailjs.com/
// Public Key (already set)
const EMAILJS_PUBLIC_KEY = "tMN2YCX59GVIikU3L";
// Replace these with your EmailJS Service ID and Template ID
const EMAILJS_SERVICE_ID = "service_t9tjzhp";    
const EMAILJS_TEMPLATE_ID = "template_2xmzswv";

// Function to show loading animation on button
function showLoading(button) {
    button.innerHTML = '<span class="icon-reverse-wrapper"><span class="btn-text">Sending...</span></span>';
    button.disabled = true;
    button.style.opacity = '0.7';
    button.style.cursor = 'not-allowed';
}

// Function to show thank you popup
function showThankYouPopup() {
    // Create popup overlay
    const overlay = document.createElement('div');
    overlay.id = 'thank-you-overlay';
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);display:flex;justify-content:center;align-items:center;z-index:99999;';
    
    // Create popup box
    const popup = document.createElement('div');
    popup.style.cssText = 'background:white;padding:40px 50px;border-radius:15px;text-align:center;box-shadow:0 10px 40px rgba(0,0,0,0.3);max-width:400px;';
    
    popup.innerHTML = `
        <div style="width:80px;height:80px;background:#28a745;border-radius:50%;margin:0 auto 20px;display:flex;align-items:center;justify-content:center;">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        </div>
        <h2 style="color:#333;margin-bottom:15px;font-size:24px;">Thank You!</h2>
        <p style="color:#666;font-size:16px;margin-bottom:25px;">Your message has been sent successfully. I will get back to you soon!</p>
        <button onclick="closePopup()" style="background:#667eea;color:white;border:none;padding:12px 35px;border-radius:25px;font-size:16px;cursor:pointer;">OK</button>
    `;
    
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
    
    // Auto close after 5 seconds
    setTimeout(closePopup, 5000);
}

// Function to close popup
function closePopup() {
    const overlay = document.getElementById('thank-you-overlay');
    if (overlay) {
        overlay.remove();
    }
}

// Main sendMail function
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
        alert('Please fill in all required fields: Name, Email, and Message');
        return false;
    }
    
    // Show loading animation
    showLoading(submitBtn);
    
    // Check if EmailJS is configured
    const isEmailJSConfigured = EMAILJS_SERVICE_ID !== "service_t9tjzhp" && EMAILJS_TEMPLATE_ID !== "template_2xmzswv";
    
    if (isEmailJSConfigured) {
        // Use EmailJS
        const templateParams = {
            from_name: name,
            from_email: email,
            phone: phone || 'Not provided',
            subject: subject || 'No subject',
            message: message,
            to_email: 'roshany544@gmail.com'
        };
        
        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
            .then(function(response) {
                console.log('SUCCESS!', response);
                submitBtn.innerHTML = '<span class="icon-reverse-wrapper"><span class="btn-text">Submit</span><span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span><span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span></span>';
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
                submitBtn.style.cursor = 'pointer';
                showThankYouPopup();
            })
            .catch(function(error) {
                console.log('FAILED...', error);
                submitBtn.innerHTML = '<span class="icon-reverse-wrapper"><span class="btn-text">Submit</span><span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span><span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span></span>';
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
                submitBtn.style.cursor = 'pointer';
                alert('Error sending email. Please try again.');
            });
    } else {
        // Use mailto fallback - Open email client
        setTimeout(function() {
            const mailtoLink = 'mailto:roshany544@gmail.com?subject=' + encodeURIComponent('Portfolio Contact - ' + (subject || 'New Message')) + 
                '&body=' + encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\nPhone: ' + phone + '\n\nMessage:\n' + message);
            
            window.location.href = mailtoLink;
            
            // Reset button
            submitBtn.innerHTML = '<span class="icon-reverse-wrapper"><span class="btn-text">Submit</span><span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span><span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span></span>';
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
            submitBtn.style.cursor = 'pointer';
            
            // Show thank you popup
            showThankYouPopup();
        }, 500);
    }
    
    return false;
}
