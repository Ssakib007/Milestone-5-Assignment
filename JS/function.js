const heartClickEl = document.querySelectorAll(".heart-Click");
// Heart Count
let count = 1;
for (let heart of heartClickEl) {
  heart.addEventListener("click", function (event) {
    const heartCountEl = document.getElementById("heart-count");

    heartCountEl.innerText = count;
    count++;
  });
}

// Call
const callBtns = document.querySelectorAll(".call-Btn");

for (let callBtn of callBtns) {
  callBtn.addEventListener("click", function (event) {
    let coinCount = parseInt(document.getElementById("coin-count").innerText);
    let servicesTile = callBtn.parentNode.parentNode.children[2].innerText;
    let servicesNumber = callBtn.parentNode.parentNode.children[3].innerText;

    if (coinCount >= 20) {
      alert("📞 Calling " + servicesTile + " " + servicesNumber + " ...");
      coinCount -= 20;
      document.getElementById("coin-count").innerText = coinCount;
      let historyCardEl = document.getElementById("history-card");
      let servicesTile1 = callBtn.parentNode.parentNode.children[1].innerText;
      let historyCardTime = new Date().toLocaleTimeString();
      let div = document.createElement("div");
      div.innerHTML = `<div class="flex justify-between gap-3 items-center bg-neutral-50 rounded-lg p-3 mb-3">
              <div>
              <h1 class="text-sm max-lg:text-[9px] font-medium text-neural-900">${servicesTile1}</h1>
              <h2 class="text-zinc-600 text-sm font-medium">${servicesNumber}</h2>
              </div>
              <div>
                <h2 class="text-sm font-medium max-lg:text-xs text-neutral-900">${historyCardTime}</h2>
              </div>
            </div>`;

      historyCardEl.appendChild(div);

      //   clear

      const clearBtn = document.getElementById("clearBtn");
      clearBtn.addEventListener("click", function () {
        historyCardEl.innerHTML = "";
      });
    } else {
      alert(
        "❌ You don't have enough coins, a call requires minimun 20 coins!",
      );
      document.getElementById("coin-count").innerText = coinCount;
    }
  });
}

// Copy

const copyBtns = document.querySelectorAll(".copy-btn");
let copyCount = 1;
for (let copyBtn of copyBtns) {
  copyBtn.addEventListener("click", function () {
    const copyCountNum = document.getElementById("copyCount");
    copyCountNum.innerText = copyCount;
    copyCount++;

    let servicesNumber = copyBtn.parentNode.parentNode.children[3].innerText;
    let inputTag = document.createElement("input");
    document.getElementById("history-card").appendChild(inputTag);
    inputTag.value = servicesNumber;
    inputTag.select();
    document.execCommand("copy");
    document.getElementById("history-card").removeChild(inputTag);
    alert("The number is copied: " + servicesNumber);
  });
}
