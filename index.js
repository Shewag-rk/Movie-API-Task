// function showAlert(message, className) { /* function for show error box */
//     alert.innerHTML = message;
//     alert.className = `alert ${className}`;
//     setTimeout(() => {
//       alertBox.innerHTML = "";
//       alertBox.className = "";
//     }, 2000);
//   }


let inputField = document.getElementById('inputName').value;
let userName = document.getElementById('inputUsername').value;
let userEmail = document.getElementById('inputEmail').value;


const loignUserDetails = {
    username: inputField,
    name: userName,
    useremail: userEmail
}

let userObjData = JSON.parse(localStorage.getItem("registerUsers")) || [];


userObjData.push(loignUserDetails);
localStorage.setItem("registerUsers", JSON.stringify(userObjData));
document.getElementById("registerorm").innerHTML = "";