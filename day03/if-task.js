// 이름: 여러분들의 성함
// 국어: 80점
// 수학: 70점
// 영어: 90점
// 과학: 20점

// 평균 학점 구하기
// if문을 사용해서 평균이 60점이면 합격, 60점 이하는 불합격을 출력하기

// 최종 문장
// OOO님의 이번 총점은 OO, 평균은 OO점으로 (합격 또는 불합격)입니다

const name = "정하림";
let baseKorean = 80;
let baseMath = 70;
let baseEnglish = 90;
let baseScience = 20;

let total = baseKorean + baseMath + baseEnglish + baseScience;
let average = total / 4;

let pass = "합격";
let notPass = "불합격"
let cutline = average >= 60;
let passingResult = cutline ? pass : notPass;
let result = `${name}님의 이번 총점은 ${total}, 평균은 ${average}점으로 ${passingResult}입니다.`

if (cutline) {
  console.log(result);
}else{
  console.log(result)
}

