const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const country = document.querySelector("#country");
const score = document.querySelector("#score");
const form = document.querySelector("form");
const results = document.querySelector("#results");
const scores = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   const form = document.forms[0];
  //   const formElementsArray = Array.from(form.elements);
  //   formElementsArray.forEach((element) => console.log(element.value));
  if(fname.value===""&& lname.value===""&&country.value===""&&score.value===""){
    alert("Please Enter A Player's Name")
  }else{

  
  const obj = {
    id: Date.now(),
    name: fname.value + " " + lname.value,
    country: country.value,
    score: score.value,
  };

  scores.push(obj);
  // console.log(scores);

  fname.value = "";
  lname.value = "";
  country.value = "";
  score.value = "";

  fname.focus();

  displayScore();
}
});

function displayScore() {
  results.innerHTML = " ";
  for (let i = 0; i < scores.length; i++) {
    let newDiv = document.createElement("div");
    newDiv.className = "newdiv";

    let para = document.createElement("p");
    let para1 = document.createElement("p");
    let para2 = document.createElement("p");
    let increasBtn = document.createElement("button");
    increasBtn.id = "increase";
    let decreasBtn = document.createElement("button");
    decreasBtn.id = "decrease";
    let deleteBtn = document.createElement("button");
    deleteBtn.id ="delete";

    increasBtn.innerText = "+5";
    decreasBtn.innerText = "-5";
    deleteBtn.innerText = "Del";

    shorting(scores);
    increasBtn.addEventListener("click", function () {
      scores[i].score = Number(scores[i].score) + Number(5);
      displayScore();
      shorting(scores);
    });
    decreasBtn.addEventListener("click", function () {
      scores[i].score = Number(scores[i].score) - Number(5);
      displayScore();
      shorting(scores);
    });
    deleteBtn.addEventListener("click", function () {
      newDiv.remove()
    });

    para.innerText = scores[i].name;
    para1.innerText = scores[i].country;
    para2.innerText = scores[i].score;
    newDiv.append(para, para1, para2, increasBtn, decreasBtn, deleteBtn);

    results.append(newDiv);
  }
}
function shorting(scores) {
  scores.sort((a, b) => b.score - a.score);
  // console.log(shorting(scores));
}
