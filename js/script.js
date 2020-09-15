//* To do: Declare all globals at the top of the file

// *******************************
// PAGE SETUP - If user has Javascript
// add an other field - COMPLETE THIS LATER
// *******************************

// Use javascript instead of autofocus in html to select the first form field on page load.
document.getElementById("name").focus()

// * This is the only part of the project where index.html needs to be changed.
// initially hide the "other" input for job roles
const otherJob = document.getElementById("other-title")
// const jobTitleOther = document.querySelector('option[value="other"]')
const jobTitle = document.getElementById("title")
otherJob.setAttribute("type", "hidden")
// +++++++++++++++++++++++++++++++
// show the other element if it's selected
// const selectJob = document.querySelector('option[value="other"]')

/////////////// loop through them all and get the value = to other //////////////
/// or maybe shortcut it by just using [6]?
////  if selected (show the other text input)

// console.log(otherJob)
// console.log(jobTitle)

jobTitle.addEventListener("change", function (e) {
  // console.log("eventListener active")
  // console.log(e.target.value) // select menu
  //  console.log(e.target.lastElementChild) // other

  if (e.target.value === "other") {
    otherJob.setAttribute("type", "text")
  } else {
    otherJob.setAttribute("type", "hidden")
  }

  // old delete this, what did I wight here?
  if (e.target === e.target.lastElementChild) {
    otherJob.setAttribute("type", "text")
  }
})

if (false) {
  otherJob.setAttribute("type", "text")
}

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
// Make sure there are not conflicts
// *******************************

// Create a DOM element, store it in a global variable and append it to the `.activites` section.
// Create a global variable to store total activity cost
const costElement = document.createElement("div")
let totalCost = 0
let activity = document.querySelector(".activities")
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

// Initially, the credit card section should be selected and displayed in the form, and the other two
// payment options should be hidden. The user should be able to change payment options at any
// time, but shouldn’t be able to select the “Select Payment Method” option. So you’ll need to
// check the currently selected payment option, and hide and show the payment sections in the
// form accordingly.
const payment = document.getElementById("payment")
payment.firstElementChild.style.display = "none"
payment.children[1].selected = "selected"

// DOM practice ... Other ways to select these option elements:
console.log(document.querySelector('#payment option[value="select method"]'))
console.log(document.querySelector('#payment option[value="credit card"]'))
console.log(payment.options[1])
console.log(payment.options[0].nextElementSibling)
console.log(payment.options[2].previousElementSibling)

// ● Hide the “Select Payment Method” `option` so it doesn’t show up in the drop-down
// menu.
// ● Get the value of the payment select element, and if it’s equal to ‘credit card’, set the
// credit card payment section in the form to show, and set the other two options to hide.
// ● Repeat the above step with the PayPal and BitCoin options so that the selected
// payment is shown and the others are hidden.

// name, email, and activities are always required
// Payment has 3 inputs and only needs validation if credit card is selected
