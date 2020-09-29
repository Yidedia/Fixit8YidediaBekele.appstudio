
let members = ["Mary", "Sam", "Joey", "Paul", "Mike", "Char", "Jenny", "Kennedy", "Kaden", "Kurt", "Anne"]

let userName = ''

memSubmit.onclick = function() {
  userName = memberInput.value
  if (members.includes(userName) == true) {
    memLabel.value = "They are a member"
  } else {
    memLabel.value = "They are not a member, but your name has been added now"
    members.push(userName)
  }
}