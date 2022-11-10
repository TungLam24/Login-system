let username = prompt("Who's there")
if (username === "Admin") {
    let password = prompt("Password?");
    if (password === "TheMaster") {
        alert("Welcome")
    } else if (password == null ) {
        alert("Canceled")
    } else {
        alert("Wrong password")
    }
} else if (username == null) {
    alert("canceled")
} else {
    alert("I dont know you")
}