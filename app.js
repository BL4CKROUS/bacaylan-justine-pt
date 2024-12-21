const jokeContainer = document.getElementById('joke');
const jokeButton = document.getElementById('get-joke');

jokeButton.addEventListener('click', fetchJoke);

function fetchJoke() {
    jokeButton.textContent = 'Loading...';
    fetch('https://v2.jokeapi.dev/joke/Any?type=single')
        .then(response => response.json())
        .then(data => {
            jokeContainer.textContent = data.joke || `${data.setup} - ${data.delivery}`;
            jokeButton.textContent = 'Get a Joke';
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
            jokeContainer.textContent = 'Oops! Something went wrong.';
            jokeButton.textContent = 'Try Again';
        });
}

// Register service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(() => {
        console.log('Service Worker Registered');
    });
}
