document.addEventListener("DOMContentLoaded", function() {
    function showTab(tabId) {
        // Hide all tab content
        var tabs = document.getElementsByClassName('tab-content');
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('active');
        }
        // Show the selected tab content
        document.getElementById(tabId).classList.add('active');

        // Highlight the active nav link
        var navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(function(link) {
            link.classList.remove('active');
        });
        document.querySelector('nav a[href="#' + tabId + '"]').classList.add('active');
    }

    // Smooth scroll effect
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Attach event listeners to nav links
    var navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var tabId = this.getAttribute('href').substring(1);
            showTab(tabId);
        });
    });

    // Show the default tab
    showTab('home');
});
