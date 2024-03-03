//const url = "https://cat-fact.herokuapp.com/facts";
//const getFacts = async()=>{
//    let response = await fetch(url);
//    console.log(response);
//};
const factsp = document.querySelector("#facts");
const btnfacts = document.querySelector("#getfacts");
const url = "https://cat-fact.herokuapp.com/facts";


const getfacts = async() =>{
    let response = await fetch(url);
    console.log(response);
    let newdata = await response.json();
    factsp.innerText = newdata[0].text;
} 

btnfacts.addEventListener("click",getfacts);
