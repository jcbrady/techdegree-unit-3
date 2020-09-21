//* Should I declare all globals at the top of the file?

// *******************************
// PAGE SETUP - If user has Javascript
// add an other field - COMPLETE THIS LATER
// *******************************

// Use javascript instead of autofocus in html to select the first form field on page load.
let name = document.getElementById("name")
name.focus()

const email = document.getElementById("mail")
const activity = document.querySelector(".activities") // fieldset element
const activityLabelInputs = document.querySelectorAll(".activities label input")
//const form = document.querySelector("form")

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

  // if (e.target === e.target.lastElementChild) {
  //   otherJob.setAttribute("type", "text")
  // }
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
        //activityLabelInputs.style.color = ""
      } else {
        activityCheckboxes[i].disabled = true
        // console.log(activityLabelInputs[i]) // How to target the text in these inputs
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

// name, email, and activities are always required
// Payment has 3 inputs and only needs validation if credit card is selected
//
// HELPER FUNCTIONS
// helper function and error message to validate "name"
const nameValidator = () => {
  //console.log(name.value.length)
  // get the label element (to append span) and create span element for an error message
  // set an id attribute so it can be selected (if present)
  // If present existingErrorSpan selects the id so it can be referenced in the if/else statement
  const nameLabel = document.getElementsByTagName("label")[0]
  let errorName = document.createElement("span")
  errorName.setAttribute("id", "nameError")
  let existingErrorSpan = document.getElementById("nameError")

  // error message if name is empty
  if (name.value.length !== 0) {
    // error message removed if there was a previous error
    if (existingErrorSpan) {
      nameLabel.removeChild(existingErrorSpan)
    }
    //console.log("check passes, there are more than 0 characters!")
    //console.log(errorName)
    //console.log(name.parentNode)
    //console.log(nameLabel)
    //name.style.border = "2px solid white"
    name.style.border = "1px"
    return true
    // using else/if instead of just else, fixes multiple error messages stacking up
  } else if (!existingErrorSpan) {
    errorName.style.color = "red"
    errorName.innerHTML = " The name field is required."
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

  // if (true) {
  //   console.log("The @ and . validity check in email")
  // }

  // Check 1: error message if email is empty
  if (email.value.length !== 0 && atSymbol > 1 && dot > atSymbol + 1) {
    // error message removed if there was a previous error
    if (existingErrorSpan) {
      emailLabel.removeChild(existingErrorSpan)
    }
    email.style.border = "1px"
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
const activityValidator = () => {
  // at least one box must be checked
  const activityInsert = document.querySelector(".activities label")

  let errorActivity = document.createElement("span")
  errorActivity.style.color = "red"
  errorActivity.innerHTML = "Please select at least one activity."
  // console.log(errorActivity)
  errorActivity.setAttribute("id", "activityError")
  // this will get the element if it exists
  let existingErrorSpan = document.getElementById("activityError")
  //console.log(existingErrorSpan)

  let check = null
  check = document.querySelector("input:checked")
  // console.log("check")
  // console.log(check) // checked input element

  // if any of the checkboxes are checked, pass. If none are checked, fail
  if (check) {
    console.log("pass")
    console.log("activity")
    console.log(activity)
    console.log("errorActivity")
    console.log(errorActivity)
    // if existingErrorSpan already exists, remove it
    // if existingErrorSpan doesn't exist, this if will be ignored
    ////// is this throwing an error? activity is the fieldset and errorActivity is the span
    if (existingErrorSpan) {
      ////// needed to setup a new getElementById
      ////// activity.removeChild(errorActivity) wasn't working
      ////// Not sure why it doesn't work, it's the second child of the fieldset element(activity))

      // let span = document.getElementById("activityError")
      // span.style.display = "none"
      activity.removeChild(existingErrorSpan)
    }
    ////// I'm guessing these return statements are for something later
    ////// If not, why are they necessary?
    return true
  } else {
    console.log("fail")
    // add an error message above the first label element
    activity.insertBefore(errorActivity, activityInsert)
    // if existingErrorSpan exists, then remove it
    if (existingErrorSpan) {
      activity.removeChild(errorActivity)
    }
    //activityLegend.firstElementChild.appendChild(errorActivity)
    return false
  }
  //}

  // outside of loop append the message
  // if errorActivity doesn't exist in the document, add it
}

// for (let i = 0; i < activityLabels.length; i++) {
//   console.log(activityLabels[i]) //.hasAttribute("checked"))

//   if (activityLabels[i].checked === true) {
//     console.log("at least one activity has been checked.")
//     return true
//   } else {
//     console.log("no activities were checked, please select at least one activity")
//     return false
//   }
// }

// helper function to validate credit card
const creditCardValidator = () => {}

//
//
//
// eventlisteners
name.addEventListener("blur", nameValidator)
email.addEventListener("blur", emailValidator)
activity.addEventListener("mouseout", activityValidator)
