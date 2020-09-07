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

  //'option[value="Select a shirt"]'

  let changed = e.target
  // console.log(changed.options[0].value) // logs "please select a t-shirt theme"
  //console.log(changed.value)
  //console.log(changed.options[1].value) // logs "js puns"
  //console.log(changed.options[2].value) // logs "heart js"

  // conditional to show/hide the options in select id="color"
  if (changed.value === "js puns") {
    console.log("JS Puns was selected")
    // select the LAST 3 elements and hide them
    for (let i = 3; i < 6; i++) {
      // selectColor.children[i].disabled = true
      selectColor.children[i].style.display = "none"
      console.log(selectColor.children[i])
    }
    // select the FIRST 3 elements and show them
    for (let j = 0; j < 3; j++) {
      selectColor.children[j].style.display = "block"
    }
    // reset the menu to show the first option in this group of choices
    document.querySelector('option[value = "cornflowerblue"]').style.display = "block"
    document.querySelector('option[value = "tomato"]').style.display = "none"
  } else if (changed.value === "heart js") {
    console.log("I love Javascript was selected")
    // select the FIRST 3 elements and hide them
    for (let i = 0; i < 3; i++) {
      // selectColor.children[i].disabled = true
      selectColor.children[i].style.display = "none"
      console.log(selectColor.children[i])
      // console.log(selectColor.options[i])
    }
    // select the LAST 3 elements and show them
    for (let j = 3; j < 6; j++) {
      selectColor.children[j].style.display = "block"
    }
    // reset the menu to show the first option in this group of choices
    document.querySelector('option[value = "tomato"]').style.display = "block"
    document.querySelector('option[value = "cornflowerblue"]').style.display = "none"
  }
})
