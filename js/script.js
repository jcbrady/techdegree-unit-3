//* To do: Declare all globals at the top of the file

// *******************************
// PAGE SETUP - If user has Javascript
// *******************************

// Use javascript instead of autofocus in html to select the first form field on page load.
document.getElementById("name").focus()

// * This is the only part of the project where index.html needs to be changed.
// initially hide the "other" input for job roles
const otherJob = document.getElementById("other-title")
otherJob.setAttribute("type", "hidden")
// +++++++++++++++++++++++++++++++
// COME BACK TO THIS WITH A CONDITIONAL - showing the other field if other is selected
if (false) {
  otherJob.setAttribute("type", "text")
}

// *******************************
// T-SHIRT SECTION - Select T-Shirt's
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
// ACTIVITY SECTION -
// *******************************

// Create a DOM element, store it in a global variable and append it to the `.activites` section.
// Create a global variable to store total activity cost
const costElement = document.createElement("div")
let totalCost = 0
let activity = document.querySelector(".activities")
activity.appendChild(costElement)

// console.log(costElement)

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

  // console.log(parseInt(cost))
  // console.log(check)

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

  // ● When an activity is checked, disable any activity that occurs at the same day and time
  // (i.e. "conflicting activities") without disabling the activity that was just checked.
  // ● And when an activity is unchecked, you want to enable any conflicting activities.
  // To do this, you’ll need to loop over all the checkbox inputs in the Activity section. It will be
  // helpful to create a variable that targets the activity input element at the current iteration of the
  // loop. Remember, you do this with bracket notation, using the loop iterator in the brackets.
  // Something like this: `input[i]`. Be sure to log out the variable you just created to test its value.

  // ● First, does the activity occur at the same day and time as the activity that was just
  // clicked? We can check this by seeing if the activity in the current loop iteration has a
  // `data-day-and-time` attribute that is equal to the `data-day-and-time` attribute of the
  // element that was just clicked.
  // ● Second, is the activity different than the activity that was just clicked? We can check
  // this by seeing if the activity that was just clicked is not equal to the activity in the
  // current loop iteration.
  // Both of these conditions should be checked in a single if statement using the `&&` operator.
  // If both conditions evaluate to "true", then this activity needs to be disabled or enabled
  // depending on whether the clicked activity was checked or unchecked. An `if/else` statement
  // will help here:

  // console.log(check) //  the input element that was clicked (checked or unchecked)
  console.log(dayAndTime) // check's day and time data-attribute
  // console.log(activityCheckboxes) // the nodelist

  for (let i = 0; i < activityCheckboxes.length; i++) {
    activityCheckboxes[i] // individual inputs
    // variable to get the current loop element's data-day-and-time attribute
    let inputAttrubute = activityCheckboxes[i].getAttribute("data-day-and-time")

    if (dayAndTime === inputAttrubute && check !== activityCheckboxes[i]) {
      console.log("ALERT: conflicting schedule: " + dayAndTime + " IS AT THE SAME TIME AS " + inputAttrubute)
      // check.disabled = false
      activityCheckboxes[i].disabled = true
    } else {
      console.log('test the "if" condition with the else statement')
      // activityCheckboxes[i].disabled = false
    }
  }
})
