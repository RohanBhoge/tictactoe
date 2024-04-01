let btn = document.querySelectorAll(".playarea button");
let area = document.querySelectorAll(".playarea");
let rstart0 = document.getElementById("restart0");
let rstart1 = document.getElementById("restart1");
let tun = document.getElementById("turn");
let winner = document.querySelector(".winner");
let msg = document.querySelector(".msg");
let turn = true;

let win = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// Disabling the buttons.
const disablebtn = () => {
  for (bt of btn) {
    bt.disabled = true;
  }
};

// Enabling the buttons.
const enablbtn = () => {
  for (bt of btn) {
    bt.disabled = false;
  }
};

// Restart btn.
const restart = () => {
  enablbtn();
  btn.forEach((e) => {
    e.innerText = "";
  });
};

const restart1 = () => {
  winner.style.display = "none";
  enablbtn();
  btn.forEach((e) => {
    e.innerText = "";
  });
};

rstart0.addEventListener("click", restart);
rstart1.addEventListener("click", restart1);

btn.forEach((e) => {
  e.addEventListener("click", () => {
    if (turn) {
      e.innerHTML = "X";
      e.style.color = "black";
      turn = false;
      tun.innerText = "Turn: O";
    } else {
      e.innerHTML = "O";
      e.style.color = "white";
      turn = true;
      tun.innerText = "Turn: X";
    }
    e.disabled = true;
    WinPattern();
  });
});

function WinPattern() {
  win.forEach((pattern) => {
    let v0 = btn[pattern[0]].innerText;
    let v1 = btn[pattern[1]].innerText;
    let v2 = btn[pattern[2]].innerText;

    if (v0 != "" && v1 != "" && v2 != "") {
      if (v0 == v1 && v1 == v2) {
        disablebtn();
        winner.style.display = "flex";
        msg.innerText = `Congractulation the Winner is ${v0}`;
      }
    }
  });
}
