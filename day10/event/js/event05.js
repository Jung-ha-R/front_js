// input
const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");
console.log(inputs);

// font-size를 25px로 키ㅜ기
// border의 스타일을 변경하기, soild 2px green
// width 200px
// height 40px

// 단, inputs[0] 방번호로 들고 오지 않는다.
// inputs 반복문을 사용해서 변경하기

inputs.forEach((input) => {
  input.style.fontSize = "25px";
  input.style.border = "soild 2px green";
  input.style.width = "200px";
  input.style.height = "40px";

  input.addEventListener("blur", () => {
    console.log(e.target.value)
  })
})

button.addEventListener("click", (e) => {
  inputs.forEach((input) => {
    console.log(input.value)
  })
})