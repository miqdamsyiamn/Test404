// Check if the requested page exists
function handle404() {
    fetch(window.location.pathname)
        .then(response => {
            if (!response.ok && response.status === 404) {
                window.location.href = '/404.html';
            }
        })
        .catch(() => {
            window.location.href = '/404.html';
        });
}

// Run on page load
handle404();
