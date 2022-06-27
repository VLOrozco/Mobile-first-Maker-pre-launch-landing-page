function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(inputText.value.match(!mailformat)) {
    document.getElementById("invalid").innerHTML = "Oops! Please add your email";
    document.getElementById("email").style.outline = "2px solid rgba(255, 41, 101, 1)";
    document.getElementById("invalid").style.color = "rgba(255, 41, 101, 1)";
    document.form1.email.focus();
    return this;
  } else if(inputText.value.match(mailformat)) {
    document.getElementById("invalid").innerHTML = "Oops! That doesn't look like a valid email address";
    document.getElementById("email").style.outline = "2px solid rgba(62, 233, 229, 1)";
    document.getElementById("valid").style.color = "rgba(62, 233, 229, 1)";
    document.form1.email.focus();
    return this;
  } else {
    document.getElementById("email").style.outline = "2px solid rgba(255, 41, 101, 1)";
    document.getElementById("invalid").style.color = "rgba(255, 41, 101, 1)";
    document.form1.email.focus();
    return this;
  }
}

// function ValidateEmail(inputText) {
//   const emptyString = "";

//   if(inputText.value.match(emptyString)) {
//     document.getElementById("invalid").innerHTML = "Oops! Please add your email";
//     document.getElementById("email").style.outline = "2px solid rgba(255, 41, 101, 1)";
//     document.getElementById("invalid").style.color = "rgba(255, 41, 101, 1)";
//     document.form1.email.focus();
//     return true;
//   }
// }
// else(inputText.value.match(emptyString)) {
//   document.getElementById("invalid").innerHTML = "Oops! Please add your email";
//   document.getElementById("email").style.outline = "2px solid rgba(255, 41, 101, 1)";
//   document.getElementById("invalid").style.color = "rgba(255, 41, 101, 1)";
//   document.form1.email.focus();
//   return this;
// }