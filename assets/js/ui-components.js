const HEADER_HTML = `
<header>
    <div class="container flex-between">
        <a href="index.html" class="logo">
            <img src="assets/images/logo.png" alt="Aikyam Logo">
            <div class="logo-text">
                <span class="brand-name">Aikyam Console <span class="brand-suffix">Pvt. Ltd.</span></span>
                <span class="brand-sub">United For Global Progress</span>
            </div>
        </a>
        <div class="mobile-toggle">
            <i class="fas fa-bars"></i>
        </div>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="track.html">Track Shipment</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="contact.html">Contact Us</a></li>
            </ul>
        </nav>
    </div>
</header>
`;

const FOOTER_HTML = `
<footer class="main-footer">
    <div class="container">
        <div class="footer-grid">
            <div class="footer-col">
                <h4>Aikyam Console</h4>
                <p class="footer-desc">Your trusted partner in global freight forwarding and consolidation services.</p>
                <div class="footer-social">
                    <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
                    <a href="https://facebook.com" target="_blank" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                    <a href="https://twitter.com" target="_blank" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                    <a href="https://instagram.com" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
            <div class="footer-col">
                <h4>Quick Links</h4>
                <ul class="footer-links">
                    <li><a href="services.html">Our Services</a></li>
                    <li><a href="track.html">Track Shipment</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Contact Us</h4>
                <ul class="footer-contact">
                    <li><i class="fas fa-map-marker-alt"></i> Sec 11, CBD Belapur<br>Navi Mumbai, 400614</li>
                    <li><i class="fas fa-envelope"></i> <a href="mailto:cs@aikyam.com">cs@aikyam.com</a></li>
                    <li><i class="fas fa-phone"></i> <a href="tel:+918010355235">+918010355235</a></li>
                    <li><i class="fab fa-whatsapp"></i> <a href="https://wa.me/8010355235" target="_blank">WhatsApp Us</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Our Location</h4>
                <div class="footer-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8426094891234!2d73.03!3d19.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAxJzEyLjAiTiA3M8KwMDEnNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890" width="100%" height="150" style="border:0; border-radius: 8px;" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; ${new Date().getFullYear()} Aikyam Console Pvt. Ltd. All rights reserved.</p>
        </div>
    </div>
</footer>
`;


// Inject Header
const headerContainer = document.getElementById('header-container');
if (headerContainer) {
    headerContainer.innerHTML = HEADER_HTML;

    // Highlight active link logic
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = headerContainer.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Mobile Menu Logic
    const mobileToggle = headerContainer.querySelector('.mobile-toggle');
    const navUl = headerContainer.querySelector('nav ul');

    if (mobileToggle && navUl) {
        mobileToggle.addEventListener('click', () => {
            navUl.classList.toggle('active');
            mobileToggle.querySelector('i').classList.toggle('fa-bars');
            mobileToggle.querySelector('i').classList.toggle('fa-times');
        });
    }
}

// Inject Footer
const footerContainer = document.getElementById('footer-container');
if (footerContainer) {
    footerContainer.innerHTML = FOOTER_HTML;
}
