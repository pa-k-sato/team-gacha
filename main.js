// 乱数　＞　人に変換
const persons = ['tokita', 'fukui', 'sato', 'watanabe', 'wada', 'tran'];

// 乱数を生成する関数をつくって
function generateRandomNumber(number) {
    const randomNumber = Math.floor(Math.random() * number + 1);
    return randomNumber;
}

function displaySpeaker(number) {
    const speaker = persons[number - 1];
    console.log(number, speaker);
}

const number = generateRandomNumber(persons.length);
displaySpeaker(number);
