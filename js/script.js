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

console.log(otherJob)
