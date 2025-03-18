// JavaScript for Smooth Scrolling and Interaction
document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1); // Get ID without #
        const targetSection = document.getElementById(targetID);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth',
            });
        }
    });
});
