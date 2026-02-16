
<div class="copyright-area-one">
    <div class="container">
        <div class="row">
            <div>
                <div class="main-wrapper">
                    <p class="copy-right-para tmp-link-animation"> ©
                        <script>
                            document.write(new Date().getFullYear())
                        </script> | All Rights Reserved
                    </p>
                    <p class="copy-right-para tmp-link-animation"> Created with <img title='Heart' style="width: 18px;"
                            src="assets/images/language/heart.svg" alt="heart" /> by Roshan Yadav
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- End Footer Area  -->

<!-- Sound Option Start  -->
<div class="ready-chatting-option1 tmp-ready-chat" id="sound-toggle" style="cursor: pointer;">
    <label for="click">
        <i class="fa-solid fa-volume-xmark" id="sound-icon"></i>
    </label>
</div>
<!-- Sound Option End -->
<!-- ready chatting option via email -->
<a href="https://wa.me/8928339535" target="_blank">
    <div class="ready-chatting-option tmp-ready-chat">
        <label for="click">
            <i class="fa-brands fa-whatsapp"></i>
        </label>
    </div>
</a>
<!-- ready chatting option via email end -->
<!-- progress area start -->
<div class="scrollToTop" style="display: block;">
    <div class="arrowUp">
        <i class="fa-light fa-arrow-up"></i>
    </div>
    <div class="water" style="transform: translate(0px, 87%);">
        <svg viewBox="0 0 560 20" class="water_wave water_wave_back">
            <use xlink:href="#wave"></use>
        </svg>
        <svg viewBox="0 0 560 20" class="water_wave water_wave_front">
            <use xlink:href="#wave"></use>
        </svg>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 560 20" style="display: none;">
            <symbol id="wave">
                <path
                    d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"
                    fill="#"></path>
                <path
                    d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"
                    fill="#"></path>
                <path
                    d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"
                    fill="#"></path>
                <path
                    d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"
                    fill="#"></path>
            </symbol>
        </svg>

    </div>
</div>

<script src="assets/js/vendor/jquery.js"></script>
<script src="assets/js/vendor/jquery-ui.min.js"></script>
<script src="assets/js/vendor/waypoints.min.js"></script>

<script src="assets/js/plugins/odometer.js"></script>
<script src="assets/js/vendor/appear.js"></script>


<script src="assets/js/vendor/jquery-one-page-nav.js"></script>
<script src="assets/js/plugins/swiper.js"></script>

<script src="assets/js/plugins/gsap.js"></script>
<script src="assets/js/plugins/splittext.js"></script>
<script src="assets/js/plugins/scrolltigger.js"></script>
<script src="assets/js/plugins/scrolltoplugins.js"></script>
<script src="assets/js/plugins/smoothscroll.js"></script>
<!-- bootstrap Js-->
<script src="assets/js/vendor/bootstrap.min.js"></script>
<script src="assets/js/vendor/waw.js"></script>
<script src="assets/js/plugins/isotop.js"></script>
<script src="assets/js/plugins/animation.js"></script>
<script src="assets/js/plugins/contact.form.js"></script>
<script src="assets/js/vendor/backtop.js"></script>
<script src="assets/js/plugins/text-type.js"></script>
<!-- custom Js -->
<script src="assets/js/main.js"></script>

<script>
    window.addEventListener('load', function () {
        // Wait for 3 seconds (3000 milliseconds) then hide loading screen
        setTimeout(function () {
            const loadingScreen = document.getElementById('loading-screen');
            const mainContent = document.getElementById('main-content');

            // Fade out loading screen
            loadingScreen.style.opacity = '0';

            // Show main content and remove loading screen
            setTimeout(function () {
                loadingScreen.style.display = 'none';
                mainContent.style.display = 'block';
            }, 500); // Match this with CSS transition time
        }, 3000); // 3 seconds delay
    });

    // Sound Toggle Functionality
    document.addEventListener('DOMContentLoaded', function () {
        const soundToggle = document.getElementById('sound-toggle');
        const soundIcon = document.getElementById('sound-icon');
        let isPlaying = false;
        let backgroundMusic = null;

        // Create audio element - Replace 'assets/audio/your-sound.mp3' with your actual sound file path
        // For now using a sample sound URL, replace with your local file
        backgroundMusic = new Audio('assets/images/Sound/typography-infraction-main-version.mp3');
        backgroundMusic.loop = true;
        backgroundMusic.volume = 0.3;

        soundToggle.addEventListener('click', function () {
            if (!isPlaying) {
                // Play sound
                backgroundMusic.play().catch(function (error) {
                    console.log('Audio play failed:', error);
                });
                // Change icon to volume-high
                soundIcon.classList.remove('fa-volume-xmark');
                soundIcon.classList.add('fa-volume-high');
                isPlaying = true;
            } else {
                // Pause sound
                backgroundMusic.pause();
                backgroundMusic.currentTime = 0; // Reset to beginning
                // Change icon to volume-xmark
                soundIcon.classList.remove('fa-volume-high');
                soundIcon.classList.add('fa-volume-xmark');
                isPlaying = false;
            }
        });
    });
</script>

<!-- <script>
    // Disable right click
    document.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });

    // Disable inspect shortcuts
    document.addEventListener("keydown", function (e) {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "C" || e.key === "J")) ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
      }
    });
  </script> -->


</body>

</html>