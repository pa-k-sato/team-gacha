// 乱数を生成する関数をつくって
function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    console.log(randomNumber);
    return randomNumber;
}

generateRandomNumber()
