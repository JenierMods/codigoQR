      function animateOut() {
            const photo = document.querySelector('.photo');
            photo.classList.add('animate-out');
            setTimeout(() => {
                photo.classList.remove('animate-out');
            }, 1000);
        }