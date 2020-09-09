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

  // conditional to show/hide the options in select id="color"
  if (changed.value === "js puns") {
    console.log("JS Puns was selected")
    // select the LAST 3 elements and hide them
    for (let i = 3; i < 6; i++) {
      selectColor.children[i].style.display = "none"
      console.log(selectColor.children[i])
    }
    // select the FIRST 3 elements and show them
    for (let j = 0; j < 3; j++) {
      selectColor.children[j].style.display = "block"
    }
    // reset the menu to show the first option in this group of choices
    selectColor.children[0].selected = "selected"
    // NOPE, (can't select the value this way):
    // document.querySelector('option[value = "cornflowerblue"]').style.display = "block"
    // document.querySelector('option[value = "tomato"]').style.display = "none"
  } else if (changed.value === "heart js") {
    console.log("I love Javascript was selected")
    // select the FIRST 3 elements and hide them
    for (let i = 0; i < 3; i++) {
      selectColor.children[i].style.display = "none"
    }
    // select the LAST 3 elements and show them
    for (let j = 3; j < 6; j++) {
      selectColor.children[j].style.display = "block"
    }
    // set the menu to show the first option in this group of choices
    console.log(selectColor.children[3]) // tomato
    console.log(selectColor)
    // selectColor.children[3].setAttribute("select", "selected")
    selectColor.children[3].selected = "selected"
    // console.log(selectColor.options[2])
  }
})
