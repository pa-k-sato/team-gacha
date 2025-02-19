// 乱数　＞　人に変換
const persons = ['fukui', 'sato', 'watanabe', 'wada', 'tran'];

function displaySpeaker(number) {
    const speaker = persons[number];
    console.log(number, speaker);
    document.getElementById("speakerName").textContent = speaker;
}

setTimeout(() => {
    const number = Math.abs(new Random(getTodayNumber()).next()) % persons.length;
    displaySpeaker(number);
}, 1500);
