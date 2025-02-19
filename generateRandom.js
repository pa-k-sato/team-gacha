

/*
    https://sbfl.net/blog/2017/06/01/javascript-reproducible-random/
    を参考に。
    これのロジックを変えてみて営業日の日付からうまくばらけるロジックを作りたい。

    テスト：2023, 2024 の営業日のリストを作って乱数（0-5）がうまくばらけることを確認する。
*/

class Random {
    constructor(seed = 88675123) {
      this.x = 123456789;
      this.y = 362436069;
      this.z = 521288629;
      this.w = seed;
    }
    
    // XorShift
    next() {
      let t;
   
      t = this.x ^ (this.x << 11);
      this.x = this.y; this.y = this.z; this.z = this.w;
      return this.w = (this.w ^ (this.w >>> 19)) ^ (t ^ (t >>> 8)); 
    }
}

function getTodayNumber(date){
  return date.getFullYear() * 10000 + (date.getMonth()+1) * 100 + date.getDate();
}
