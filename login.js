// //console.log("login");
// step-->1==>set the event handeler
document.getElementById("btn-login").addEventListener("click", function (e) {
  // step-->2==>prevent defoult behavior(reloding browser)
  e.preventDefault(); ////vejal to beginners
  //// used to stop the default action that belongs to the event from occurring
  console.log("i love u");
  //   step-->3==>get the phn number and pin number
  const phoneNumber = document.getElementById("phn-nmbr").value;
  //   console.log(phoneNumber);
  const pinNumber = document.getElementById("pin-num").value;
  //   console.log(pinNumber);
  // step-->5==>chk validity
  if (phoneNumber === "01890159627" && pinNumber === "1234") {
    console.log("log in korcho successfully");
    window.location.href = "/home-page.html";
  } else {
    alert("madharchod valo kore dekhe type kor");
    console.log("shala chor nmbr and pin 2 tai vul krcs");
  }
});
