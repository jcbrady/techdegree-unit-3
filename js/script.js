// *******************************
// PAGE SETUP - If user has Javascript
// *******************************

// variables for form submission
const form = document.getElementsByTagName("form")[0]
// put submit event on form, not on the button
// const submitButton = document.getElementsByTagName("button")[0]
// console.log(submitButton)

// Use javascript instead of autofocus in html to select the first form field on page load.
let name = document.getElementById("name")
name.focus()

const email = document.getElementById("mail")
const activity = document.querySelector(".activities") // fieldset element

// * This is the only part of the project where index.html needs to be changed.
// initially hide the "other" input for job roles
const otherJob = document.getElementById("other-title")
const jobTitle = document.getElementById("title")

otherJob.setAttribute("type", "hidden")

// show other text input if "other" option is selected
jobTitle.addEventListener("change", function (e) {
  if (e.target.value === "other") {
    otherJob.setAttribute("type", "text")
  } else {
    otherJob.setAttribute("type", "hidden")
  }
})

// *******************************
// T-SHIRT SECTION - Select T-Shirt's
// Show certain options based on selection
// *******************************

// Get the select element with ID "design"
// These are the main T-Shirt options: "JS Puns" or "I Heart JS"
const selectDesign = document.getElementById("design")
// Add text to the select dropdown menu
selectDesign.firstElementChild.innerHTML = "Please Select a T-shirt Theme"
// Get the select element with the ID "color"
// Get the parent div with the ID "shirt-colors" to target the label element
// Hide both the label and select elements
const selectColor = document.getElementById("color")
const shirtColorDiv = document.getElementById("shirt-colors")
selectColor.style.display = "none"
shirtColorDiv.firstElementChild.style.display = "none"

// Add event listener with "change" event on the "design" select element
// This conditionally shows the relevant elements in the "color" select menu
selectDesign.addEventListener("change", e => {
  // Show the "color" select menu and it's label
  selectColor.style.display = "block"
  shirtColorDiv.firstElementChild.style.display = "block"
  // Declare the changed variable when user selects a design option - select id="design"
  let changed = e.target
  // conditional to show/hide the options - select id="color"
  if (changed.value === "js puns") {
    // select the LAST 3 elements and hide them (loop 1)
    for (let i = 3; i < 6; i++) {
      selectColor.children[i].style.display = "none"
    }
    // select the FIRST 3 elements and show them (loop 2)
    for (let j = 0; j < 3; j++) {
      selectColor.children[j].style.display = "block"
    }
    // reset the menu to show the first option in this group of choices (outside of loop)
    selectColor.children[0].selected = "selected"
  } else if (changed.value === "heart js") {
    // select the FIRST 3 elements and hide them (loop 1)
    for (let i = 0; i < 3; i++) {
      selectColor.children[i].style.display = "none"
    }
    // select the LAST 3 elements and show them (loop 2)
    for (let j = 3; j < 6; j++) {
      selectColor.children[j].style.display = "block"
    }
    // set the menu to show the first option in this group of choices (outside of loop)
    selectColor.children[3].selected = "selected"
  }
})

// *******************************
// ACTIVITY SECTION
// Make sure there are not conflicts in day and time
// Also, REVISIT/ASK: Should the entire line be grayed out or just the textbox? (Video shows entire line is dimmed)
// *******************************

// Create a DOM element, store it in a global variable and append it to the `.activites` section.
// Create a global variable to store total activity cost
const costElement = document.createElement("div")
let totalCost = 0
activity.appendChild(costElement)

// Add a change event listener to the activity section.
// Add a variable to reference the DOM `input` element that was just checked
// Add a cost variable on data-cost attribute to get the cost
// If checked add to totalCost and if unchecked subtract from totalCost
// Add a variable to get info from the data-day-and-time attribute

activity.addEventListener("change", function (e) {
  let check = e.target
  let cost = check.getAttribute("data-cost")
  let dayAndTime = check.getAttribute("data-day-and-time")
  let activityCheckboxes = document.querySelectorAll('input[type="checkbox"]')

  cost = parseInt(cost)

  if (check.checked === true) {
    //console.log(check.getAttribute("name"))
    //console.log("is now checked")
    totalCost = totalCost + cost
    // console.log(totalCost)
  } else if (check.checked === false) {
    //console.log(check.getAttribute("name"))
    //console.log("is now unchecked")
    totalCost = totalCost - cost
    //console.log(totalCost)
  }
  costElement.textContent = "Total: $" + totalCost

  // Loop through all the input elements
  for (let i = 0; i < activityCheckboxes.length; i++) {
    activityCheckboxes[i] // individual inputs
    // variable to get the current loop element's data-day-and-time attribute
    let inputAttrubute = activityCheckboxes[i].getAttribute("data-day-and-time")

    // if day and time of other activities are the same as the day and time as the checked/unchecked checkbox
    // && it is not the current checked/unchecked checkbox (from the loop)
    // deselect the element if checked
    // select the element if unchecked
    if (dayAndTime === inputAttrubute && check !== activityCheckboxes[i]) {
      if (activityCheckboxes[i].disabled) {
        activityCheckboxes[i].disabled = false
      } else {
        activityCheckboxes[i].disabled = true
      }
    }
  }
})

// *******************************
// PAYMENT INFO SECTION -
// *******************************

// initially activate credit card payment option & hide other payment options
const payment = document.getElementById("payment")
const credit_card = document.getElementById("credit-card")
// console.log(payment)
// console.log(credit_card)
// console.log(activity)
const paypal = document.getElementById("paypal")
const bitcoin = document.getElementById("bitcoin")
payment.firstElementChild.style.display = "none"
payment.children[1].selected = "selected"
paypal.style.display = "none"
bitcoin.style.display = "none"
// add event listener to hide and show the various inputs
payment.addEventListener("change", function (e) {
  if (e.target.value === "credit card") {
    // show credit card, hide others
    credit_card.style.display = "block"
    paypal.style.display = "none"
    bitcoin.style.display = "none"
  } else if (e.target.value === "paypal") {
    // show paypal, hide others
    credit_card.style.display = "none"
    paypal.style.display = "block"
    bitcoin.style.display = "none"
  } else if (e.target.value === "bitcoin") {
    // show bitcoin, hide others
    credit_card.style.display = "none"
    paypal.style.display = "none"
    bitcoin.style.display = "block"
  }
})

// *******************************
// FORM VALIDATION AND VALIDATION MESSAGES
// *******************************

//
// *******************************
// HELPER FUNCTIONS
//
// helper function and error message to validate "name"
const nameValidator = () => {
  // get the label element (to append span) and create span element for an error message
  // set an id attribute so it can be selected (if present)
  // If present existingErrorSpan selects the id so it can be referenced in the if/else statement
  const nameLabel = document.getElementsByTagName("label")[0]

  let errorName = document.createElement("span")
  errorName.setAttribute("id", "nameError")
  let existingErrorSpan = document.getElementById("nameError")

  // error message if name is empty
  if (name.value.length > 0) {
    // error message removed if there was a previous error
    if (existingErrorSpan) {
      nameLabel.removeChild(existingErrorSpan)
    }
    name.style.border = "2px solid rgb(111, 157, 220)"
    return true
    // using else/if instead of just else, fixes multiple error messages stacking up
  } else if (!existingErrorSpan) {
    //nameErr("The name field can't be empty.")
    errorName.style.color = "red"
    errorName.innerHTML = " Please enter your name as you want it to appear on your nametag."
    nameLabel.appendChild(errorName)
    name.style.border = "2px solid red"
    return false
  }
}

// helper function to validate email
const emailValidator = () => {
  // get the label element (to append span) and create span element for an error message
  // set an id attribute so it can be selected (if present)
  // If present, existingErrorSpan selects the id so it can be referenced in the if/else statement
  const emailLabel = document.getElementsByTagName("label")[1]
  //console.log(emailLabel)
  let errorEmail = document.createElement("span")
  //console.log(errorEmail)
  errorEmail.setAttribute("id", "emailError")
  let existingErrorSpan = document.getElementById("emailError")
  //console.log(existingErrorSpan) // null at first because it isn't in the document
  // for regex
  const emailValue = email.value
  //console.log(emailValue)
  const atSymbol = emailValue.indexOf("@")
  //console.log(atSymbol)
  const dot = emailValue.lastIndexOf(".")
  //console.log(dot)

  // Check 1: error message if email is empty
  if (email.value.length !== 0 && atSymbol > 1 && dot > atSymbol + 1) {
    // error message removed if there was a previous error
    if (existingErrorSpan) {
      emailLabel.removeChild(existingErrorSpan)
    }
    email.style.border = "2px solid rgb(111, 157, 220)"
    return true
    // else/if fixes multiple error messages stacking up
  } else if (!existingErrorSpan) {
    errorEmail.style.color = "red"
    errorEmail.innerHTML = " Please enter a valid email."
    emailLabel.appendChild(errorEmail)
    email.style.border = "2px solid red"
    return false
  }
}

// helper function to validate activities
// Code reference thanks to "sradms0" on Slack
const activityValidator = () => {
  // at least one checkbox must be checked
  // existingErrorSpan to "get by ID" if the element already exists
  let existingErrorSpan = document.getElementById("activityError")
  // check if any checkboxes have been checked
  let check = document.querySelector("input:checked")
  // if any of the checkboxes are checked, pass. If none are checked, fail
  if (check) {
    // if the error element already exists in the document, remove it
    if (existingErrorSpan) {
      activity.removeChild(existingErrorSpan)
    }
    return true
  } else {
    // if there are no boxes checked and existingErrorSpan does NOT exist, create it and add it to the DOM
    if (!existingErrorSpan) {
      const activityInsert = document.querySelector(".activities label")
      let errorActivity = document.createElement("span")
      errorActivity.style.color = "red"
      errorActivity.innerHTML = "Please select at least one activity."
      errorActivity.setAttribute("id", "activityError")

      activity.insertBefore(errorActivity, activityInsert)
    }
    return false
  }
}

// Global variables, outside the creditCard helper functions, so I could reference them in eventListeners on page load.
const ccNumber = document.querySelector("#cc-num")
const zip = document.querySelector("#zip")
const cvv = document.querySelector("#cvv")

//paymentLabel is the element used for inserting error messages into the DOM.
const paymentLabel = document.querySelector("label[for='payment']")

// helper function to validate credit card number.
const ccNumberValidator = () => {
  // Regular expression for credit card number = 13-16 numbers.
  const ccNumberRegex = /^[0-9]{13,16}$/.test(ccNumber.value)

  const existingErrorSpanNum = document.getElementById("cardError")

  // if the field is empty and the Credit Card number isn't valid
  if (ccNumber.value.length !== 0 && ccNumberRegex) {
    // if there's an existingErrorSpan in the DOM remove it
    if (existingErrorSpanNum) {
      paymentLabel.removeChild(existingErrorSpanNum)
      ccNumber.style.border = "2px solid rgb(111, 157, 220)"
      return true
    }
    // otherwise, create and append an error message
  } else {
    if (!existingErrorSpanNum) {
      const cardErrorSpan = document.createElement("span")
      cardErrorSpan.innerHTML = " Please enter a valid credit card; 13-16 numbers (no spaces)."
      cardErrorSpan.setAttribute("id", "cardError")
      cardErrorSpan.style.color = "red"
      ccNumber.style.border = "2px solid red"
      paymentLabel.appendChild(cardErrorSpan)
      return false
    }
  }
} // end credit card number validation helper function

// helper function to validate zip.
const zipValidator = () => {
  // Regular expression for credit card zip = 5 or more numbers
  const zipRegex = /^[0-9]{5,}$/.test(zip.value)
  const existingErrorSpanZip = document.getElementById("zipError")

  if (zip.value.length !== 0 && zipRegex) {
    // if there's an existingErrorSpanZip in the DOM, remove it
    if (existingErrorSpanZip) {
      paymentLabel.removeChild(existingErrorSpanZip)
      zip.style.border = "2px solid rgb(111, 157, 220)"
    }
    return true
    // otherwise create and append an error message
  } else {
    if (!existingErrorSpanZip) {
      const zipErrorSpan = document.createElement("span")
      zipErrorSpan.innerHTML = " Please enter a valid zip code."
      zipErrorSpan.setAttribute("id", "zipError")
      zipErrorSpan.style.color = "red"
      zip.style.border = "2px solid red"
      paymentLabel.appendChild(zipErrorSpan)
      return false
    }
  }
} // end credit card zip validation helper function

// helper function to validate cvv.
const cvvValidator = () => {
  // Regular expression for credit card cvv = 3 numbers
  const cvvRegex = /^[0-9]{3}$/.test(cvv.value)
  const existingErrorSpanCvv = document.getElementById("cvvError")
  console.log(existingErrorSpanCvv)
  console.log(cvv.value)
  console.log("cvv runs outside of if statement(s)")

  if (cvv.value.length !== 0 && cvvRegex) {
    // if there's an existingErrorSpan remove it.
    if (existingErrorSpanCvv) {
      console.log("if statement runs so existingErrorSpan is true and should return a true value.")
      paymentLabel.removeChild(existingErrorSpanCvv)
      cvv.style.border = "2px solid rgb(111, 157, 220)"
    }
    // if the cvv.value is not empty and there are 3 numbers in the CVV
    // return "true"
    console.log(cvv.value)
    return true
  } else {
    // else if no error is in the DOM, create and append an error message
    if (!existingErrorSpanCvv) {
      const cvvErrorSpan = document.createElement("span")
      cvvErrorSpan.innerHTML = " Please enter a valid CVV."
      cvvErrorSpan.setAttribute("id", "cvvError")
      cvvErrorSpan.style.color = "red"
      cvv.style.border = "2px solid red"
      paymentLabel.appendChild(cvvErrorSpan)
      console.log(cvv.value)
      console.log("the else runs and returns false")
      return false
    }
  }
}

// Thanks to Elijah on Slack for help with this section and the Credit Card helper functions

// eventlisteners for triggering helper functions
name.addEventListener("blur", nameValidator)
email.addEventListener("blur", emailValidator)
activity.addEventListener("mouseout", activityValidator)
ccNumber.addEventListener("keyup", ccNumberValidator)
zip.addEventListener("keyup", zipValidator)
cvv.addEventListener("keyup", cvvValidator)

// if validation is false and the error messages are in the DOM, don't submit the form
form.addEventListener("submit", e => {
  // this is one way to write the if conditional
  if (nameValidator() === false) {
    e.preventDefault()
    console.log(name.value + "name was empty, so nameValidator evaluated to false")
  } else {
    console.log(name.value + " is the name, nameValidator evaluated to true")
  }
  // this is a more common way to write it
  if (!emailValidator()) {
    e.preventDefault()
    console.log("emailValidator evaluated to false")
  }

  if (!activityValidator()) {
    e.preventDefault()
    console.log("activityValidator evaluated to false")
  }
  if (!ccNumberValidator() && !zipValidator() && !cvvValidator()) {
    e.preventDefault()
    console.log("creditCardValidator evaluated to false")
  }
})
