const pages = [
    document.getElementById('answer1'),
    document.getElementById('answer2'),
    document.getElementById('answer3'),
    document.getElementById('answer4'),
    document.getElementById('answer5'),
    document.getElementById('answer6')
];

const text = document.getElementById('text');
const iconClose = document.getElementById('close');
const resultText = document.getElementById('result');
const resultBtn = document.getElementById('get');

resultBtn.onclick = function () {
    const selectedPages = pages
        .map((page, index) => page.checked ? index + 1 : null)
        .filter(index => index !== null)
        .join(',');

    const combinations = {
        '1': 'Mustafa',
        '2': 'Mahamed',
        '3': 'Hamda',
        '4': 'Marwa',
        '5': 'Maria',
        '6': 'Huda',
        '3,4': 'Asma',
        '1,3,4': 'Hana',
        '4,5': 'Hasan',
        '1,4,5': 'Abdi',
        '5,6': 'Ali',
        '1,5,6': 'Faarah',
        '2,5,6': 'Najma',
        '3,5,6': 'Sacda',
        '2,3,4,6': 'Safa'
    };

    if (combinations[selectedPages]) {
        resultText.textContent = combinations[selectedPages];
    } else {
        resultText.textContent = "Please submit the page that is your name in";
    }
    text.classList.add('show');
}

iconClose.addEventListener('click', function () {
    text.classList.remove('show');
});