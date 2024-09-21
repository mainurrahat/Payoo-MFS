// console.log("home connected");

document
  .getElementById("btn-addMoney")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // get money added to main account
    const addMoney = document.getElementById("input-add-money").value;
    const addMoneyNum = parseFloat(addMoney);
    // console.log(addMoney);
    const input_pin_num = document.getElementById("input-pin-num").value;
    // console.log(input_pin_num);
    if (input_pin_num === "1234") {
      console.log("adding money to ur account");
      const blnce = document.getElementById("account_balance").innerText;
      const prevBalnceNum = parseFloat(blnce);
      const newBlnce = prevBalnceNum + addMoneyNum;
      console.log(newBlnce);
      document.getElementById("account_balance").innerText = newBlnce;
    } else {
      console.log("pin vul vai,plj try again");
    }
  });
