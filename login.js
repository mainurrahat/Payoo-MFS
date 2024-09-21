// console.log("login");
// step-->1==>set the event handeler
document.getElementById("btn-login").addEventListener("click", function (e) {
  // step-->2==>prevent defoult behavior(reloding browser)
  e.preventDefault(); //vejal to beginners
  // used to stop the default action that belongs to the event from occurring
  console.log("i love u");
  //   step-->3==>get the phn number
  const phoneNumber = document.getElementById("phn-nmbr");
  console.log(phoneNumber.value);
});
