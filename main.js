// 乱数　＞　人に変換
const persons = ['hayato.fukui', 'kenji.sato', 'keisuke.sato', 'eiichi.chida', 'yugo.okada', 'naomi.sasaki'];

function displaySpeaker(number) {
    const speaker = persons[number];
    console.log(number, speaker);
    document.getElementById("speakerName").textContent = speaker;
}

setTimeout(() => {
    const todayRandomNumber = new Random(getTodayNumber(new Date())).next();
    const number = Math.abs(todayRandomNumber) % persons.length;
    displaySpeaker(number);
}, 1500);
