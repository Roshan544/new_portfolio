// Send Email using EmailJS
// Sign up at https://www.emailjs.com/ and replace the values below

// EmailJS configuration - Replace with your own credentials from EmailJS dashboard
// Get these from: EmailJS Dashboard → Email Services → Your Service → Copy the IDs
const EMAILJS_PUBLIC_KEY = "tMN2YCX59GVIikU3L";        // From: EmailJS Dashboard → Account → Public Key
const EMAILJS_SERVICE_ID = "service_k7kwnfm";        // From: EmailJS Dashboard → Email Services
const EMAILJS_TEMPLATE_ID = "template_c5qqdfl";      // From: EmailJS Dashboard → Email Templates

// Function to send email
function sendMail() {
    const form = document.getElementById('contact-form');
    const formMessages = document.getElementById('form-messages');
    
    // Get form values
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const phone = document.getElementById('contact-phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('contact-message').value;
    
    // Validate
    if (!name || !email || !message) {
        if(formMessages) {
            formMessages.className = 'error';
            formMessages.textContent = 'Please fill in all required fields.';
        }
        return false;
    }
    
    // Show sending message
    const submitBtn = document.getElementById('submit');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="icon-reverse-wrapper"><span class="btn-text">Sending...</span></span>';
    submitBtn.disabled = true;
    
    // Check if EmailJS is properly configured
    if (EMAILJS_PUBLIC_KEY === "tMN2YCX59GVIikU3L") {
        // Use mailto fallback if not configured - opens user's email client
        const mailtoLink = `mailto:roshany544@gmail.com?subject=Portfolio Contact - ${encodeURIComponent(subject || 'New Message')}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0APhone: ${encodeURIComponent(phone)}%0A%0AMessage:%0A${encodeURIComponent(message)}`;
        
        window.location.href = mailtoLink;
        
        if(formMessages) {
            formMessages.className = 'success';
            formMessages.textContent = 'Thank you! Your email client has opened. Please send the email to complete your request.';
        }
        
        // Reset form
        form.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        return true;
    }
    
    // Prepare template parameters (must match your EmailJS template variables)
    const templateParams = {
        from_name: name,
        from_email: email,
        phone: phone || 'Not provided',
        subject: subject || 'No subject',
        message: message,
        to_email: 'roshany544@gmail.com'
    };
    
    // Send using EmailJS
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        .then(function(response) {
            if(formMessages) {
                formMessages.className = 'success';
                formMessages.textContent = 'Thank you! Your message has been sent successfully. I will get back to you soon!';
            }
            
            // Reset form
            if(document.getElementById('contact-name')) document.getElementById('contact-name').value = '';
            if(document.getElementById('contact-email')) document.getElementById('contact-email').value = '';
            if(document.getElementById('contact-phone')) document.getElementById('contact-phone').value = '';
            if(document.getElementById('subject')) document.getElementById('subject').value = '';
            if(document.getElementById('contact-message')) document.getElementById('contact-message').value = '';
            
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, function(error) {
            if(formMessages) {
                formMessages.className = 'error';
                formMessages.textContent = 'Sorry, there was an error sending your message. Please try again or email directly at roshany544@gmail.com';
            }
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
    
    return false;
}
