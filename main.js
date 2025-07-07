let count = 0;

const Increase = document.getElementById("increase");
const Decrease = document.getElementById("decrease");
const Reset = document.getElementById("reset");
const Label = document.getElementById("numberLabel");

Increase.onclick = function(){
  count++;
  checkGoal()
  numberLabel.textContent = count;
}

Decrease.onclick = function(){
  count--;
  checkGoal()
  numberLabel.textContent = count;
}

Reset.onclick = function(){
  count = 0;
  checkGoal()
  numberLabel.textContent = count;
}

function checkGoal(){
if (count >= 20) {
  document.getElementById("goal").textContent = "You have reached the goal.";
  } else {
    document.getElementById("goal").textContent = "Goal: click until you reach 20 clicks.";
  }
}
console.log(`${count}`)
