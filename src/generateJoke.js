import axious from 'axios';

export default function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    axious.get('https://icanhazdadjoke.com', config).then(res => {
        document.getElementById('joke').innerHTML = res.data.joke;
    })
}