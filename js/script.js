// uncomment to use javascript instead of autofocus in html
// document.getElementById("name").focus()

// initially hide the "other" input for job roles
const otherJob = document.getElementById("other-title")
// otherJob.style.display = "hidden" doesn't work!!!
otherJob.setAttribute("type", "hidden")
// showing the other field
if (false) {
  otherJob.setAttribute("type", "text")
}

console.log(otherJob)
