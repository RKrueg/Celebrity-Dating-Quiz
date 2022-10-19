window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = function (event) {
    event.preventDefault();

    let headElem = document.getElementById('headElem');

    let readNum = document.getElementById('readNum');
    readNum.setAttribute("class", "hidden");
    let foodNum = document.getElementById('foodNum');
    foodNum.setAttribute("class", "hidden");
    let magicNum = document.getElementById('magicNum');
    magicNum.setAttribute("class", "hidden");

    let hermione = document.getElementById('Hermione');
    hermione.setAttribute("class", "hidden");
    let hagrid = document.getElementById('Hagrid');
    hagrid.setAttribute("class", "hidden");
    let bellatrix = document.getElementById('Bellatrix');
    bellatrix.setAttribute("class", "hidden");

    const getReadNum = parseInt(document.querySelector('input#readNum').value);
    const getFoodNum = parseInt(document.querySelector('input#foodNum').value);
    const getMagicNum = parseInt(document.querySelector('input#magicNum').value);

    const error = 'All fields must be filled.';

    const buyShit = function(){
      alert('buy some shit.');
    }

    headElem.addEventListener("click", buyShit, {once:true});




  if(getReadNum && getFoodNum && getMagicNum){ 
    if (getReadNum > 3 && getFoodNum > 3 && getMagicNum > 3) {
      hermione.removeAttribute("class");
    } else if (getReadNum < 3 && getFoodNum < 3 && getMagicNum < 3) {
      bellatrix.removeAttribute("class");
    } else {
      hagrid.removeAttribute("class");
    }
  }else{
    alert(error);
  }
  };
}


//if readNum > 3 && magicNum > 3 && foodNum > 3:   Hermione
//if readNum < 3 && magicNum < 3&& foodNum < 3: Bellatrix
//if readNum === 3 && magicNum === 3 && foodnum === 3: hagrid 