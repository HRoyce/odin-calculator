//How I would improve this code:
//Add a prop with the selector which converts the
// value of the button into its integer value
//as a prop, then uses it to as an argument
//for the click function which would allow me to
//reuse a function and use one loop
//to assign action listeners saving alot of space


//Where I left off: 

//make sure numbers stay inside of screen
//start with addition, break user input into
//pre operator and post operator
//don't allow chain functions initially
//for chain functions
//you may need a binary tree structure to eval.



//task list:

//add listeners to buttons
// store information on click
const screen = document.getElementById("displayScreen");
let displayValue = document.getElementById("displayValue");
//resolve a simple equation (1 operator)
let displayNum = "";
const zero = document.getElementById("0");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");

const clrButton = document.getElementById("clr");
const addButton = document.getElementById("add");
const subButton = document.getElementById("sub");
const mulButton = document.getElementById("mul");
const divButton = document.getElementById("div");
const eqbutton = document.getElementById("eq");

let nonZero = false;
zero.addEventListener('click', () => {
    if (nonZero == false){ }
    else{
        displayValue.textContent += "0";
    }
    console.log(displayNum);
})
one.addEventListener('click',()=>{
    displayValue.textContent+= "1";
    console.log(displayNum);
    nonZero = true;
})
two.addEventListener('click',()=>{
    displayValue.textContent+="2";
    console.log(displayNum);
    nonZero = true;
})
three.addEventListener('click',()=>{
    displayValue.textContent+="3";
    console.log(displayNum);
    nonZero = true;
})
four.addEventListener('click',()=>{
    displayValue.textContent+="4";
    console.log(displayNum);
    nonZero = true;
})
five.addEventListener('click',()=>{
    displayValue.textContent+="5";
    console.log(displayNum);
    nonZero = true;
})
six.addEventListener('click',()=>{
    displayValue.textContent+="6";
    console.log(displayNum);
    nonZero = true;
})
seven.addEventListener('click',()=>{
    displayValue.textContent+="7";
    console.log(displayNum);
    nonZero = true;
})
eight.addEventListener('click',()=>{
    displayValue.textContent+="8";
    console.log(displayNum);
    nonZero = true;
})
nine.addEventListener('click',()=>{
    displayValue.textContent+="9";
    console.log(displayNum);
    nonZero = true;
})

clrButton.addEventListener('click',()=>{
    displayValue.textContent="";
    console.log(displayNum);
    nonZero = false;

})


