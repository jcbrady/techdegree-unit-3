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

activity.addEventListener("change", function (e) {
  let check = e.target
  let cost = check.getAttribute("data-cost")
  cost = parseInt(cost)

  // console.log(parseInt(cost))
  // console.log(check)

  if (check.checked === true) {
    //console.log(check.getAttribute("name"))
    //console.log("is now checked")
    totalCost = totalCost + cost
    console.log(totalCost)
  } else if (check.checked === false) {
    //console.log(check.getAttribute("name"))
    //console.log("is now unchecked")
    totalCost = totalCost - cost
    console.log(totalCost)
  }
  costElement.textContent = "Total: $ " + totalCost
})
