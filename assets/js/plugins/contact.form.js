/**
 *
 * -----------------------------------------------------------------------------
 *
 * Template : Roshan Yadav - Personal Portfolio | Freelancer & Developer Portfolio
 * Author : Roshan Yadav
 * Author URI :  
 *
 * -----------------------------------------------------------------------------
 *
 **/

(function ($) {
    'use strict';

    var form = $('#contact-form');
    var formMessages = $('#form-messages');

    // Skip if form has sendMail function (custom handler)
    if (typeof sendMail === 'function') {
        return; // Let our custom sendMail function handle it
    }

    $(form).submit(function (e) {
        e.preventDefault();

        // Form data serialize + phone field যুক্ত করা
        var formData = $(form).serialize() + "&phone=" + $('#contact-phone').val();

        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
        .done(function (response) {
            $(formMessages).removeClass('error').addClass('success').text(response);

            // ইনপুট ফিল্ড ক্লিয়ার করা
            $('#contact-name, #contact-email, #subject, #contact-message, #contact-phone').val('');
        })
        .fail(function (data) {
            $(formMessages).removeClass('success').addClass('error');

            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            } else {
                $(formMessages).text('Oops! An error occurred and your message could not be sent.');
            }
        });
    });

})(jQuery);
