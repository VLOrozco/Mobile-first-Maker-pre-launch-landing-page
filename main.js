function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(inputText.value.match(mailformat)) {
    document.getElementById("email").style.outline = "2px solid rgba(62, 233, 229, 1)";
    document.getElementById("valid").style.color = "rgba(62, 233, 229, 1)";
    document.form1.email.focus();
    return true;
  } else {
    document.getElementById("email").style.outline = "2px solid rgba(255, 41, 101, 1)";
    document.getElementById("invalid").style.color = "rgba(255, 41, 101, 1)";
    document.form1.email.focus();
    return false;
  }
}