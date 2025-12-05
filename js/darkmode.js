// Wait for DOM to be loaded
document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    // Check for saved user preference
    const savedTheme = localStorage.getItem('theme');
    
    // Apply saved theme or default to light
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }
    
    // Toggle theme on click
    themeToggle.addEventListener('click', function() {
        // Toggle dark mode class
        body.classList.toggle('dark-mode');
        
        // Save preference to local storage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Add theme toggle to mobile menu as well
    const mobileThemeToggle = themeToggle.cloneNode(true);
    mobileThemeToggle.addEventListener('click', function() {
        // Toggle dark mode class
        body.classList.toggle('dark-mode');
        
        // Save preference to local storage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});
