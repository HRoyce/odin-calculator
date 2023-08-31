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
const Zero = document.getElementById("0");
const One = document.getElementById("1");
const Two = document.getElementById("2");
const Three = document.getElementById("3");
const Four = document.getElementById("4");
const Five = document.getElementById("5");
const Six = document.getElementById("6");
const Seven = document.getElementById("7");
const Eight = document.getElementById("8");
const Nine = document.getElementById("9");

const ClrButton = document.getElementById("clr");
const AddButton = document.getElementById("add");
const SubButton = document.getElementById("sub");
const MulButton = document.getElementById("mul");
const DivButton = document.getElementById("div");
const Eqbutton = document.getElementById("eq");

function add(a, b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a/b;
}
let num1 = "0";
let num2 = "";
let numIsZero = true; //prevents leading zero
function updateNum(a){
    if(a == "0"){
        if(numIsZero){return;}
        
    }
    if(a == "~"){
        num1 ="0"; 
        numIsZero = true; 
        displayValue.textContent = num1;
        return;}
    
    num1 += a;
    displayValue.textContent = num1;
    numIsZero = false;
}

Zero.addEventListener('click', ()=>{updateNum("0")})
One.addEventListener('click', ()=>{updateNum("1")})
Two.addEventListener('click', ()=>{updateNum("2")})
Three.addEventListener('click', ()=>{updateNum("3")})
Four.addEventListener('click', ()=>{updateNum("4")})
Five.addEventListener('click', ()=>{updateNum("5")})
Six.addEventListener('click', ()=>{updateNum("6")})
Seven.addEventListener('click', ()=>{updateNum("7")})
Eight.addEventListener('click', ()=>{updateNum("8")})
Nine.addEventListener('click', ()=>{updateNum("9")})

clrButton.addEventListener('click', ()=>{updateNum("~")})



