// Check if the requested page exists
function handle404() {
    // Get current URL
    const currentPath = window.location.pathname;
    
    // If we're not on the 404 page and the path doesn't exist
    if (currentPath !== '/404.html' && currentPath !== '/index.html' && currentPath !== '/') {
        window.location.href = 'http://localhost:8000/404.html';
    }
}

// Run on page load
handle404();
