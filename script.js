const themeSwitch = document.getElementById('theme-switch');
        const body = document.body;

        themeSwitch.addEventListener('change', () => {
            if (themeSwitch.checked) {
                body.style.background = "url('assets/bg-desktop-light.jpg') no-repeat center center fixed";
            } else {
                body.style.background = "url('assets/bg-desktop.jpg') no-repeat center center fixed";
            }
        });