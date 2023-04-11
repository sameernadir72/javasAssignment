function fun() {
    const num = 5;
    return function (num1) {

        console.log(num + num1)
    }
}
let result = fun();
result(3)

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let j = 3;
function Arra() {
    for (let i = 0; i < arr.length; i++) {
        if (j == i) {
            console.log("number found " + i)
            break;
        }
        else {
            console.log("not found " + i)
        }
    }
}
Arra();
function addPara() {
    const add = document.getElementById("addP");
    const value = add.value;
    const newParagraph = document.createElement("your-para");
    let color1 = Math.floor(Math.random()*16777215).toString(16);
    newParagraph.innerText = value;
    newParagraph.style.backgroundColor =  "#" + color1;
    const p = document.querySelector("p");
    p.appendChild(newParagraph);
}

function addItem() {
    const additem = document.getElementById("myInput");
    const value = additem.value;
    const list = document.getElementById("item");
    const getit = document.createElement("li");
    getit.appendChild(document.createTextNode(value));
    list.appendChild(getit);
    input.value = "";

}

let persoanl = localStorage.getItem("personalsinfo"); 
let personalsinfo = persoanl ? JSON.parse(persoanl) : [];
function personals() {
  let person = {
    firstName: prompt("Enter Name"),
    lastName: prompt("Enter lastname"),
  };
  personalsinfo.push(person);
  console.log(personalsinfo);
  let stringify = JSON.stringify(personalsinfo); 
  localStorage.setItem("personalsinfo", stringify); 
  let retrievedObject = localStorage.getItem('personalsinfo');
console.log('retrievedObject: ', JSON.parse(retrievedObject));
}