const searcher = document.getElementById('meaning-searcher');
const display = document.getElementById('meaning-display');

searcher.addEventListener('click', () => {
    fetchMeaning().then((response) => {
        response.text().then((meaning) => { display.textContent = meaning });
    });
});

function fetchMeaning() {
    return fetch('http://localhost:3000/').catch((error) => { console.log(error) });
}