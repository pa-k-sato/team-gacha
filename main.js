// 乱数　＞　人に変換
const persons = ['tokita', 'fukui', 'sato', 'watanabe', 'wada', 'tran'];

function displaySpeaker(number) {
    const speaker = persons[number - 1];
    console.log(number, speaker);
    document.getElementById("speakerName").textContent = speaker;
}

setTimeout(() => {
    const number = Math.abs(new Random(getTodayNumber()).next()) % 6;
    displaySpeaker(number);
}, 1500);
