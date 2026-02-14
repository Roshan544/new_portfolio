<?php include 'layout/header.php'; ?>

<style>
    .tmp-section-gap {
        padding-top: 120px;
        padding-bottom: 0px;
    }
</style>

<!-- Breadcrumb Area Start -->
<div class="breadcrumb-area breadcrumb-bg">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="breadcrumb-inner text-center">
                    <h1 class="title split-collab">Contact</h1>
                    <ul class="page-list">
                        <li class="tmp-breadcrumb-item"><a href="https://inversweb.com/">Home</a></li>
                        <li class="icon"><i class="fa-solid fa-angle-right"></i></li>
                        <li class="tmp-breadcrumb-item active">Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Breadcrumb Area End -->

<div class="contact-area-wrapper tmp-section-gap">
    <div class="container">
        <div class="contact-info-wrap">
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="contact-info tmp-scroll-trigger tmponhover tmp-fade-in animation-order-1">
                        <div class="contact-icon">
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <h3 class="title">Address</h3>
                        <p class="para">Mumbai, India</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="contact-info tmp-scroll-trigger tmponhover tmp-fade-in animation-order-2">
                        <div class="contact-icon">
                            <i class="fa-solid fa-envelope"></i>
                        </div>
                        <h3 class="title">E-mail</h3>
                        <a href="mailto:roshany544@gmail.com">
                            <p class="para">roshany544@gmail.com</p>
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="contact-info tmp-scroll-trigger tmponhover tmp-fade-in animation-order-3">
                        <div class="contact-icon">
                            <i class="fa-solid fa-phone"></i>
                        </div>
                        <h3 class="title">Call Me</h3>
                        <a href="tel:+918928339535">
                            <p class="para">+91 8928339535</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Tpm Get In touch start -->
    <section class="get-in-touch-area tmp-section-gapTop">
        <div class="container">
            <div class="get-in-touch-wrapper tmponhover">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-5">
                        <div class="contact-inner">
                            <div
                                class="section-head section-head-one-side text-align-left tmp-scroll-trigger tmp-fade-in animation-order-1">
                                <span class="title-left">Get Ready To Create Great</span>
                            </div>
                            <ul class="ft-link v2">
                                <li class="tmp-scroll-trigger tmp-fade-in animation-order-1 tmp-link-animation">
                                    <span class="ft-icon"><i class="fa-solid fa-envelope"></i></span>
                                    <div class="ft-link-wrap">
                                        <h4 class="link-title">E-mail:</h4>
                                        <a href="mailto:roshany544@gmail.com">roshany544@gmail.com</a>
                                    </div>
                                </li>
                                <li class="tmp-scroll-trigger tmp-fade-in animation-order-2">
                                    <span class="ft-icon"><i class="fa-solid fa-location-dot"></i></span>
                                    <div class="ft-link-wrap">
                                        <h4 class="link-title">Location:</h4>
                                        <div>Mumbai, India</div>
                                    </div>
                                </li>
                                <li class="tmp-scroll-trigger tmp-fade-in animation-order-3 tmp-link-animation">
                                    <span class="ft-icon"><i class="fa-solid fa-phone"></i></span>
                                    <div class="ft-link-wrap">
                                        <h4 class="link-title">Contact:</h4>
                                        <a href="tel:+918928339535">+91 8928339535</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="contact-inner">
                            <div
                                class="section-head section-head-one-side text-align-left tmp-scroll-trigger tmp-fade-in animation-order-1">
                                <span class="title">GET IN TOUCH</span>
                            </div>
                            <div class="contact-form">
                                <div id="form-messages" class="error"></div>
                                <form class="tmp-dynamic-form" id="contact-form" method="POST"
                                    action="https://inversweb.com/product/html/reeni/mailer.php">
                                    <div class="contact-form-wrapper row">
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <input class="input-field" name="name" id="contact-name"
                                                    placeholder="Your Name" type="text" required>
                                            </div>
                                        </div>

                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <input class="input-field" id="contact-phone" placeholder="Phone Number"
                                                    type="number" required>
                                            </div>
                                        </div>

                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <input class="input-field" id="contact-email" name="email"
                                                    placeholder="Your Email" type="email" required>
                                            </div>
                                        </div>

                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <input class="input-field" type="text" id="subject" name="subject"
                                                    placeholder="Subject">
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <textarea class="input-field" placeholder="Your Message" name="message"
                                                    id="contact-message" required></textarea>
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="tmp-button-here">
                                                <button class="tmp-btn hover-icon-reverse radius-round w-100"
                                                    name="submit" type="submit" id="submit">
                                                    <span class="icon-reverse-wrapper">
                                                        <span class="btn-text">Submit</span>
                                                        <span class="btn-icon"><i
                                                                class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                                        <span class="btn-icon"><i
                                                                class="fa-sharp fa-regular fa-arrow-right"></i></span>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Tpm Get In touch End -->

    <?php include 'layout/footer.php'; ?>