var mailformat = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;

function ValidateEmail(inputText) {
  if(inputText.value.length == 0) {
    document.getElementById("validation").innerHTML = "Oops! Please add your email";
    document.getElementById("email").style.outline = "2px solid rgba(255, 41, 101, 1)";
    document.getElementById("validation").style.color = "rgba(255, 41, 101, 1)";
    document.form1.email.focus();
    return this;
  } else if(inputText.value.match(mailformat)) {
    document.getElementById("validation").innerHTML = "Valid email address!";
    document.getElementById("email").style.outline = "2px solid rgba(62, 233, 229, 1)";
    document.getElementById("validation").style.color = "rgba(62, 233, 229, 1)";
    document.form1.email.focus();
    return this;
  } else {
    document.getElementById("validation").innerHTML = "Oops! That doesn't look like a valid email address";
    document.getElementById("email").style.outline = "2px solid rgba(255, 41, 101, 1)";
    document.getElementById("validation").style.color = "rgba(255, 41, 101, 1)";
    document.form1.email.focus();
    return this;
  }
}