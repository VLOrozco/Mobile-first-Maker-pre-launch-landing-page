# Frontend Mentor - Maker pre-launch landing page solution

This is a solution to the [Maker pre-launch landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/maker-prelaunch-landing-page-WVZIJtKLd). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

---

## Table of contents

- [Frontend Mentor - Maker pre-launch landing page solution](#frontend-mentor---maker-pre-launch-landing-page-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
    - [Mobile View](#mobile-view)
    - [Tablet View](#tablet-view)
    - [Desktop View](#desktop-view)
  - [Built with](#built-with)
    - [Links](#links)
  - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
  - [Author](#author)

---

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! That doesn’t look like an email address"

---
## Screenshots

### Mobile View
<img src="assets/mobileView.png" alt="stat preview card component in mobile view" width="50%"/>

### Tablet View
<img src="assets/tabletView.png" alt="stat preview card component in tablet view" width="70%"/>

### Desktop View
<img src="assets/desktopView.png" alt="stat preview card component in desktop view" width="100%"/>

---
## Built with

- HTML5
- CSS
- CSS Flexbox
- Sass
- JavaScript | Form : Email address validation
- Mobile-first workflow

---
### Links

- Solution URL: [Github Code](https://github.com/VLOrozco/Mobile-first-Maker-pre-launch-landing-page.git)
- Live Site URL: [Maker Pre-launch Landing Page](https://vlorozco.github.io/Mobile-first-Maker-pre-launch-landing-page/)

---
## What I learned

In this challenge, I practiced creating an email form within an index.html document. I learned the formatting for the index.html and how to create a form validation function with JavaScript.

Here is a code snippet of the email form written in the index.html file:

```html
<form class="input" name="form1" action="#">
  <input type="email" id="email" class="err-border" name="email address" placeholder="Email address" required>
  <input type="submit" id="submit" value="Get notified" onclick="ValidateEmail(document.form1.email)">
  <div id="validation"></div>
</form>
```
<br/>

The code snippet below is my JavaScript solution for the form `ValidateEmail()` function. It checks if the input length is empty, or if text is present - checks if the input is a valid or invalid email according to the regular expression pattern for a valid email address. The document innerHTML and style for the `#validation` will be styled according to the client input within the form.

```js
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
```
<br/>

In previous challenges, I have utilized GitHub Desktop to create my repositories and commit changes. Throughout this current project, I focused on applying my skills with Git in the terminal to create my repository and commits. My preference is to use GitHub Desktop, as it allows the visual element of viewing all changes made to the document, as well as giving the option to select which changes to commit - *making it easier to organize commits before pushing them to the repository*. Yet, for continued development, I will continue to use Git within the terminal for my repositories & commits, as it will be a valuable tool for source code management.
<br/>

---
### Useful resources

- [w3schools | JS HTML DOM css](https://www.w3schools.com/js/js_htmldom_css.asp) - This resource provided the format for changing the style of a property in the DOM.

- [w3schools | JS match() method](https://www.w3schools.com/jsref/jsref_match.asp) - This resource helped with email validation and checking if the client input was empty.

- [stackoverflow | JS validation for empty input field](https://stackoverflow.com/questions/3937513/javascript-validation-for-empty-input-field) - This resource helped with creating a function to check if the client input is empty.

- [stackoverflow | JS Regular Expressions Email Address](https://stackoverflow.com/questions/46841752/javascript-regular-expressions-email-address) - Through this stackoverflow question/solution, I acquired the *Regular Expression Pattern* for checking the email validation requirements.

---
## Author

- Github - [Veronica L. Orozco](https://github.com/VLOrozco)
- Frontend Mentor - [@VLOrozco](https://www.frontendmentor.io/profile/VLOrozco)
- Codecademy - [orozcov3](https://www.codecademy.com/profiles/orozcoV3)
