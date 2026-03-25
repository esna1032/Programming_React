let number = 0;


// h1에 있는 숫자 요소를 가져오자
const result1 = document.getElementById("counter");
// button에 있는 + 요소를 가져오자
// const increaseButton = document.getElementById("increase");

// increaseButton.addEventListener("click", () => {
//     number++;
//     resultH1.innerHTML = number;
// });

// increaseButton.onclick = () => {
//     number++;
//     resultH1.innerHTML = number;
// };



const increase = (value = 1) =>{
    number+=value;
    result1.innerHTML = number;
};



