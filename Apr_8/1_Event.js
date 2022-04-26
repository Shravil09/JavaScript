/*
    let btn = document.getElementById("btn");
    let click1 = () =>{
        alert(`Click 1`);
    }
    let click2 = () => {
        alert(`Click 2`);
    }

    btn.addEventListener('click', click1);
    btn.addEventListener('click', click2);

    setTimeout(()=>{
        btn.removeEventListener('click', click1);
        btn.removeEventListener('click', click2);
    },10000);
*/


const button = document.querySelector("btn");
const buttonClickHandler = (event) => {
    console.log(event);
};
btn.addEventListener("click", buttonClickHandler);
// btn.addEventListener("click", (e) => {
//     console.log("Arrow function is called");
// });
setTimeout(() => {
    btn.removeEventListener("click", buttonClickHandler);
}, 2000);







