let selectPlanTypeBtn = document.querySelector(".select-btn");
let planInput = document.querySelector(".range");
let planName = document.querySelector(".plan-name");
let planPrice = document.querySelector(".plan-price span");
let plans = [
  { planName: "10K pageviews", planPrice: 8, ind: 1 },
  { planName: "50K pageviews", planPrice: 12, ind: 2 },
  { planName: "100K pageviews", planPrice: 16, ind: 3 },
  { planName: "500K pageviews", planPrice: 24, ind: 4 },
  { planName: "1M pageviews", planPrice: 36, ind: 5 },
];

function getPlanData() {
  let dataArray = [];
  plans.forEach((ele) => {
    if (ele.ind === Number(planInput.value)) {
      dataArray.push(ele.planName);
      dataArray.push(ele.planPrice);
      dataArray.push(ele.ind);
    }
  });
  return dataArray;
}

function showResult() {
  let data = getPlanData();
  if (selectPlanTypeBtn.classList.contains("move")) {
    data[1] -= (data[1] * 25) / 100;
  }
  if (data.length !== 0) {
    document.styleSheets[1].rules[2].style.setProperty(
      "width",
      `${(data[2] - 1) * 25}%`
    );
    planName.innerHTML = data[0];
    planPrice.innerHTML = `$${data[1].toFixed(2)}`;
  }
}

selectPlanTypeBtn.addEventListener("click", (eve) => {
  eve.target.classList.toggle("move");
  showResult();
});
planInput.addEventListener("change", showResult);
