alert("This is a password generator.")

let firstName = prompt("Please input your First Name")
let lastName = prompt("Please input your Last Name")
let favouriteColour = prompt("What is your favourite colour?")
let range = prompt("Input number range, e.g 10 100")


firstName = firstName.split(" ").join('')
favouriteColour = favouriteColour.split(" ").join('')

range = range.split(" ")

for(let i = 0; i < range.length; i++){
    range[i]= parseFloat(range[i]); 
}


alert(`Your new password below:
${firstName}${lastName}${favouriteColour}${Math.floor(Math.random() * (range[1]-range[0]))+range[0]}`)
