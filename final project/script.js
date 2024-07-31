document.querySelector('.nav-icon').addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
    const emailform = document.getElementById('emailform1');
    const thanks = document.getElementById('thanks');

    emailform.addEventListener('submit', function(event) {
        event.preventDefault();

        thanks.style.display = 'block';

        emailform.reset();
    });
});
