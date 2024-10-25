var factList = [
 "Fact 1", /*labeling all of the facts from 1-4*/
 "Fact 2", 
 "Fact 3", 
 "Fact 4"];

var fact = document.getElementById("fact"); /*these are all variables that will be used in the code below*/
var myBtn = document.getElementById("myBtn");
var count = 0;

myBtn.addEventListener("click", displayFact); 

function displayFact(){
  fact.innerHTML = factList[count];/*defining the funciton of display fact*/
  count++;
  if (count == factList.length){
    count = 0;
  }
}
