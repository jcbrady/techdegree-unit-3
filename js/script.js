// use javascript instead of autofocus in html to select the first form field on page load.
document.getElementById("name").focus()

// *This is the only part of the project where index.html needs to be changed.
// initially hide the "other" input for job roles
const otherJob = document.getElementById("other-title")
// otherJob.style.display = "hidden" doesn't work!!!
otherJob.setAttribute("type", "hidden")
// showing the other field
if (false) {
  otherJob.setAttribute("type", "text")
}

// NEXT SECTION - SELECT T-SHIRT'S

const selectDesign = document.getElementById("design")
selectDesign.firstElementChild.innerHTML = "Please Select a T-shirt Theme"

const selectColor = document.getElementById("color")
selectColor.style.display = "none"
// document.getElementById("color").style.visibility = "hidden"

// hide label for Colors
const shirtColorDiv = document.getElementById("shirt-colors")
shirtColorDiv.firstElementChild.style.display = "none"

// eventlisteners on select elements

selectDesign.addEventListener("change", e => {
  // show label for Colors
  shirtColorDiv.firstElementChild.style.display = "block"
  // show color select menu
  selectColor.style.display = "block"

  let changed = e.target
  // console.log(changed.options[0].value) // logs "please select a t-shirt theme"
  console.log(changed.options[1].value) // logs "js puns"
  console.log(changed.options[2].value) // logs "heart js"

  // conditional NOT WORKING with these values
  if (changed.options[1].value === "js puns") {
    console.log("JS Puns was selected")
  } else if (changed.options[2].value === "heart js") {
    console.log("I love Javascript was selected")
  }
})
