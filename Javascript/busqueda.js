document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var query = document.getElementById('searchInput').value;
        var braveSearchUrl = 'https://search.brave.com/search?q=' + encodeURIComponent(query);
        window.location.href = braveSearchUrl;
    });
});
